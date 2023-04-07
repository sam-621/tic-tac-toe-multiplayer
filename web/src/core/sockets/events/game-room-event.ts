import { JoinGameRoomEventDto } from '@/interfaces/Game';

import { socket } from '../connection';

export const GAME_ROOM_CHANNEL = 'GAME_ROOM_CHANNEL';

export const joinGameRoom = (dto: JoinGameRoomEventDto) => {
  socket.emit(GAME_ROOM_CHANNEL, dto);
};

export const listenForMatchRoom = (fn: (dto: JoinGameRoomEventDto) => void) => {
  socket.on(GAME_ROOM_CHANNEL, (dto: JoinGameRoomEventDto) => {
    console.log('OLA');

    fn(dto);
  });
};
