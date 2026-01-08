
/**
 * Base class of [SkeletonModifier3D] that modifies the bone set in [method set_apply_bone] based on the transform of the bone retrieved by [method get_reference_bone].
 *
*/
declare class BoneConstraint3D extends SkeletonModifier3D  {

  
/**
 * Base class of [SkeletonModifier3D] that modifies the bone set in [method set_apply_bone] based on the transform of the bone retrieved by [method get_reference_bone].
 *
*/
  new(): BoneConstraint3D; 
  static "new"(): BoneConstraint3D 



/** Clear all settings. */
clear_setting(): void;

/** Returns the apply amount of the setting at [param index]. */
get_amount(): float;

/** Returns the apply bone of the setting at [param index]. This bone will be modified. */
get_apply_bone(): int;

/** Returns the apply bone name of the setting at [param index]. This bone will be modified. */
get_apply_bone_name(): string;

/**
 * Returns the reference bone of the setting at [param index].
 *
 * This bone will be only referenced and not modified by this modifier.
 *
*/
get_reference_bone(): int;

/**
 * Returns the reference bone name of the setting at [param index].
 *
 * This bone will be only referenced and not modified by this modifier.
 *
*/
get_reference_bone_name(): string;

/**
 * Returns the reference node path of the setting at [param index].
 *
 * This node will be only referenced and not modified by this modifier.
 *
*/
get_reference_node(): NodePathType;

/** Returns the reference target type of the setting at [param index]. See also [enum ReferenceType]. */
get_reference_type(): int;

/** Returns the number of settings in the modifier. */
get_setting_count(): int;

/** Sets the apply amount of the setting at [param index] to [param amount]. */
set_amount(): void;

/** Sets the apply bone of the setting at [param index] to [param bone]. This bone will be modified. */
set_apply_bone(): void;

/** Sets the apply bone of the setting at [param index] to [param bone_name]. This bone will be modified. */
set_apply_bone_name(): void;

/**
 * Sets the reference bone of the setting at [param index] to [param bone].
 *
 * This bone will be only referenced and not modified by this modifier.
 *
*/
set_reference_bone(): void;

/**
 * Sets the reference bone of the setting at [param index] to [param bone_name].
 *
 * This bone will be only referenced and not modified by this modifier.
 *
*/
set_reference_bone_name(): void;

/**
 * Sets the reference node path of the setting at [param index] to [param node].
 *
 * This node will be only referenced and not modified by this modifier.
 *
*/
set_reference_node(): void;

/** Sets the reference target type of the setting at [param index] to [param type]. See also [enum ReferenceType]. */
set_reference_type(): void;

/** Sets the number of settings in the modifier. */
set_setting_count(): void;

  connect<T extends SignalsOf<BoneConstraint3D>>(signal: T, method: SignalFunction<BoneConstraint3D[T]>): number;



/**
 * The reference target is a bone. In this case, the reference target spaces is local space.
 *
*/
static REFERENCE_TYPE_BONE: any;

/**
 * The reference target is a [Node3D]. In this case, the reference target spaces is model space.
 *
 * In other words, the reference target's coordinates are treated as if it were placed directly under [Skeleton3D] which parent of the [BoneConstraint3D].
 *
*/
static REFERENCE_TYPE_NODE: any;



}

