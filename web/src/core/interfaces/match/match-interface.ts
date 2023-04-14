import { Player } from '../Game';

export enum BoardItemStatus {
  CROSS = 'CROSS',
  NOUGHT = 'NOUGHT',
  EMPTY = 'NONE'
}

export enum MatchFinishedAction {
  NEXT_ROUND = 'NEXT_ROUND',
  QUIT = 'QUIT',
  RELOAD = 'RELOAD'
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

export type MatchFinishedDto = {
  roomCode: string;
  action: MatchFinishedAction;
};
