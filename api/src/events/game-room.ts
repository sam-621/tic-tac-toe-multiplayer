import { Socket } from 'socket.io'

export const GAME_ROOM_CHANNEL = 'GAME_ROOM_CHANNEL'

export const gameRoom = (input: GameRoomInput, socket: Socket) => {
  console.log('in game')
  console.log({
    input,
  })

  socket.join(input.code)
}

type GameRoomInput = {
  code: string
}
