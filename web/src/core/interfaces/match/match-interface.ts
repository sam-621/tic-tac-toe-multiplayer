import { Player } from '../Game';

export enum BoardItemStatus {
  CROSS = 'CROSS',
  NOUGHT = 'NOUGHT',
  EMPTY = 'NONE'
}

export type MatchTurnEventDto = {
  roomCode: string;
  player: Player;
};
