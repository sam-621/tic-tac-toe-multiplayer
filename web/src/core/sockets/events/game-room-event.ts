import { JoinGameRoomEventDto } from '@/interfaces/Game';

import { socket } from '../connection';

const GAME_ROOM_CHANNEL = 'GAME_ROOM_CHANNEL';

export const emitJoinGameRoom = (dto: JoinGameRoomEventDto) => {
  socket.emit(GAME_ROOM_CHANNEL, dto);
};

export const onJoinGameRoom = (fn: (dto: JoinGameRoomEventDto) => void) => {
  socket.on(GAME_ROOM_CHANNEL, (dto: JoinGameRoomEventDto) => {
    fn(dto);
  });
};
