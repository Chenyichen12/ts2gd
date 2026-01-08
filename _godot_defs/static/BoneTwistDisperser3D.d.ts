
/**
 * This [BoneTwistDisperser3D] allows for smooth twist interpolation between multiple bones by dispersing the end bone's twist to the parents. This only changes the twist without changing the global position of each joint.
 *
 * This is useful for smoothly twisting bones in combination with [CopyTransformModifier3D] and IK.
 *
 * **Note:** If an extracted twist is greater than 180 degrees, flipping occurs. This is similar to [ConvertTransformModifier3D].
 *
*/
declare class BoneTwistDisperser3D extends SkeletonModifier3D  {

  
/**
 * This [BoneTwistDisperser3D] allows for smooth twist interpolation between multiple bones by dispersing the end bone's twist to the parents. This only changes the twist without changing the global position of each joint.
 *
 * This is useful for smoothly twisting bones in combination with [CopyTransformModifier3D] and IK.
 *
 * **Note:** If an extracted twist is greater than 180 degrees, flipping occurs. This is similar to [ConvertTransformModifier3D].
 *
*/
  new(): BoneTwistDisperser3D; 
  static "new"(): BoneTwistDisperser3D 


/**
 * If `true`, the solver retrieves the bone axis from the bone pose every frame.
 *
 * If `false`, the solver retrieves the bone axis from the bone rest and caches it.
 *
*/
mutable_bone_axes: boolean;

/** The number of settings. */
setting_count: int;

/** Clears all settings. */
clear_settings(): void;

/** Returns the damping curve when [method get_disperse_mode] is [constant DISPERSE_MODE_CUSTOM]. */
get_damping_curve(): Curve;

/** Returns whether to use automatic amount assignment or to allow manual assignment. */
get_disperse_mode(): int;

/** Returns the end bone index of the bone chain. */
get_end_bone(): int;

/** Returns the tail direction of the end bone of the bone chain when [method is_end_bone_extended] is [code]true[/code]. */
get_end_bone_direction(): int;

/** Returns the end bone name of the bone chain. */
get_end_bone_name(): string;

/** Returns the bone index at [param joint] in the bone chain's joint list. */
get_joint_bone(): int;

/** Returns the bone name at [param joint] in the bone chain's joint list. */
get_joint_bone_name(): string;

/** Returns the joint count of the bone chain's joint list. */
get_joint_count(): int;

/** Returns the twist amount at [param joint] in the bone chain's joint list when [method get_disperse_mode] is [constant DISPERSE_MODE_CUSTOM]. */
get_joint_twist_amount(): float;

/**
 * Returns the reference bone to extract twist of the setting at [param index].
 *
 * This bone is either the end of the chain or its parent, depending on [method is_end_bone_extended].
 *
*/
get_reference_bone(): int;

/**
 * Returns the reference bone name to extract twist of the setting at [param index].
 *
 * This bone is either the end of the chain or its parent, depending on [method is_end_bone_extended].
 *
*/
get_reference_bone_name(): string;

/** Returns the root bone index of the bone chain. */
get_root_bone(): int;

/** Returns the root bone name of the bone chain. */
get_root_bone_name(): string;

/** Returns the rotation to an arbitrary state before twisting for the current bone pose to extract the twist when [method is_twist_from_rest] is [code]false[/code]. */
get_twist_from(): Quaternion;

/** Returns the position at which to divide the segment between joints for weight assignment when [method get_disperse_mode] is [constant DISPERSE_MODE_WEIGHTED]. */
get_weight_position(): float;

/** Returns [code]true[/code] if the end bone is extended to have a tail. */
is_end_bone_extended(): boolean;

/** Returns [code]true[/code] if extracting the twist amount from the difference between the bone rest and the current bone pose. */
is_twist_from_rest(): boolean;

/** Sets the damping curve when [method get_disperse_mode] is [constant DISPERSE_MODE_CUSTOM]. */
set_damping_curve(): void;

/** Sets whether to use automatic amount assignment or to allow manual assignment. */
set_disperse_mode(): void;

/** Sets the end bone index of the bone chain. */
set_end_bone(): void;

/** Sets the end bone tail direction of the bone chain when [method is_end_bone_extended] is [code]true[/code]. */
set_end_bone_direction(): void;

/**
 * Sets the end bone name of the bone chain.
 *
 * **Note:** The end bone must be a child of the root bone.
 *
*/
set_end_bone_name(): void;

/**
 * If [param enabled] is `true`, the end bone is extended to have a tail.
 *
 * If [param enabled] is `false`, [method get_reference_bone] becomes a parent of the end bone and it uses the vector to the end bone as a twist axis.
 *
*/
set_extend_end_bone(): void;

/** Sets the twist amount at [param joint] in the bone chain's joint list when [method get_disperse_mode] is [constant DISPERSE_MODE_CUSTOM]. */
set_joint_twist_amount(): void;

/** Sets the root bone index of the bone chain. */
set_root_bone(): void;

/** Sets the root bone name of the bone chain. */
set_root_bone_name(): void;

/**
 * Sets the rotation to an arbitrary state before twisting for the current bone pose to extract the twist when [method is_twist_from_rest] is `false`.
 *
 * In other words, by calling [method set_twist_from] by [signal SkeletonModifier3D.modification_processed] of a specific [SkeletonModifier3D], you can extract only the twists generated by modifiers processed after that but before this [BoneTwistDisperser3D].
 *
*/
set_twist_from(): void;

/**
 * If [param enabled] is `true`, it extracts the twist amount from the difference between the bone rest and the current bone pose.
 *
 * If [param enabled] is `false`, it extracts the twist amount from the difference between [method get_twist_from] and the current bone pose. See also [method set_twist_from].
 *
*/
set_twist_from_rest(): void;

/**
 * Sets the position at which to divide the segment between joints for weight assignment when [method get_disperse_mode] is [constant DISPERSE_MODE_WEIGHTED].
 *
 * For example, when [param weight_position] is `0.5`, if two bone segments with a length of `1.0` exist between three joints, weights are assigned to each joint from root to end at ratios of `0.5`, `1.0`, and `0.5`. Then amounts become `0.25`, `0.75`, and `1.0` respectively.
 *
*/
set_weight_position(): void;

  connect<T extends SignalsOf<BoneTwistDisperser3D>>(signal: T, method: SignalFunction<BoneTwistDisperser3D[T]>): number;



/**
 * Assign amounts so that they monotonically increase from `0.0` to `1.0`, ensuring all weights are equal. For example, with five joints, the amounts would be `0.2`, `0.4`, `0.6`, `0.8`, and `1.0` starting from the root bone.
 *
*/
static DISPERSE_MODE_EVEN: any;

/**
 * Assign amounts so that they monotonically increase from `0.0` to `1.0`, based on the length of the bones between joint segments. See also [method set_weight_position].
 *
*/
static DISPERSE_MODE_WEIGHTED: any;

/**
 * You can assign arbitrary amounts to the joint list. See also [method set_joint_twist_amount].
 *
 * When [method is_end_bone_extended] is `false`, a child of the reference bone exists solely to determine the twist axis, so its custom amount has absolutely no effect at all.
 *
*/
static DISPERSE_MODE_CUSTOM: any;



}

