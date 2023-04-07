import { MatchStartedEventDto } from '@/interfaces/match';

import { socket } from '../connection';

const MATCH_STARTED = 'MATCH_STARTED';

export const emitMatchStarted = (dto: MatchStartedEventDto) => {
  socket.emit(MATCH_STARTED, dto);
};

export const onMatchStarted = (fn: (dto: MatchStartedEventDto) => void) => {
  socket.on(MATCH_STARTED, (dto: MatchStartedEventDto) => {
    fn(dto);
  });
};
