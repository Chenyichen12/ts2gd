
/**
 * External [TextServer] implementations should inherit from this class.
 *
*/
declare class TextServerExtension extends TextServer  {

  
/**
 * External [TextServer] implementations should inherit from this class.
 *
*/
  new(): TextServerExtension; 
  static "new"(): TextServerExtension 



/** This method is called before text server is unregistered. */
protected _cleanup(): void;

/** Creates a new, empty font cache entry resource. */
protected _create_font(): RID;

/**
 * Optional, implement if font supports extra spacing or baseline offset.
 *
 * Creates a new variation existing font which is reusing the same glyph cache and font data.
 *
*/
protected _create_font_linked_variation(): RID;

/** Creates a new buffer for complex text layout, with the given [param direction] and [param orientation]. */
protected _create_shaped_text(): RID;

/** Draws box displaying character hexadecimal code. */
protected _draw_hex_code_box(): void;

/** Removes all rendered glyph information from the cache entry. */
protected _font_clear_glyphs(): void;

/** Removes all kerning overrides. */
protected _font_clear_kerning_map(): void;

/** Removes all font sizes from the cache entry. */
protected _font_clear_size_cache(): void;

/** Frees all automatically loaded system fonts. */
protected _font_clear_system_fallback_cache(): void;

/** Removes all textures from font cache entry. */
protected _font_clear_textures(): void;

/** Draws single glyph into a canvas item at the position, using [param font_rid] at the size [param size]. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
protected _font_draw_glyph(): void;

/** Draws single glyph outline of size [param outline_size] into a canvas item at the position, using [param font_rid] at the size [param size]. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
protected _font_draw_glyph_outline(): void;

/** Returns font anti-aliasing mode. */
protected _font_get_antialiasing(): int;

/** Returns the font ascent (number of pixels above the baseline). */
protected _font_get_ascent(): float;

/** Returns extra baseline offset (as a fraction of font height). */
protected _font_get_baseline_offset(): float;

/** Returns character code associated with [param glyph_index], or [code]0[/code] if [param glyph_index] is invalid. */
protected _font_get_char_from_glyph_index(): int;

/** Returns the font descent (number of pixels below the baseline). */
protected _font_get_descent(): float;

/** Returns whether the font's embedded bitmap loading is disabled. */
protected _font_get_disable_embedded_bitmaps(): boolean;

/** Returns font embolden strength. */
protected _font_get_embolden(): float;

/** Returns number of faces in the TrueType / OpenType collection. */
protected _font_get_face_count(): int;

/** Returns an active face index in the TrueType / OpenType collection. */
protected _font_get_face_index(): int;

/** Returns bitmap font fixed size. */
protected _font_get_fixed_size(): int;

/** Returns bitmap font scaling mode. */
protected _font_get_fixed_size_scale_mode(): int;

/** Returns [code]true[/code] if font texture mipmap generation is enabled. */
protected _font_get_generate_mipmaps(): boolean;

/** Returns the font oversampling factor, shared by all fonts in the TextServer. */
protected _font_get_global_oversampling(): float;

/** Returns glyph advance (offset of the next glyph). */
protected _font_get_glyph_advance(): Vector2;

/** Returns outline contours of the glyph. */
protected _font_get_glyph_contours(): Dictionary<any, any>;

/** Returns the glyph index of a [param char], optionally modified by the [param variation_selector]. */
protected _font_get_glyph_index(): int;

/** Returns list of rendered glyphs in the cache entry. */
protected _font_get_glyph_list(): PackedInt32Array;

/** Returns glyph offset from the baseline. */
protected _font_get_glyph_offset(): Vector2;

/** Returns size of the glyph. */
protected _font_get_glyph_size(): Vector2;

/** Returns index of the cache texture containing the glyph. */
protected _font_get_glyph_texture_idx(): int;

/** Returns resource ID of the cache texture containing the glyph. */
protected _font_get_glyph_texture_rid(): RID;

/** Returns size of the cache texture containing the glyph. */
protected _font_get_glyph_texture_size(): Vector2;

/** Returns rectangle in the cache texture containing the glyph. */
protected _font_get_glyph_uv_rect(): Rect2;

/** Returns the font hinting mode. Used by dynamic fonts only. */
protected _font_get_hinting(): int;

/** Returns glyph position rounding behavior. If set to [code]true[/code], when aligning glyphs to the pixel boundaries rounding remainders are accumulated to ensure more uniform glyph distribution. This setting has no effect if subpixel positioning is enabled. */
protected _font_get_keep_rounding_remainders(): boolean;

/** Returns kerning for the pair of glyphs. */
protected _font_get_kerning(): Vector2;

/** Returns list of the kerning overrides. */
protected _font_get_kerning_list(): Vector2i[];

/** Returns [code]true[/code] if support override is enabled for the [param language]. */
protected _font_get_language_support_override(): boolean;

/** Returns list of language support overrides. */
protected _font_get_language_support_overrides(): PackedStringArray;

/** Returns the width of the range around the shape between the minimum and maximum representable signed distance. */
protected _font_get_msdf_pixel_range(): int;

/** Returns source font size used to generate MSDF textures. */
protected _font_get_msdf_size(): int;

/** Returns font family name. */
protected _font_get_name(): string;

/** Returns font OpenType feature set override. */
protected _font_get_opentype_feature_overrides(): Dictionary<any, any>;

/** Returns [Dictionary] with OpenType font name strings (localized font names, version, description, license information, sample text, etc.). */
protected _font_get_ot_name_strings(): Dictionary<any, any>;

/** Returns oversampling factor override. If set to a positive value, overrides the oversampling factor of the viewport this font is used in. See [member Viewport.oversampling]. This value doesn't override the [code skip-lint]oversampling[/code] parameter of [code skip-lint]draw_*[/code] methods. Used by dynamic fonts only. */
protected _font_get_oversampling(): float;

/** Returns scaling factor of the color bitmap font. */
protected _font_get_scale(): float;

/** Returns [code]true[/code] if support override is enabled for the [param script]. */
protected _font_get_script_support_override(): boolean;

/** Returns list of script support overrides. */
protected _font_get_script_support_overrides(): PackedStringArray;

/** Returns font cache information, each entry contains the following fields: [code]Vector2i size_px[/code] - font size in pixels, [code]float viewport_oversampling[/code] - viewport oversampling factor, [code]int glyphs[/code] - number of rendered glyphs, [code]int textures[/code] - number of used textures, [code]int textures_size[/code] - size of texture data in bytes. */
protected _font_get_size_cache_info(): Dictionary[];

/** Returns list of the font sizes in the cache. Each size is [Vector2i] with font size and outline size. */
protected _font_get_size_cache_list(): Vector2i[];

/** Returns the spacing for [param spacing] in pixels (not relative to the font size). */
protected _font_get_spacing(): int;

/** Returns font stretch amount, compared to a normal width. A percentage value between [code]50%[/code] and [code]200%[/code]. */
protected _font_get_stretch(): int;

/** Returns font style flags. */
protected _font_get_style(): int;

/** Returns font style name. */
protected _font_get_style_name(): string;

/** Returns font subpixel glyph positioning mode. */
protected _font_get_subpixel_positioning(): int;

/** Returns a string containing all the characters available in the font. */
protected _font_get_supported_chars(): string;

/** Returns an array containing all glyph indices in the font. */
protected _font_get_supported_glyphs(): PackedInt32Array;

/** Returns number of textures used by font cache entry. */
protected _font_get_texture_count(): int;

/** Returns font cache texture image data. */
protected _font_get_texture_image(): Image;

/** Returns array containing glyph packing data. */
protected _font_get_texture_offsets(): PackedInt32Array;

/** Returns 2D transform applied to the font outlines. */
protected _font_get_transform(): Transform2D;

/** Returns pixel offset of the underline below the baseline. */
protected _font_get_underline_position(): float;

/** Returns thickness of the underline in pixels. */
protected _font_get_underline_thickness(): float;

/** Returns variation coordinates for the specified font cache entry. */
protected _font_get_variation_coordinates(): Dictionary<any, any>;

/** Returns weight (boldness) of the font. A value in the [code]100...999[/code] range, normal font weight is [code]400[/code], bold font weight is [code]700[/code]. */
protected _font_get_weight(): int;

/** Returns [code]true[/code] if a Unicode [param char] is available in the font. */
protected _font_has_char(): boolean;

/** Returns [code]true[/code] if system fonts can be automatically used as fallbacks. */
protected _font_is_allow_system_fallback(): boolean;

/** Returns [code]true[/code] if auto-hinting is supported and preferred over font built-in hinting. */
protected _font_is_force_autohinter(): boolean;

/** Returns [code]true[/code] if the font supports the given language (as a [url=https://en.wikipedia.org/wiki/ISO_639-1]ISO 639[/url] code). */
protected _font_is_language_supported(): boolean;

/** Returns [code]true[/code] if color modulation is applied when drawing the font's colored glyphs. */
protected _font_is_modulate_color_glyphs(): boolean;

/** Returns [code]true[/code] if glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. */
protected _font_is_multichannel_signed_distance_field(): boolean;

/** Returns [code]true[/code] if the font supports the given script (as a [url=https://en.wikipedia.org/wiki/ISO_15924]ISO 15924[/url] code). */
protected _font_is_script_supported(): boolean;

/** Removes specified rendered glyph information from the cache entry. */
protected _font_remove_glyph(): void;

/** Removes kerning override for the pair of glyphs. */
protected _font_remove_kerning(): void;

/** Remove language support override. */
protected _font_remove_language_support_override(): void;

/** Removes script support override. */
protected _font_remove_script_support_override(): void;

/** Removes specified font size from the cache entry. */
protected _font_remove_size_cache(): void;

/** Removes specified texture from the cache entry. */
protected _font_remove_texture(): void;

/** Renders specified glyph to the font cache texture. */
protected _font_render_glyph(): void;

/** Renders the range of characters to the font cache texture. */
protected _font_render_range(): void;

/** If set to [code]true[/code], system fonts can be automatically used as fallbacks. */
protected _font_set_allow_system_fallback(): void;

/** Sets font anti-aliasing mode. */
protected _font_set_antialiasing(): void;

/** Sets the font ascent (number of pixels above the baseline). */
protected _font_set_ascent(): void;

/** Sets extra baseline offset (as a fraction of font height). */
protected _font_set_baseline_offset(): void;

/** Sets font source data, e.g contents of the dynamic font source file. */
protected _font_set_data(): void;

/** Sets pointer to the font source data, e.g contents of the dynamic font source file. */
protected _font_set_data_ptr(): void;

/** Sets the font descent (number of pixels below the baseline). */
protected _font_set_descent(): void;

/** If set to [code]true[/code], embedded font bitmap loading is disabled. */
protected _font_set_disable_embedded_bitmaps(): void;

/** Sets font embolden strength. If [param strength] is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness. */
protected _font_set_embolden(): void;

/** Sets an active face index in the TrueType / OpenType collection. */
protected _font_set_face_index(): void;

/** Sets bitmap font fixed size. If set to value greater than zero, same cache entry will be used for all font sizes. */
protected _font_set_fixed_size(): void;

/** Sets bitmap font scaling mode. This property is used only if [code]fixed_size[/code] is greater than zero. */
protected _font_set_fixed_size_scale_mode(): void;

/** If set to [code]true[/code] auto-hinting is preferred over font built-in hinting. */
protected _font_set_force_autohinter(): void;

/** If set to [code]true[/code] font texture mipmap generation is enabled. */
protected _font_set_generate_mipmaps(): void;

/** Sets oversampling factor, shared by all font in the TextServer. */
protected _font_set_global_oversampling(): void;

/** Sets glyph advance (offset of the next glyph). */
protected _font_set_glyph_advance(): void;

/** Sets glyph offset from the baseline. */
protected _font_set_glyph_offset(): void;

/** Sets size of the glyph. */
protected _font_set_glyph_size(): void;

/** Sets index of the cache texture containing the glyph. */
protected _font_set_glyph_texture_idx(): void;

/** Sets rectangle in the cache texture containing the glyph. */
protected _font_set_glyph_uv_rect(): void;

/** Sets font hinting mode. Used by dynamic fonts only. */
protected _font_set_hinting(): void;

/** Sets glyph position rounding behavior. If set to [code]true[/code], when aligning glyphs to the pixel boundaries rounding remainders are accumulated to ensure more uniform glyph distribution. This setting has no effect if subpixel positioning is enabled. */
protected _font_set_keep_rounding_remainders(): void;

/** Sets kerning for the pair of glyphs. */
protected _font_set_kerning(): void;

/** Adds override for [method _font_is_language_supported]. */
protected _font_set_language_support_override(): void;

/** If set to [code]true[/code], color modulation is applied when drawing colored glyphs, otherwise it's applied to the monochrome glyphs only. */
protected _font_set_modulate_color_glyphs(): void;

/** Sets the width of the range around the shape between the minimum and maximum representable signed distance. */
protected _font_set_msdf_pixel_range(): void;

/** Sets source font size used to generate MSDF textures. */
protected _font_set_msdf_size(): void;

/** If set to [code]true[/code], glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. MSDF rendering allows displaying the font at any scaling factor without blurriness, and without incurring a CPU cost when the font size changes (since the font no longer needs to be rasterized on the CPU). As a downside, font hinting is not available with MSDF. The lack of font hinting may result in less crisp and less readable fonts at small sizes. */
protected _font_set_multichannel_signed_distance_field(): void;

/** Sets the font family name. */
protected _font_set_name(): void;

/** Sets font OpenType feature set override. */
protected _font_set_opentype_feature_overrides(): void;

/** If set to a positive value, overrides the oversampling factor of the viewport this font is used in. See [member Viewport.oversampling]. This value doesn't override the [code skip-lint]oversampling[/code] parameter of [code skip-lint]draw_*[/code] methods. Used by dynamic fonts only. */
protected _font_set_oversampling(): void;

/** Sets scaling factor of the color bitmap font. */
protected _font_set_scale(): void;

/** Adds override for [method _font_is_script_supported]. */
protected _font_set_script_support_override(): void;

/** Sets the spacing for [param spacing] to [param value] in pixels (not relative to the font size). */
protected _font_set_spacing(): void;

/** Sets font stretch amount, compared to a normal width. A percentage value between [code]50%[/code] and [code]200%[/code]. */
protected _font_set_stretch(): void;

/** Sets the font style flags. */
protected _font_set_style(): void;

/** Sets the font style name. */
protected _font_set_style_name(): void;

/** Sets font subpixel glyph positioning mode. */
protected _font_set_subpixel_positioning(): void;

/** Sets font cache texture image data. */
protected _font_set_texture_image(): void;

/** Sets array containing glyph packing data. */
protected _font_set_texture_offsets(): void;

/** Sets 2D transform, applied to the font outlines, can be used for slanting, flipping, and rotating glyphs. */
protected _font_set_transform(): void;

/** Sets pixel offset of the underline below the baseline. */
protected _font_set_underline_position(): void;

/** Sets thickness of the underline in pixels. */
protected _font_set_underline_thickness(): void;

/** Sets variation coordinates for the specified font cache entry. */
protected _font_set_variation_coordinates(): void;

/** Sets weight (boldness) of the font. A value in the [code]100...999[/code] range, normal font weight is [code]400[/code], bold font weight is [code]700[/code]. */
protected _font_set_weight(): void;

/** Returns the dictionary of the supported OpenType features. */
protected _font_supported_feature_list(): Dictionary<any, any>;

/** Returns the dictionary of the supported OpenType variation coordinates. */
protected _font_supported_variation_list(): Dictionary<any, any>;

/**
 * Converts a number from Western Arabic (0..9) to the numeral system used in the given [param language].
 *
 * If [param language] is an empty string, the active locale will be used.
 *
*/
protected _format_number(): string;

/** Frees an object created by this [TextServer]. */
protected _free_rid(): void;

/** Returns text server features, see [enum TextServer.Feature]. */
protected _get_features(): int;

/** Returns size of the replacement character (box with character hexadecimal code that is drawn in place of invalid characters). */
protected _get_hex_code_box_size(): Vector2;

/** Returns the name of the server interface. */
protected _get_name(): string;

/** Returns default TextServer database (e.g. ICU break iterators and dictionaries). */
protected _get_support_data(): PackedByteArray;

/** Returns default TextServer database (e.g. ICU break iterators and dictionaries) filename. */
protected _get_support_data_filename(): string;

/** Returns TextServer database (e.g. ICU break iterators and dictionaries) description. */
protected _get_support_data_info(): string;

/** Returns [code]true[/code] if [param rid] is valid resource owned by this text server. */
protected _has(): boolean;

/** Returns [code]true[/code] if the server supports a feature. */
protected _has_feature(): boolean;

/** Returns index of the first string in [param dict] which is visually confusable with the [param string], or [code]-1[/code] if none is found. */
protected _is_confusable(): int;

/** Returns [code]true[/code] if locale is right-to-left. */
protected _is_locale_right_to_left(): boolean;

/** Returns [code]true[/code] if the locale requires text server support data for line/word breaking. */
protected _is_locale_using_support_data(): boolean;

/** Returns [code]true[/code] if [param string] is a valid identifier. */
protected _is_valid_identifier(): boolean;

/** No documentation provided. */
protected _is_valid_letter(): boolean;

/** Loads optional TextServer database (e.g. ICU break iterators and dictionaries). */
protected _load_support_data(): boolean;

/** Converts the given readable name of a feature, variation, script, or language to an OpenType tag. */
protected _name_to_tag(): int;

/**
 * Converts [param number] from the numeral system used in the given [param language] to Western Arabic (0..9).
 *
 * If [param language] is an empty string, the active locale will be used.
 *
*/
protected _parse_number(): string;

/** Default implementation of the BiDi algorithm override function. */
protected _parse_structured_text(): Vector3i[];

/** Returns percent sign used in the given [param language]. */
protected _percent_sign(): string;

/** Increases the reference count of the specified oversampling level. This method is called by [Viewport], and should not be used directly. */
protected _reference_oversampling_level(): void;

/** Saves optional TextServer database (e.g. ICU break iterators and dictionaries) to the file. */
protected _save_support_data(): boolean;

/** Returns the number of uniform text runs in the buffer. */
protected _shaped_get_run_count(): int;

/** Returns the direction of the [param index] text run (in visual order). */
protected _shaped_get_run_direction(): int;

/** Returns the font RID of the [param index] text run (in visual order). */
protected _shaped_get_run_font_rid(): RID;

/** Returns the font size of the [param index] text run (in visual order). */
protected _shaped_get_run_font_size(): int;

/** Returns the language of the [param index] text run (in visual order). */
protected _shaped_get_run_language(): string;

/** Returns the embedded object of the [param index] text run (in visual order). */
protected _shaped_get_run_object(): any;

/** Returns the source text range of the [param index] text run (in visual order). */
protected _shaped_get_run_range(): Vector2i;

/** Returns the source text of the [param index] text run (in visual order). */
protected _shaped_get_run_text(): string;

/** Returns number of text spans added using [method _shaped_text_add_string] or [method _shaped_text_add_object]. */
protected _shaped_get_span_count(): int;

/** Returns text embedded object key. */
protected _shaped_get_span_embedded_object(): any;

/** Returns text span metadata. */
protected _shaped_get_span_meta(): any;

/** Returns the text span embedded object key. */
protected _shaped_get_span_object(): any;

/** Returns the text span source text. */
protected _shaped_get_span_text(): string;

/** Returns the text buffer source text, including object replacement characters. */
protected _shaped_get_text(): string;

/** Changes text span font, font size, and OpenType features, without changing the text. */
protected _shaped_set_span_update_font(): void;

/** Adds inline object to the text buffer, [param key] must be unique. In the text, object is represented as [param length] object replacement characters. */
protected _shaped_text_add_object(): boolean;

/** Adds text span and font to draw it to the text buffer. */
protected _shaped_text_add_string(): boolean;

/** Clears text buffer (removes text and inline objects). */
protected _shaped_text_clear(): void;

/** Returns composite character position closest to the [param pos]. */
protected _shaped_text_closest_character_pos(): int;

/** Draw shaped text into a canvas item at a given position, with [param color]. [param pos] specifies the leftmost point of the baseline (for horizontal layout) or topmost point of the baseline (for vertical layout). If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
protected _shaped_text_draw(): void;

/** Draw the outline of the shaped text into a canvas item at a given position, with [param color]. [param pos] specifies the leftmost point of the baseline (for horizontal layout) or topmost point of the baseline (for vertical layout). If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
protected _shaped_text_draw_outline(): void;

/** Duplicates shaped text buffer. */
protected _shaped_text_duplicate(): RID;

/** Adjusts text width to fit to specified width, returns new text width. */
protected _shaped_text_fit_to_width(): float;

/** Returns the text ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical). */
protected _shaped_text_get_ascent(): float;

/** Returns shapes of the carets corresponding to the character offset [param position] in the text. Returned caret shape is 1 pixel wide rectangle. */
protected _shaped_text_get_carets(): void;

/** Returns array of the composite character boundaries. */
protected _shaped_text_get_character_breaks(): PackedInt32Array;

/** Returns ellipsis character used for text clipping. */
protected _shaped_text_get_custom_ellipsis(): int;

/** Returns custom punctuation character list, used for word breaking. If set to empty string, server defaults are used. */
protected _shaped_text_get_custom_punctuation(): string;

/** Returns the text descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical). */
protected _shaped_text_get_descent(): float;

/** Returns direction of the text. */
protected _shaped_text_get_direction(): int;

/** Returns dominant direction of in the range of text. */
protected _shaped_text_get_dominant_direction_in_range(): int;

/** Returns number of glyphs in the ellipsis. */
protected _shaped_text_get_ellipsis_glyph_count(): int;

/** Returns array of the glyphs in the ellipsis. */
protected _shaped_text_get_ellipsis_glyphs(): const Glyph*;

/** Returns position of the ellipsis. */
protected _shaped_text_get_ellipsis_pos(): int;

/** Returns number of glyphs in the buffer. */
protected _shaped_text_get_glyph_count(): int;

/** Returns an array of glyphs in the visual order. */
protected _shaped_text_get_glyphs(): const Glyph*;

/** Returns composite character's bounds as offsets from the start of the line. */
protected _shaped_text_get_grapheme_bounds(): Vector2;

/** Returns direction of the text, inferred by the BiDi algorithm. */
protected _shaped_text_get_inferred_direction(): int;

/** Breaks text to the lines and returns character ranges for each line. */
protected _shaped_text_get_line_breaks(): PackedInt32Array;

/** Breaks text to the lines and columns. Returns character ranges for each segment. */
protected _shaped_text_get_line_breaks_adv(): PackedInt32Array;

/** Returns the glyph index of the inline object. */
protected _shaped_text_get_object_glyph(): int;

/** Returns the character range of the inline object. */
protected _shaped_text_get_object_range(): Vector2i;

/** Returns bounding rectangle of the inline object. */
protected _shaped_text_get_object_rect(): Rect2;

/** Returns array of inline objects. */
protected _shaped_text_get_objects(): any[];

/** Returns text orientation. */
protected _shaped_text_get_orientation(): int;

/** Returns the parent buffer from which the substring originates. */
protected _shaped_text_get_parent(): RID;

/** Returns [code]true[/code] if text buffer is configured to display control characters. */
protected _shaped_text_get_preserve_control(): boolean;

/** Returns [code]true[/code] if text buffer is configured to display hexadecimal codes in place of invalid characters. */
protected _shaped_text_get_preserve_invalid(): boolean;

/** Returns substring buffer character range in the parent buffer. */
protected _shaped_text_get_range(): Vector2i;

/** Returns selection rectangles for the specified character range. */
protected _shaped_text_get_selection(): PackedVector2Array;

/** Returns size of the text. */
protected _shaped_text_get_size(): Vector2;

/** Returns extra spacing added between glyphs or lines in pixels. */
protected _shaped_text_get_spacing(): int;

/** Returns the position of the overrun trim. */
protected _shaped_text_get_trim_pos(): int;

/** Returns pixel offset of the underline below the baseline. */
protected _shaped_text_get_underline_position(): float;

/** Returns thickness of the underline. */
protected _shaped_text_get_underline_thickness(): float;

/** Returns width (for horizontal layout) or height (for vertical) of the text. */
protected _shaped_text_get_width(): float;

/** Breaks text into words and returns array of character ranges. Use [param grapheme_flags] to set what characters are used for breaking. */
protected _shaped_text_get_word_breaks(): PackedInt32Array;

/** Returns [code]true[/code] if an object with [param key] is embedded in this shaped text buffer. */
protected _shaped_text_has_object(): boolean;

/** Returns grapheme index at the specified pixel offset at the baseline, or [code]-1[/code] if none is found. */
protected _shaped_text_hit_test_grapheme(): int;

/** Returns caret character offset at the specified pixel offset at the baseline. This function always returns a valid position. */
protected _shaped_text_hit_test_position(): int;

/** Returns [code]true[/code] if buffer is successfully shaped. */
protected _shaped_text_is_ready(): boolean;

/** Returns composite character end position closest to the [param pos]. */
protected _shaped_text_next_character_pos(): int;

/** Returns grapheme end position closest to the [param pos]. */
protected _shaped_text_next_grapheme_pos(): int;

/** Trims text if it exceeds the given width. */
protected _shaped_text_overrun_trim_to_width(): void;

/** Returns composite character start position closest to the [param pos]. */
protected _shaped_text_prev_character_pos(): int;

/** Returns grapheme start position closest to the [param pos]. */
protected _shaped_text_prev_grapheme_pos(): int;

/** Sets new size and alignment of embedded object. */
protected _shaped_text_resize_object(): boolean;

/** Overrides BiDi for the structured text. */
protected _shaped_text_set_bidi_override(): void;

/** Sets ellipsis character used for text clipping. */
protected _shaped_text_set_custom_ellipsis(): void;

/** Sets custom punctuation character list, used for word breaking. If set to empty string, server defaults are used. */
protected _shaped_text_set_custom_punctuation(): void;

/** Sets desired text direction. If set to [constant TextServer.DIRECTION_AUTO], direction will be detected based on the buffer contents and current locale. */
protected _shaped_text_set_direction(): void;

/** Sets desired text orientation. */
protected _shaped_text_set_orientation(): void;

/** If set to [code]true[/code] text buffer will display control characters. */
protected _shaped_text_set_preserve_control(): void;

/** If set to [code]true[/code] text buffer will display invalid characters as hexadecimal codes, otherwise nothing is displayed. */
protected _shaped_text_set_preserve_invalid(): void;

/** Sets extra spacing added between glyphs or lines in pixels. */
protected _shaped_text_set_spacing(): void;

/** Shapes buffer if it's not shaped. Returns [code]true[/code] if the string is shaped successfully. */
protected _shaped_text_shape(): boolean;

/** Returns text glyphs in the logical order. */
protected _shaped_text_sort_logical(): const Glyph*;

/** Returns text buffer for the substring of the text in the [param shaped] text buffer (including inline objects). */
protected _shaped_text_substr(): RID;

/** Aligns shaped text to the given tab-stops. */
protected _shaped_text_tab_align(): float;

/** Updates break points in the shaped text. This method is called by default implementation of text breaking functions. */
protected _shaped_text_update_breaks(): boolean;

/** Updates justification points in the shaped text. This method is called by default implementation of text justification functions. */
protected _shaped_text_update_justification_ops(): boolean;

/** Returns [code]true[/code] if [param string] is likely to be an attempt at confusing the reader. */
protected _spoof_check(): boolean;

/** Returns array of the composite character boundaries. */
protected _string_get_character_breaks(): PackedInt32Array;

/** Returns an array of the word break boundaries. Elements in the returned array are the offsets of the start and end of words. Therefore the length of the array is always even. */
protected _string_get_word_breaks(): PackedInt32Array;

/** Returns the string converted to [code]lowercase[/code]. */
protected _string_to_lower(): string;

/** Returns the string converted to [code]Title Case[/code]. */
protected _string_to_title(): string;

/** Returns the string converted to [code]UPPERCASE[/code]. */
protected _string_to_upper(): string;

/** Strips diacritics from the string. */
protected _strip_diacritics(): string;

/** Converts the given OpenType tag to the readable name of a feature, variation, script, or language. */
protected _tag_to_name(): string;

/** Decreases the reference count of the specified oversampling level, and frees the font cache for oversampling level when the reference count reaches zero. This method is called by [Viewport], and should not be used directly. */
protected _unreference_oversampling_level(): void;

  connect<T extends SignalsOf<TextServerExtension>>(signal: T, method: SignalFunction<TextServerExtension[T]>): number;






}

