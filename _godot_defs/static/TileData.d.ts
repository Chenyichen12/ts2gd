
/**
 * [TileData] object represents a single tile in a [TileSet]. It is usually edited using the tileset editor, but it can be modified at runtime using [method TileMapLayer._tile_data_runtime_update].
 *
*/
declare class TileData extends Object  {

  
/**
 * [TileData] object represents a single tile in a [TileSet]. It is usually edited using the tileset editor, but it can be modified at runtime using [method TileMapLayer._tile_data_runtime_update].
 *
*/
  new(): TileData; 
  static "new"(): TileData 


/** If [code]true[/code], the tile will have its texture flipped horizontally. */
flip_h: boolean;

/** If [code]true[/code], the tile will have its texture flipped vertically. */
flip_v: boolean;

/** The [Material] to use for this [TileData]. This can be a [CanvasItemMaterial] to use the default shader, or a [ShaderMaterial] to use a custom shader. */
material: Material;

/** Color modulation of the tile. */
modulate: Color;

/** Relative probability of this tile being selected when drawing a pattern of random tiles. */
probability: float;

/** ID of the terrain from the terrain set that the tile uses. */
terrain: int;

/** ID of the terrain set that the tile uses. */
terrain_set: int;

/** Offsets the position of where the tile is drawn. */
texture_origin: Vector2i;

/** If [code]true[/code], the tile will display transposed, i.e. with horizontal and vertical texture UVs swapped. */
transpose: boolean;

/** Vertical point of the tile used for determining y-sorted order. */
y_sort_origin: int;

/** Ordering index of this tile, relative to [TileMapLayer]. */
z_index: int;

/** Adds a collision polygon to the tile on the given TileSet physics layer. */
add_collision_polygon(): void;

/** Adds an occlusion polygon to the tile on the TileSet occlusion layer with index [param layer_id]. */
add_occluder_polygon(): void;

/** Returns the one-way margin (for one-way platforms) of the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
get_collision_polygon_one_way_margin(): float;

/** Returns the points of the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
get_collision_polygon_points(): PackedVector2Array;

/** Returns how many polygons the tile has for TileSet physics layer with index [param layer_id]. */
get_collision_polygons_count(): int;

/** Returns the constant angular velocity applied to objects colliding with this tile. */
get_constant_angular_velocity(): float;

/** Returns the constant linear velocity applied to objects colliding with this tile. */
get_constant_linear_velocity(): Vector2;

/** Returns the custom data value for custom data layer named [param layer_name]. To check if a custom data layer exists, use [method has_custom_data]. */
get_custom_data(): any;

/** Returns the custom data value for custom data layer with index [param layer_id]. */
get_custom_data_by_layer_id(): any;

/**
 * Returns the navigation polygon of the tile for the TileSet navigation layer with index [param layer_id].
 *
 * [param flip_h], [param flip_v], and [param transpose] allow transforming the returned polygon.
 *
*/
get_navigation_polygon(): NavigationPolygon;

/**
 * Returns the occluder polygon of the tile for the TileSet occlusion layer with index [param layer_id].
 *
 * [param flip_h], [param flip_v], and [param transpose] allow transforming the returned polygon.
 *
*/
get_occluder(): OccluderPolygon2D;

/**
 * Returns the occluder polygon at index [param polygon_index] from the TileSet occlusion layer with index [param layer_id].
 *
 * The [param flip_h], [param flip_v], and [param transpose] parameters can be `true` to transform the returned polygon.
 *
*/
get_occluder_polygon(): OccluderPolygon2D;

/** Returns the number of occluder polygons of the tile in the TileSet occlusion layer with index [param layer_id]. */
get_occluder_polygons_count(): int;

/** Returns the tile's terrain bit for the given [param peering_bit] direction. To check that a direction is valid, use [method is_valid_terrain_peering_bit]. */
get_terrain_peering_bit(): int;

/** Returns whether there exists a custom data layer named [param layer_name]. */
has_custom_data(): boolean;

/** Returns whether one-way collisions are enabled for the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
is_collision_polygon_one_way(): boolean;

/** Returns whether the given [param peering_bit] direction is valid for this tile. */
is_valid_terrain_peering_bit(): boolean;

/** Removes the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
remove_collision_polygon(): void;

/** Removes the polygon at index [param polygon_index] for TileSet occlusion layer with index [param layer_id]. */
remove_occluder_polygon(): void;

/** Enables/disables one-way collisions on the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
set_collision_polygon_one_way(): void;

/** Sets the one-way margin (for one-way platforms) of the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
set_collision_polygon_one_way_margin(): void;

/** Sets the points of the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
set_collision_polygon_points(): void;

/** Sets the polygons count for TileSet physics layer with index [param layer_id]. */
set_collision_polygons_count(): void;

/** Sets the constant angular velocity. This does not rotate the tile. This angular velocity is applied to objects colliding with this tile. */
set_constant_angular_velocity(): void;

/** Sets the constant linear velocity. This does not move the tile. This linear velocity is applied to objects colliding with this tile. This is useful to create conveyor belts. */
set_constant_linear_velocity(): void;

/** Sets the tile's custom data value for the TileSet custom data layer with name [param layer_name]. */
set_custom_data(): void;

/** Sets the tile's custom data value for the TileSet custom data layer with index [param layer_id]. */
set_custom_data_by_layer_id(): void;

/** Sets the navigation polygon for the TileSet navigation layer with index [param layer_id]. */
set_navigation_polygon(): void;

/** Sets the occluder for the TileSet occlusion layer with index [param layer_id]. */
set_occluder(): void;

/** Sets the occluder for polygon with index [param polygon_index] in the TileSet occlusion layer with index [param layer_id]. */
set_occluder_polygon(): void;

/** Sets the occluder polygon count in the TileSet occlusion layer with index [param layer_id]. */
set_occluder_polygons_count(): void;

/** Sets the tile's terrain bit for the given [param peering_bit] direction. To check that a direction is valid, use [method is_valid_terrain_peering_bit]. */
set_terrain_peering_bit(): void;

  connect<T extends SignalsOf<TileData>>(signal: T, method: SignalFunction<TileData[T]>): number;





/**
 * Emitted when any of the properties are changed.
 *
*/
$changed: Signal<() => void>

}

