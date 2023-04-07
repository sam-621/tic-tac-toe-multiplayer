import { MatchMoveDto } from '@/interfaces/match';

import { socket } from '../connection';

const MATCH_MOVE_CHANNEL = 'MATCH_MOVE_CHANNEL';

export const emitMatchMove = (dto: MatchMoveDto) => {
  socket.emit(MATCH_MOVE_CHANNEL, dto);
};

export const onMatchMove = (fn: (dto: MatchMoveDto) => void) => {
  socket.on(MATCH_MOVE_CHANNEL, (dto: MatchMoveDto) => {
    fn(dto);
  });
};
