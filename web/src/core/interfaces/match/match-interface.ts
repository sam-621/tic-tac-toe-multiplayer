import { Player } from '../Game';

export enum BoardItemStatus {
  CROSS = 'CROSS',
  NOUGHT = 'NOUGHT',
  EMPTY = 'NONE'
}

export type BoardPosition = {
  x: number;
  y: number;
};

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
  move: number;
};
