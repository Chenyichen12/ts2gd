import TsGdProject from "../project"
import fs from "fs"
import path from "path"
import { AssetSourceFile } from "../assets/asset_source_file"

class UidToResPathMapper {
  private uidToResPathMap: Map<string, string>
  constructor(project: TsGdProject) {
    const sourceAssetsPath = project.sourceFiles().map((a) => {
      const sourceAsset = a as AssetSourceFile
      // trim res://
      const resFsPath = path.join(project.paths.rootPath, sourceAsset.resPath.slice(6))
      return {
        resPath: sourceAsset.resPath,
        fsPath: resFsPath + ".uid",
      }
    })
    this.uidToResPathMap = new Map<string, string>()
    for (const assetPath of sourceAssetsPath) {
      try {
        const uidContent = fs.readFileSync(assetPath.fsPath, "utf-8").trim()
        this.uidToResPathMap.set(uidContent, assetPath.resPath)
      } catch (e) {
        // ignore errors
        continue
      }
    }
  }
  getResPath(uid: string): string | undefined {
    return this.uidToResPathMap.get(uid)
  }
}

export default function buildSingletonName(project: TsGdProject) {
  let result = ``

  const uidToResPathMapper = new UidToResPathMapper(project)

  const autoLoadConfigs = project.godotProject.rawConfig.autoload[0] ?? {}
  const projectAutoLoads: {
    loadName: string
    resPath: string
  }[] = Object.keys(autoLoadConfigs)
    .filter((v) => {
      return !v.startsWith("$")
    })
    .map((key) => {
      const resPath = (autoLoadConfigs as any)[key]
      return {
        loadName: key,
        resPath: typeof resPath === "string" ? resPath.slice(1) : "",
      }
    })

  const exportAssetsInfo: {
    loadName: string
    fsPath: string
  }[] = []
  for (const autoload of projectAutoLoads) {
    const resPath = uidToResPathMapper.getResPath(autoload.resPath)

    if (resPath) {
      const assetPath = project.sourceFiles().find((a) => a.resPath === resPath)
      if (assetPath) {
        // fsPathSet.add(assetPath.fsPath)
        exportAssetsInfo.push({
          loadName: autoload.loadName,
          fsPath: assetPath.fsPath,
        })
      }
    }
  }
  for(const assetInfo of exportAssetsInfo){
    // remove extension from import path
    const importPath = assetInfo.fsPath.replace(".ts", "");
    result += `declare const ${assetInfo.loadName}: import("${importPath}").default;\n`
  }

  const destPath = path.join(
    project.paths.dynamicGodotDefsPath,
    "@autoloads.d.ts"
  )

  fs.writeFileSync(destPath, result)
}
