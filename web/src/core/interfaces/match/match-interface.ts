import { Player } from '../Game';

export enum BoardItemStatus {
  CROSS = 'CROSS',
  NOUGHT = 'NOUGHT',
  EMPTY = 'NONE'
}

export type MatchStartedEventDto = {
  roomCode: string;
  player: Player;
};
