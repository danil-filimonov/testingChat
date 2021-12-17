const uuidv4 = require('uuid').v4

const messages = new Set()

class Connection {
  constructor(io, socket) {
    this.socket = socket
    this.io = io

    socket.on('getAllMessages', () => this.getAllMessages())
    socket.on('message', value => this.handleMessage(value))
    socket.on('disconnect', () => {
      const { roomId, userName } = socket.handshake.query
      socket.leave(roomId)
      console.log(`user ${userName} disconnected`)
    })
    socket.on('connect_error', err => {
      console.log(`connect_error due to ${err.message}`)
    })
  }

  sendMessage(message) {
    this.io.to(message.roomId).emit('new-message', message)
  }

  getAllMessages() {
    messages.forEach(msg => this.sendMessage(msg))
  }

  handleMessage(value) {
    const { roomId, userName } = this.socket.handshake.query

    const message = {
      id: uuidv4(),
      user: userName,
      roomId,
      value,
      time: Date.now()
    }

    messages.add(message)
    this.sendMessage(message)
  }
}

function chat(io) {
  io.on('connection', socket => {
    console.log(`user ${socket.handshake.query.userName} connected`)
    socket.join(socket.handshake.query.roomId)
    new Connection(io, socket)
  })
}

module.exports = chat