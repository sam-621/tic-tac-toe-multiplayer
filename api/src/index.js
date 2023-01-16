import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
  socket.on('game-room', (input) => {
    socket.join(input.code)
  })

  socket.on('game-data', (input) => {
    io.to(input.roomCode).emit('game-data', input)
    if (input.global) io.emit('game-data', input)
  })
})

server.listen(3000, () => {
  console.log('listening on *:3000')
})
