export enum Player {
  CROSSES = 'CROSSES',
  NOUGHTS = 'NOUGHTS'
}

export enum GameStatus {
  CREATING = 'CREATING',
  WAITING = 'WAITING',
  PLAYING = 'PLAYING'
}

export enum GameMode {
  LOCAL_PLAYER = 'LOCAL_PLAYER',
  LOCAL_MACHINE = 'LOCAL_MACHINE',
  MULTIPLAYER = 'MULTIPLAYER'
}

export interface GameRoomEventDto {
  code: string;
}
