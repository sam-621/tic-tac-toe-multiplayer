import { Server } from 'socket.io'
import { Player } from '../interfaces/game'

export const MATCH_MOVE_CHANNEL = 'MATCH_MOVE_CHANNEL'

export const matchMove = (input: MatchMoveDto, io: Server) => {
  io.to(input.roomCode).emit(MATCH_MOVE_CHANNEL, input)
}

export type MatchMoveDto = {
  roomCode: string
  position: {
    x: number
    y: number
  }
  player: Player
  move: number
}
