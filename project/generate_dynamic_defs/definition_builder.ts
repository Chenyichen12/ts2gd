import { AssetSourceFile } from "../assets/asset_source_file"
import TsGdProject from "../project"

import buildActionNames from "./build_action_names"
import buildAssetPathsType from "./build_asset_paths"
import buildGroupTypes from "./build_group_types"
import buildNodePathsTypeForScript from "./build_node_paths"
import buildSceneImports from "./build_scene_imports"
import buildSingletonName from "./build_singleton_name"

export class DefinitionBuilder {
  constructor(private project: TsGdProject) {}
  buildActionNames() {
    buildActionNames(this.project)
  }
  buildAssetPathsType() {
    buildAssetPathsType(this.project)
  }
  buildGroupTypes() {
    buildGroupTypes(this.project)
  }
  buildNodePathsTypeForScript(script: AssetSourceFile) {
    // buildNodePathsTypeForScript(script, this.project)
  }
  buildSceneImports() {
    buildSceneImports(this.project)
  }

  public async buildProject(scripts: AssetSourceFile[]) {
    this.buildAssetPathsType()

    for (const script of scripts) {
      this.buildNodePathsTypeForScript(script)
    }

    this.buildSceneImports()
    this.buildGroupTypes()
    this.buildActionNames()
    buildSingletonName(this.project)
  }
}

export default DefinitionBuilder
