
/**
*/
declare class StreamPeerExtension extends StreamPeer  {

  
/**
*/
  new(): StreamPeerExtension; 
  static "new"(): StreamPeerExtension 



/** No documentation provided. */
protected _get_available_bytes(): int;

/** No documentation provided. */
protected _get_data(r_buffer: uint8_t*, r_bytes: int, r_received: int32_t*): int;

/** No documentation provided. */
protected _get_partial_data(r_buffer: uint8_t*, r_bytes: int, r_received: int32_t*): int;

/** No documentation provided. */
protected _put_data(p_data: const uint8_t*, p_bytes: int, r_sent: int32_t*): int;

/** No documentation provided. */
protected _put_partial_data(p_data: const uint8_t*, p_bytes: int, r_sent: int32_t*): int;

  connect<T extends SignalsOf<StreamPeerExtension>>(signal: T, method: SignalFunction<StreamPeerExtension[T]>): number;






}

