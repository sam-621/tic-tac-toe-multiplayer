import { Server } from 'socket.io'
import { Player } from '../interfaces/game'

export const GAME_STARTED = 'GAME_STARTED'

export const gameStarted = (input: GameTurnInput, io: Server) => {
  io.to(input.roomCode).emit(GAME_STARTED, input)
}

export type GameTurnInput = {
  roomCode: string
  player: Player
}
