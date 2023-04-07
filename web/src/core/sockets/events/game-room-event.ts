import { JoinGameRoomEventDto } from '@/interfaces/Game';

import { socket } from '../connection';

export const GAME_ROOM_CHANNEL = 'GAME_ROOM_CHANNEL';

export const joinGameRoom = (dto: JoinGameRoomEventDto) => {
  socket.emit(GAME_ROOM_CHANNEL, dto);
};
