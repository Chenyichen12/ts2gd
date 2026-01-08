
/**
 * Base class of [SkeletonModifier3D] that automatically generates a joint list from the bones between the root bone and the end bone.
 *
*/
declare class ChainIK3D extends IKModifier3D  {

  
/**
 * Base class of [SkeletonModifier3D] that automatically generates a joint list from the bones between the root bone and the end bone.
 *
*/
  new(): ChainIK3D; 
  static "new"(): ChainIK3D 



/** Returns the end bone index of the bone chain. */
get_end_bone(): int;

/** Returns the tail direction of the end bone of the bone chain when [method is_end_bone_extended] is [code]true[/code]. */
get_end_bone_direction(): int;

/** Returns the end bone tail length of the bone chain when [method is_end_bone_extended] is [code]true[/code]. */
get_end_bone_length(): float;

/** Returns the end bone name of the bone chain. */
get_end_bone_name(): string;

/** Returns the bone index at [param joint] in the bone chain's joint list. */
get_joint_bone(): int;

/** Returns the bone name at [param joint] in the bone chain's joint list. */
get_joint_bone_name(): string;

/** Returns the joint count of the bone chain's joint list. */
get_joint_count(): int;

/** Returns the root bone index of the bone chain. */
get_root_bone(): int;

/** Returns the root bone name of the bone chain. */
get_root_bone_name(): string;

/** Returns [code]true[/code] if the end bone is extended to have a tail. */
is_end_bone_extended(): boolean;

/** Sets the end bone index of the bone chain. */
set_end_bone(): void;

/** Sets the end bone tail direction of the bone chain when [method is_end_bone_extended] is [code]true[/code]. */
set_end_bone_direction(): void;

/** Sets the end bone tail length of the bone chain when [method is_end_bone_extended] is [code]true[/code]. */
set_end_bone_length(): void;

/**
 * Sets the end bone name of the bone chain.
 *
 * **Note:** The end bone must be the root bone or a child of the root bone. If they are the same, the tail must be extended by [method set_extend_end_bone] to modify the bone.
 *
*/
set_end_bone_name(): void;

/**
 * If [param enabled] is `true`, the end bone is extended to have a tail.
 *
 * The extended tail config is allocated to the last element in the joint list. In other words, if you set [param enabled] to `false`, the config of the last element in the joint list has no effect in the simulated result.
 *
*/
set_extend_end_bone(): void;

/** Sets the root bone index of the bone chain. */
set_root_bone(): void;

/** Sets the root bone name of the bone chain. */
set_root_bone_name(): void;

  connect<T extends SignalsOf<ChainIK3D>>(signal: T, method: SignalFunction<ChainIK3D[T]>): number;






}

