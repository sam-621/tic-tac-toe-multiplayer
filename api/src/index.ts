import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import { gameRoom } from './events/game-room'
import { gameTurn } from './events/game-turn'

const app = express()
const server = http.createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
  socket.on('game-room', (input) => gameRoom(input, socket))

  socket.on('game-turn', (input) => gameTurn(input, io))
})

server.listen(3000, () => {
  console.log('listening on *:3000')
})
