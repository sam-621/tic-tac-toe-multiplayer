import { Socket } from 'socket.io'

export const gameRoom = (input: GameRoomInput, socket: Socket) => {
  socket.join(input.code)
}

type GameRoomInput = {
  code: string
}
