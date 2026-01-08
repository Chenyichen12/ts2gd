
/**
 * This [IKModifier3D] requires a pole target. It provides deterministic results by constructing a plane from each joint and pole target and finding the intersection of two circles (disks in 3D).
 *
 * This IK can handle twist by setting the pole direction. If there are more than one bone between each set bone, their rotations are ignored, and the straight line connecting the root-middle and middle-end joints are treated as virtual bones.
 *
*/
declare class TwoBoneIK3D extends IKModifier3D  {

  
/**
 * This [IKModifier3D] requires a pole target. It provides deterministic results by constructing a plane from each joint and pole target and finding the intersection of two circles (disks in 3D).
 *
 * This IK can handle twist by setting the pole direction. If there are more than one bone between each set bone, their rotations are ignored, and the straight line connecting the root-middle and middle-end joints are treated as virtual bones.
 *
*/
  new(): TwoBoneIK3D; 
  static "new"(): TwoBoneIK3D 


/** The number of settings. */
setting_count: int;

/** Returns the end bone index. */
get_end_bone(): int;

/** Returns the end bone's tail direction when [method is_end_bone_extended] is [code]true[/code]. */
get_end_bone_direction(): int;

/** Returns the end bone tail length of the bone chain when [method is_end_bone_extended] is [code]true[/code]. */
get_end_bone_length(): float;

/** Returns the end bone name. */
get_end_bone_name(): string;

/** Returns the middle bone index. */
get_middle_bone(): int;

/** Returns the middle bone name. */
get_middle_bone_name(): string;

/** Returns the pole direction. */
get_pole_direction(): int;

/**
 * Returns the pole direction vector.
 *
 * If [method get_pole_direction] is [constant SkeletonModifier3D.SECONDARY_DIRECTION_NONE], this method returns `Vector3(0, 0, 0)`.
 *
*/
get_pole_direction_vector(): Vector3;

/** Returns the pole target node that constructs a plane which the joints are all on and the pole is trying to direct. */
get_pole_node(): NodePathType;

/** Returns the root bone index. */
get_root_bone(): int;

/** Returns the root bone name. */
get_root_bone_name(): string;

/** Returns the target node that the end bone is trying to reach. */
get_target_node(): NodePathType;

/** Returns [code]true[/code] if the end bone is extended to have a tail. */
is_end_bone_extended(): boolean;

/** Returns [code]true[/code] if the end bone is extended from the middle bone as a virtual bone. */
is_using_virtual_end(): boolean;

/** Sets the end bone index. */
set_end_bone(): void;

/** Sets the end bone tail direction when [method is_end_bone_extended] is [code]true[/code]. */
set_end_bone_direction(): void;

/** Sets the end bone tail length when [method is_end_bone_extended] is [code]true[/code]. */
set_end_bone_length(): void;

/**
 * Sets the end bone name.
 *
 * **Note:** The end bone must be a child of the middle bone.
 *
*/
set_end_bone_name(): void;

/** If [param enabled] is [code]true[/code], the end bone is extended to have a tail. */
set_extend_end_bone(): void;

/** Sets the middle bone index. */
set_middle_bone(): void;

/**
 * Sets the middle bone name.
 *
 * **Note:** The middle bone must be a child of the root bone.
 *
*/
set_middle_bone_name(): void;

/**
 * Sets the pole direction.
 *
 * The pole is on the middle bone and will direct to the pole target.
 *
 * The rotation axis is a vector that is orthogonal to this and the forward vector.
 *
 * **Note:** The pole direction and the forward vector shouldn't be colinear to avoid unintended rotation.
 *
*/
set_pole_direction(): void;

/**
 * Sets the pole direction vector.
 *
 * This vector is normalized by an internal process.
 *
 * If the vector length is `0`, it is considered synonymous with [constant SkeletonModifier3D.SECONDARY_DIRECTION_NONE].
 *
*/
set_pole_direction_vector(): void;

/** Sets the pole target node that constructs a plane which the joints are all on and the pole is trying to direct. */
set_pole_node(): void;

/** Sets the root bone index. */
set_root_bone(): void;

/** Sets the root bone name. */
set_root_bone_name(): void;

/** Sets the target node that the end bone is trying to reach. */
set_target_node(): void;

/** If [param enabled] is [code]true[/code], the end bone is extended from the middle bone as a virtual bone. */
set_use_virtual_end(): void;

  connect<T extends SignalsOf<TwoBoneIK3D>>(signal: T, method: SignalFunction<TwoBoneIK3D[T]>): number;






}

