import { MatchFinishedDto } from '@/interfaces/match';

import { socket } from '../connection';

export const MATCH_FINISHED = 'MATCH_FINISHED';

export const emitMatchFinished = (dto: MatchFinishedDto) => {
  socket.emit(MATCH_FINISHED, dto);
};

export const onMatchFinished = (fn: (dto: MatchFinishedDto) => void) => {
  socket.on(MATCH_FINISHED, (dto: MatchFinishedDto) => {
    fn(dto);
  });
};
