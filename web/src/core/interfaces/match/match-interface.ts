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

export type MatchMoveDto = {
  roomCode: string;
  position: {
    x: number;
    y: number;
  };
  player: Player;
};
