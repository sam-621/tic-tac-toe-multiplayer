import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import { gameRoom, GAME_ROOM_CHANNEL } from './events/game-room'
import { matchStarted, MATCH_STARTED } from './events/game-started'
import { matchMove, MATCH_MOVE_CHANNEL } from './events/game-move'
import { MATCH_FINISHED, matchFinished } from './events/match-finished'

const PORT = process.env.PORT ?? 4000

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket) => {
  socket.on(GAME_ROOM_CHANNEL, (input) => gameRoom(input, socket, io))

  socket.on(MATCH_STARTED, (input) => matchStarted(input, io))
  socket.on(MATCH_MOVE_CHANNEL, (input) => matchMove(input, io))
  socket.on(MATCH_FINISHED, (input) => matchFinished(input, io))
})

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`)
})
