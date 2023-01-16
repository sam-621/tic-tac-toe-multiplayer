const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
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
