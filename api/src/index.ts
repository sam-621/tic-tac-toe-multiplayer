import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import { gameRoom, GAME_ROOM_CHANNEL } from './events/game-room'
import { gameTurn, GAME_TURN_CHANNEL } from './events/game-turn'

const app = express()
const server = http.createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
  socket.on(GAME_ROOM_CHANNEL, (input) => gameRoom(input, socket))

  socket.on(GAME_TURN_CHANNEL, (input) => gameTurn(input, io))
})

server.listen(3000, () => {
  console.log('listening on *:3000')
})
