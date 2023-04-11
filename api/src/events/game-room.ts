import { Server, Socket } from 'socket.io'

export const GAME_ROOM_CHANNEL = 'GAME_ROOM_CHANNEL'

export const gameRoom = (input: GameRoomInput, socket: Socket, io: Server) => {
  const prevRoomSize = io.sockets.adapter.rooms.get(input.code)?.size

  if (prevRoomSize >= 2) return

  socket.join(input.code)

  const newRoomSize = io.sockets.adapter.rooms.get(input.code)?.size
  io.to(input.code).emit(GAME_ROOM_CHANNEL, { code: newRoomSize })
}

type GameRoomInput = {
  code: string
}
