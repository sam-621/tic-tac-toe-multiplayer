import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import { gameRoom, GAME_ROOM_CHANNEL } from './events/game-room'
import { gameStarted, GAME_STARTED } from './events/game-started'
import { gameTurn, GAME_TURN_CHANNEL } from './events/game-turn'

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket) => {
  socket.on(GAME_ROOM_CHANNEL, (input) => gameRoom(input, socket))

  socket.on(GAME_STARTED, (input) => gameStarted(input, io))
  socket.on(GAME_TURN_CHANNEL, (input) => gameTurn(input, io))
})

server.listen(3000, () => {
  console.log('listening on *:3000')
})
