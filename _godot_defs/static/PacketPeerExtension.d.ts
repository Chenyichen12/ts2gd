
/**
*/
declare class PacketPeerExtension extends PacketPeer  {

  
/**
*/
  new(): PacketPeerExtension; 
  static "new"(): PacketPeerExtension 



/** No documentation provided. */
protected _get_available_packet_count(): int;

/** No documentation provided. */
protected _get_max_packet_size(): int;

/** No documentation provided. */
protected _get_packet(r_buffer: const uint8_t **, r_buffer_size: int32_t*): int;

/** No documentation provided. */
protected _put_packet(p_buffer: const uint8_t*, p_buffer_size: int): int;

  connect<T extends SignalsOf<PacketPeerExtension>>(signal: T, method: SignalFunction<PacketPeerExtension[T]>): number;






}

