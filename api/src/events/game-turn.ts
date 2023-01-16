import { Server } from 'socket.io'
import { Player } from '../interfaces/game'

export const GAME_TURN_CHANNEL = 'GAME_TURN_CHANNEL'

export const gameTurn = (input: GameTurnInput, io: Server) => {
  io.to(input.roomCode).emit(GAME_TURN_CHANNEL, input)
}

export type GameTurnInput = {
  roomCode: string
  position: {
    x: number
    y: number
  }
  player: Player
}
