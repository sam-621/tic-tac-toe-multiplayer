import { Server } from 'socket.io'

export const MATCH_FINISHED = 'MATCH_FINISHED'

export const matchFinished = (input: MatchFinishedInput, io: Server) => {
  io.to(input.roomCode).emit(MATCH_FINISHED, input)
}

export type MatchFinishedInput = {
  roomCode: string
  action: MatchFinishedAction
}

enum MatchFinishedAction {
  NEXT_ROUND = 'NEXT_ROUND',
  QUIT = 'QUIT',
}
