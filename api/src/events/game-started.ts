import { Server } from 'socket.io'
import { Player } from '../interfaces/game'

export const MATCH_STARTED = 'MATCH_STARTED'

export const matchStarted = (input: MatchTurnInput, io: Server) => {
  io.to(input.roomCode).emit(MATCH_STARTED, input)
}

export type MatchTurnInput = {
  roomCode: string
  player: Player
}
