
/**
 * This class extends [PhysicsServer2D] by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.
 *
 * Intended for use with GDExtension to create custom implementations of [PhysicsServer2D].
 *
*/
declare class PhysicsServer2DExtension extends PhysicsServer2D  {

  
/**
 * This class extends [PhysicsServer2D] by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.
 *
 * Intended for use with GDExtension to create custom implementations of [PhysicsServer2D].
 *
*/
  new(): PhysicsServer2DExtension; 
  static "new"(): PhysicsServer2DExtension 



/** Overridable version of [method PhysicsServer2D.area_add_shape]. */
protected _area_add_shape(): void;

/** Overridable version of [method PhysicsServer2D.area_attach_canvas_instance_id]. */
protected _area_attach_canvas_instance_id(): void;

/** Overridable version of [method PhysicsServer2D.area_attach_object_instance_id]. */
protected _area_attach_object_instance_id(): void;

/** Overridable version of [method PhysicsServer2D.area_clear_shapes]. */
protected _area_clear_shapes(): void;

/** Overridable version of [method PhysicsServer2D.area_create]. */
protected _area_create(): RID;

/** Overridable version of [method PhysicsServer2D.area_get_canvas_instance_id]. */
protected _area_get_canvas_instance_id(): int;

/** Overridable version of [method PhysicsServer2D.area_get_collision_layer]. */
protected _area_get_collision_layer(): int;

/** Overridable version of [method PhysicsServer2D.area_get_collision_mask]. */
protected _area_get_collision_mask(): int;

/** Overridable version of [method PhysicsServer2D.area_get_object_instance_id]. */
protected _area_get_object_instance_id(): int;

/** Overridable version of [method PhysicsServer2D.area_get_param]. */
protected _area_get_param(): any;

/** Overridable version of [method PhysicsServer2D.area_get_shape]. */
protected _area_get_shape(): RID;

/** Overridable version of [method PhysicsServer2D.area_get_shape_count]. */
protected _area_get_shape_count(): int;

/** Overridable version of [method PhysicsServer2D.area_get_shape_transform]. */
protected _area_get_shape_transform(): Transform2D;

/** Overridable version of [method PhysicsServer2D.area_get_space]. */
protected _area_get_space(): RID;

/** Overridable version of [method PhysicsServer2D.area_get_transform]. */
protected _area_get_transform(): Transform2D;

/** Overridable version of [method PhysicsServer2D.area_remove_shape]. */
protected _area_remove_shape(): void;

/** Overridable version of [method PhysicsServer2D.area_set_area_monitor_callback]. */
protected _area_set_area_monitor_callback(): void;

/** Overridable version of [method PhysicsServer2D.area_set_collision_layer]. */
protected _area_set_collision_layer(): void;

/** Overridable version of [method PhysicsServer2D.area_set_collision_mask]. */
protected _area_set_collision_mask(): void;

/** Overridable version of [method PhysicsServer2D.area_set_monitor_callback]. */
protected _area_set_monitor_callback(): void;

/** Overridable version of [method PhysicsServer2D.area_set_monitorable]. */
protected _area_set_monitorable(): void;

/** Overridable version of [method PhysicsServer2D.area_set_param]. */
protected _area_set_param(): void;

/**
 * If set to `true`, allows the area with the given [RID] to detect mouse inputs when the mouse cursor is hovering on it.
 *
 * Overridable version of [PhysicsServer2D]'s internal `area_set_pickable` method. Corresponds to [member CollisionObject2D.input_pickable].
 *
*/
protected _area_set_pickable(): void;

/** Overridable version of [method PhysicsServer2D.area_set_shape]. */
protected _area_set_shape(): void;

/** Overridable version of [method PhysicsServer2D.area_set_shape_disabled]. */
protected _area_set_shape_disabled(): void;

/** Overridable version of [method PhysicsServer2D.area_set_shape_transform]. */
protected _area_set_shape_transform(): void;

/** Overridable version of [method PhysicsServer2D.area_set_space]. */
protected _area_set_space(): void;

/** Overridable version of [method PhysicsServer2D.area_set_transform]. */
protected _area_set_transform(): void;

/** Overridable version of [method PhysicsServer2D.body_add_collision_exception]. */
protected _body_add_collision_exception(): void;

/** Overridable version of [method PhysicsServer2D.body_add_constant_central_force]. */
protected _body_add_constant_central_force(): void;

/** Overridable version of [method PhysicsServer2D.body_add_constant_force]. */
protected _body_add_constant_force(): void;

/** Overridable version of [method PhysicsServer2D.body_add_constant_torque]. */
protected _body_add_constant_torque(): void;

/** Overridable version of [method PhysicsServer2D.body_add_shape]. */
protected _body_add_shape(): void;

/** Overridable version of [method PhysicsServer2D.body_apply_central_force]. */
protected _body_apply_central_force(): void;

/** Overridable version of [method PhysicsServer2D.body_apply_central_impulse]. */
protected _body_apply_central_impulse(): void;

/** Overridable version of [method PhysicsServer2D.body_apply_force]. */
protected _body_apply_force(): void;

/** Overridable version of [method PhysicsServer2D.body_apply_impulse]. */
protected _body_apply_impulse(): void;

/** Overridable version of [method PhysicsServer2D.body_apply_torque]. */
protected _body_apply_torque(): void;

/** Overridable version of [method PhysicsServer2D.body_apply_torque_impulse]. */
protected _body_apply_torque_impulse(): void;

/** Overridable version of [method PhysicsServer2D.body_attach_canvas_instance_id]. */
protected _body_attach_canvas_instance_id(): void;

/** Overridable version of [method PhysicsServer2D.body_attach_object_instance_id]. */
protected _body_attach_object_instance_id(): void;

/** Overridable version of [method PhysicsServer2D.body_clear_shapes]. */
protected _body_clear_shapes(): void;

/**
 * Given a [param body], a [param shape], and their respective parameters, this method should return `true` if a collision between the two would occur, with additional details passed in [param results].
 *
 * Overridable version of [PhysicsServer2D]'s internal `shape_collide` method. Corresponds to [method PhysicsDirectSpaceState2D.collide_shape].
 *
*/
protected _body_collide_shape(): boolean;

/** Overridable version of [method PhysicsServer2D.body_create]. */
protected _body_create(): RID;

/** Overridable version of [method PhysicsServer2D.body_get_canvas_instance_id]. */
protected _body_get_canvas_instance_id(): int;

/**
 * Returns the [RID]s of all bodies added as collision exceptions for the given [param body]. See also [method _body_add_collision_exception] and [method _body_remove_collision_exception].
 *
 * Overridable version of [PhysicsServer2D]'s internal `body_get_collision_exceptions` method. Corresponds to [method PhysicsBody2D.get_collision_exceptions].
 *
*/
protected _body_get_collision_exceptions(): RID[];

/** Overridable version of [method PhysicsServer2D.body_get_collision_layer]. */
protected _body_get_collision_layer(): int;

/** Overridable version of [method PhysicsServer2D.body_get_collision_mask]. */
protected _body_get_collision_mask(): int;

/** Overridable version of [method PhysicsServer2D.body_get_collision_priority]. */
protected _body_get_collision_priority(): float;

/** Overridable version of [method PhysicsServer2D.body_get_constant_force]. */
protected _body_get_constant_force(): Vector2;

/** Overridable version of [method PhysicsServer2D.body_get_constant_torque]. */
protected _body_get_constant_torque(): float;

/**
 * Overridable version of [PhysicsServer2D]'s internal `body_get_contacts_reported_depth_threshold` method.
 *
 * **Note:** This method is currently unused by Godot's default physics implementation.
 *
*/
protected _body_get_contacts_reported_depth_threshold(): float;

/** Overridable version of [method PhysicsServer2D.body_get_continuous_collision_detection_mode]. */
protected _body_get_continuous_collision_detection_mode(): int;

/** Overridable version of [method PhysicsServer2D.body_get_direct_state]. */
protected _body_get_direct_state(): PhysicsDirectBodyState2D;

/** Overridable version of [method PhysicsServer2D.body_get_max_contacts_reported]. */
protected _body_get_max_contacts_reported(): int;

/** Overridable version of [method PhysicsServer2D.body_get_mode]. */
protected _body_get_mode(): int;

/** Overridable version of [method PhysicsServer2D.body_get_object_instance_id]. */
protected _body_get_object_instance_id(): int;

/** Overridable version of [method PhysicsServer2D.body_get_param]. */
protected _body_get_param(): any;

/** Overridable version of [method PhysicsServer2D.body_get_shape]. */
protected _body_get_shape(): RID;

/** Overridable version of [method PhysicsServer2D.body_get_shape_count]. */
protected _body_get_shape_count(): int;

/** Overridable version of [method PhysicsServer2D.body_get_shape_transform]. */
protected _body_get_shape_transform(): Transform2D;

/** Overridable version of [method PhysicsServer2D.body_get_space]. */
protected _body_get_space(): RID;

/** Overridable version of [method PhysicsServer2D.body_get_state]. */
protected _body_get_state(): any;

/** Overridable version of [method PhysicsServer2D.body_is_omitting_force_integration]. */
protected _body_is_omitting_force_integration(): boolean;

/** Overridable version of [method PhysicsServer2D.body_remove_collision_exception]. */
protected _body_remove_collision_exception(): void;

/** Overridable version of [method PhysicsServer2D.body_remove_shape]. */
protected _body_remove_shape(): void;

/** Overridable version of [method PhysicsServer2D.body_reset_mass_properties]. */
protected _body_reset_mass_properties(): void;

/** Overridable version of [method PhysicsServer2D.body_set_axis_velocity]. */
protected _body_set_axis_velocity(): void;

/** Overridable version of [method PhysicsServer2D.body_set_collision_layer]. */
protected _body_set_collision_layer(): void;

/** Overridable version of [method PhysicsServer2D.body_set_collision_mask]. */
protected _body_set_collision_mask(): void;

/** Overridable version of [method PhysicsServer2D.body_set_collision_priority]. */
protected _body_set_collision_priority(): void;

/** Overridable version of [method PhysicsServer2D.body_set_constant_force]. */
protected _body_set_constant_force(): void;

/** Overridable version of [method PhysicsServer2D.body_set_constant_torque]. */
protected _body_set_constant_torque(): void;

/**
 * Overridable version of [PhysicsServer2D]'s internal `body_set_contacts_reported_depth_threshold` method.
 *
 * **Note:** This method is currently unused by Godot's default physics implementation.
 *
*/
protected _body_set_contacts_reported_depth_threshold(): void;

/** Overridable version of [method PhysicsServer2D.body_set_continuous_collision_detection_mode]. */
protected _body_set_continuous_collision_detection_mode(): void;

/** Overridable version of [method PhysicsServer2D.body_set_force_integration_callback]. */
protected _body_set_force_integration_callback(): void;

/** Overridable version of [method PhysicsServer2D.body_set_max_contacts_reported]. */
protected _body_set_max_contacts_reported(): void;

/** Overridable version of [method PhysicsServer2D.body_set_mode]. */
protected _body_set_mode(): void;

/** Overridable version of [method PhysicsServer2D.body_set_omit_force_integration]. */
protected _body_set_omit_force_integration(): void;

/** Overridable version of [method PhysicsServer2D.body_set_param]. */
protected _body_set_param(): void;

/**
 * If set to `true`, allows the body with the given [RID] to detect mouse inputs when the mouse cursor is hovering on it.
 *
 * Overridable version of [PhysicsServer2D]'s internal `body_set_pickable` method. Corresponds to [member CollisionObject2D.input_pickable].
 *
*/
protected _body_set_pickable(): void;

/** Overridable version of [method PhysicsServer2D.body_set_shape]. */
protected _body_set_shape(): void;

/** Overridable version of [method PhysicsServer2D.body_set_shape_as_one_way_collision]. */
protected _body_set_shape_as_one_way_collision(): void;

/** Overridable version of [method PhysicsServer2D.body_set_shape_disabled]. */
protected _body_set_shape_disabled(): void;

/** Overridable version of [method PhysicsServer2D.body_set_shape_transform]. */
protected _body_set_shape_transform(): void;

/** Overridable version of [method PhysicsServer2D.body_set_space]. */
protected _body_set_space(): void;

/** Overridable version of [method PhysicsServer2D.body_set_state]. */
protected _body_set_state(): void;

/**
 * Assigns the [param body] to call the given [param callable] during the synchronization phase of the loop, before [method _step] is called. See also [method _sync].
 *
 * Overridable version of [method PhysicsServer2D.body_set_state_sync_callback].
 *
*/
protected _body_set_state_sync_callback(): void;

/** Overridable version of [method PhysicsServer2D.body_test_motion]. Unlike the exposed implementation, this method does not receive all of the arguments inside a [PhysicsTestMotionParameters2D]. */
protected _body_test_motion(): boolean;

/** Overridable version of [method PhysicsServer2D.capsule_shape_create]. */
protected _capsule_shape_create(): RID;

/** Overridable version of [method PhysicsServer2D.circle_shape_create]. */
protected _circle_shape_create(): RID;

/** Overridable version of [method PhysicsServer2D.concave_polygon_shape_create]. */
protected _concave_polygon_shape_create(): RID;

/** Overridable version of [method PhysicsServer2D.convex_polygon_shape_create]. */
protected _convex_polygon_shape_create(): RID;

/** Overridable version of [method PhysicsServer2D.damped_spring_joint_get_param]. */
protected _damped_spring_joint_get_param(): float;

/** Overridable version of [method PhysicsServer2D.damped_spring_joint_set_param]. */
protected _damped_spring_joint_set_param(): void;

/**
 * Called to indicate that the physics server has stopped synchronizing. It is in the loop's iteration/physics phase, and can access physics objects even if running on a separate thread. See also [method _sync].
 *
 * Overridable version of [PhysicsServer2D]'s internal `end_sync` method.
 *
*/
protected _end_sync(): void;

/**
 * Called when the main loop finalizes to shut down the physics server. See also [method MainLoop._finalize] and [method _init].
 *
 * Overridable version of [PhysicsServer2D]'s internal `finish` method.
 *
*/
protected _finish(): void;

/**
 * Called every physics step before [method _step] to process all remaining queries.
 *
 * Overridable version of [PhysicsServer2D]'s internal `flush_queries` method.
 *
*/
protected _flush_queries(): void;

/** Overridable version of [method PhysicsServer2D.free_rid]. */
protected _free_rid(): void;

/** Overridable version of [method PhysicsServer2D.get_process_info]. */
protected _get_process_info(): int;

/**
 * Called when the main loop is initialized and creates a new instance of this physics server. See also [method MainLoop._initialize] and [method _finish].
 *
 * Overridable version of [PhysicsServer2D]'s internal `init` method.
 *
*/
protected _init(): void;

/**
 * Overridable method that should return `true` when the physics server is processing queries. See also [method _flush_queries].
 *
 * Overridable version of [PhysicsServer2D]'s internal `is_flushing_queries` method.
 *
*/
protected _is_flushing_queries(): boolean;

/** Overridable version of [method PhysicsServer2D.joint_clear]. */
protected _joint_clear(): void;

/** Overridable version of [method PhysicsServer2D.joint_create]. */
protected _joint_create(): RID;

/** Overridable version of [method PhysicsServer2D.joint_disable_collisions_between_bodies]. */
protected _joint_disable_collisions_between_bodies(): void;

/** Overridable version of [method PhysicsServer2D.joint_get_param]. */
protected _joint_get_param(): float;

/** Overridable version of [method PhysicsServer2D.joint_get_type]. */
protected _joint_get_type(): int;

/** Overridable version of [method PhysicsServer2D.joint_is_disabled_collisions_between_bodies]. */
protected _joint_is_disabled_collisions_between_bodies(): boolean;

/** Overridable version of [method PhysicsServer2D.joint_make_damped_spring]. */
protected _joint_make_damped_spring(): void;

/** Overridable version of [method PhysicsServer2D.joint_make_groove]. */
protected _joint_make_groove(): void;

/** Overridable version of [method PhysicsServer2D.joint_make_pin]. */
protected _joint_make_pin(): void;

/** Overridable version of [method PhysicsServer2D.joint_set_param]. */
protected _joint_set_param(): void;

/** Overridable version of [method PhysicsServer2D.pin_joint_get_flag]. */
protected _pin_joint_get_flag(): boolean;

/** Overridable version of [method PhysicsServer2D.pin_joint_get_param]. */
protected _pin_joint_get_param(): float;

/** Overridable version of [method PhysicsServer2D.pin_joint_set_flag]. */
protected _pin_joint_set_flag(): void;

/** Overridable version of [method PhysicsServer2D.pin_joint_set_param]. */
protected _pin_joint_set_param(): void;

/** Overridable version of [method PhysicsServer2D.rectangle_shape_create]. */
protected _rectangle_shape_create(): RID;

/** Overridable version of [method PhysicsServer2D.segment_shape_create]. */
protected _segment_shape_create(): RID;

/** Overridable version of [method PhysicsServer2D.separation_ray_shape_create]. */
protected _separation_ray_shape_create(): RID;

/** Overridable version of [method PhysicsServer2D.set_active]. */
protected _set_active(): void;

/**
 * Given two shapes and their parameters, should return `true` if a collision between the two would occur, with additional details passed in [param results].
 *
 * Overridable version of [PhysicsServer2D]'s internal `shape_collide` method. Corresponds to [method PhysicsDirectSpaceState2D.collide_shape].
 *
*/
protected _shape_collide(): boolean;

/**
 * Should return the custom solver bias of the given [param shape], which defines how much bodies are forced to separate on contact when this shape is involved.
 *
 * Overridable version of [PhysicsServer2D]'s internal `shape_get_custom_solver_bias` method. Corresponds to [member Shape2D.custom_solver_bias].
 *
*/
protected _shape_get_custom_solver_bias(): float;

/** Overridable version of [method PhysicsServer2D.shape_get_data]. */
protected _shape_get_data(): any;

/** Overridable version of [method PhysicsServer2D.shape_get_type]. */
protected _shape_get_type(): int;

/**
 * Should set the custom solver bias for the given [param shape]. It defines how much bodies are forced to separate on contact.
 *
 * Overridable version of [PhysicsServer2D]'s internal `shape_get_custom_solver_bias` method. Corresponds to [member Shape2D.custom_solver_bias].
 *
*/
protected _shape_set_custom_solver_bias(): void;

/** Overridable version of [method PhysicsServer2D.shape_set_data]. */
protected _shape_set_data(): void;

/** Overridable version of [method PhysicsServer2D.space_create]. */
protected _space_create(): RID;

/**
 * Should return how many contacts have occurred during the last physics step in the given [param space]. See also [method _space_get_contacts] and [method _space_set_debug_contacts].
 *
 * Overridable version of [PhysicsServer2D]'s internal `space_get_contact_count` method.
 *
*/
protected _space_get_contact_count(): int;

/**
 * Should return the positions of all contacts that have occurred during the last physics step in the given [param space]. See also [method _space_get_contact_count] and [method _space_set_debug_contacts].
 *
 * Overridable version of [PhysicsServer2D]'s internal `space_get_contacts` method.
 *
*/
protected _space_get_contacts(): PackedVector2Array;

/** Overridable version of [method PhysicsServer2D.space_get_direct_state]. */
protected _space_get_direct_state(): PhysicsDirectSpaceState2D;

/** Overridable version of [method PhysicsServer2D.space_get_param]. */
protected _space_get_param(): float;

/** Overridable version of [method PhysicsServer2D.space_is_active]. */
protected _space_is_active(): boolean;

/** Overridable version of [method PhysicsServer2D.space_set_active]. */
protected _space_set_active(): void;

/**
 * Used internally to allow the given [param space] to store contact points, up to [param max_contacts]. This is automatically set for the main [World2D]'s space when [member SceneTree.debug_collisions_hint] is `true`, or by checking "Visible Collision Shapes" in the editor. Only works in debug builds.
 *
 * Overridable version of [PhysicsServer2D]'s internal `space_set_debug_contacts` method.
 *
*/
protected _space_set_debug_contacts(): void;

/** Overridable version of [method PhysicsServer2D.space_set_param]. */
protected _space_set_param(): void;

/**
 * Called every physics step to process the physics simulation. [param step] is the time elapsed since the last physics step, in seconds. It is usually the same as the value returned by [method Node.get_physics_process_delta_time].
 *
 * Overridable version of [PhysicsServer2D]'s internal [code skip-lint]step` method.
 *
*/
protected _step(): void;

/**
 * Called to indicate that the physics server is synchronizing and cannot access physics states if running on a separate thread. See also [method _end_sync].
 *
 * Overridable version of [PhysicsServer2D]'s internal `sync` method.
 *
*/
protected _sync(): void;

/** Overridable version of [method PhysicsServer2D.world_boundary_shape_create]. */
protected _world_boundary_shape_create(): RID;

/** Returns [code]true[/code] if the body with the given [RID] is being excluded from [method _body_test_motion]. See also [method Object.get_instance_id]. */
body_test_motion_is_excluding_body(): boolean;

/** Returns [code]true[/code] if the object with the given instance ID is being excluded from [method _body_test_motion]. See also [method Object.get_instance_id]. */
body_test_motion_is_excluding_object(): boolean;

  connect<T extends SignalsOf<PhysicsServer2DExtension>>(signal: T, method: SignalFunction<PhysicsServer2DExtension[T]>): number;






}

