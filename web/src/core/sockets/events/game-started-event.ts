import { MatchTurnEventDto } from '@/interfaces/match';

import { socket } from '../connection';

const GAME_STARTED = 'GAME_STARTED';

export const emitGameStarted = (dto: MatchTurnEventDto) => {
  socket.emit(GAME_STARTED, dto);
};

export const onGameStarted = (fn: (dto: MatchTurnEventDto) => void) => {
  socket.on(GAME_STARTED, (dto: MatchTurnEventDto) => {
    fn(dto);
  });
};
