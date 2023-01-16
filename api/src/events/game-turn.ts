import { Server } from 'socket.io'
import { Player } from '../interfaces/game'

export const gameTurn = (input: GameTurnInput, io: Server) => {
  io.to(input.roomCode).emit('game-data', input)
}

export type GameTurnInput = {
  roomCode: string
  position: {
    x: number
    y: number
  }
  player: Player
}
