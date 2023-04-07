import { JoinGameRoomEventDto } from '@/interfaces/Game';

import { socket } from '../connection';

export const GAME_ROOM_CHANEL = 'GAME_ROOM_CHANEL';

export const joinGameRoom = (dto: JoinGameRoomEventDto) => {
  socket.emit(GAME_ROOM_CHANEL, dto);
};
