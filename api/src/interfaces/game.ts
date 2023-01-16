export interface GameRoom {
  code: string
}

export interface GameInput {
  roomCode: string
  position: {
    x: number
    y: number
  }
  player: Player
}

export enum Player {
  NOUGHTS,
  CROSSES,
}
