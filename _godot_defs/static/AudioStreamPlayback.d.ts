
/**
 * Can play, loop, pause a scroll through audio. See [AudioStream] and [AudioStreamOggVorbis] for usage.
 *
*/
declare class AudioStreamPlayback extends RefCounted  {

  
/**
 * Can play, loop, pause a scroll through audio. See [AudioStream] and [AudioStreamOggVorbis] for usage.
 *
*/
  new(): AudioStreamPlayback; 
  static "new"(): AudioStreamPlayback 



/** Overridable method. Should return how many times this audio stream has looped. Most built-in playbacks always return [code]0[/code]. */
protected _get_loop_count(): int;

/** Return the current value of a playback parameter by name (see [method AudioStream._get_parameter_list]). */
protected _get_parameter(): any;

/** Overridable method. Should return the current progress along the audio stream, in seconds. */
protected _get_playback_position(): float;

/** Overridable method. Should return [code]true[/code] if this playback is active and playing its audio stream. */
protected _is_playing(): boolean;

/**
 * Override this method to customize how the audio stream is mixed. This method is called even if the playback is not active.
 *
 * **Note:** It is not useful to override this method in GDScript or C#. Only GDExtension can take advantage of it.
 *
*/
protected _mix(): int;

/** Override this method to customize what happens when seeking this audio stream at the given [param position], such as by calling [method AudioStreamPlayer.seek]. */
protected _seek(): void;

/** Set the current value of a playback parameter by name (see [method AudioStream._get_parameter_list]). */
protected _set_parameter(): void;

/** Override this method to customize what happens when the playback starts at the given position, such as by calling [method AudioStreamPlayer.play]. */
protected _start(): void;

/** Override this method to customize what happens when the playback is stopped, such as by calling [method AudioStreamPlayer.stop]. */
protected _stop(): void;

/** Overridable method. Called whenever the audio stream is mixed if the playback is active and [method AudioServer.set_enable_tagging_used_audio_streams] has been set to [code]true[/code]. Editor plugins may use this method to "tag" the current position along the audio stream and display it in a preview. */
protected _tag_used_streams(): void;

/** Returns the number of times the stream has looped. */
get_loop_count(): int;

/** Returns the current position in the stream, in seconds. */
get_playback_position(): float;

/** Returns the [AudioSamplePlayback] associated with this [AudioStreamPlayback] for playing back the audio sample of this stream. */
get_sample_playback(): AudioSamplePlayback;

/** Returns [code]true[/code] if the stream is playing. */
is_playing(): boolean;

/**
 * Mixes up to [param frames] of audio from the stream from the current position, at a rate of [param rate_scale], advancing the stream.
 *
 * Returns a [PackedVector2Array] where each element holds the left and right channel volume levels of each frame.
 *
 * **Note:** Can return fewer frames than requested, make sure to use the size of the return value.
 *
*/
mix_audio(): PackedVector2Array;

/** Seeks the stream at the given [param time], in seconds. */
seek(): void;

/** Associates [AudioSamplePlayback] to this [AudioStreamPlayback] for playing back the audio sample of this stream. */
set_sample_playback(): void;

/** Starts the stream from the given [param from_pos], in seconds. */
start(): void;

/** Stops the stream. */
stop(): void;

  connect<T extends SignalsOf<AudioStreamPlayback>>(signal: T, method: SignalFunction<AudioStreamPlayback[T]>): number;






}

