import { Server, Socket } from 'socket.io'

export const GAME_ROOM_CHANNEL = 'GAME_ROOM_CHANNEL'

export const gameRoom = (input: GameRoomInput, socket: Socket, io: Server) => {
  socket.join(input.code)
  const roomSize = io.sockets.adapter.rooms.get(input.code).size
  io.to(input.code).emit(GAME_ROOM_CHANNEL, { code: roomSize })
}

type GameRoomInput = {
  code: string
}
