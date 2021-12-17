const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')

const chat = require('./chat')

const app = express()
app.use(express.json({ extended: true }))

const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:3000']
  }
})

const PORT = 5000

async function start() {
  try {
    chat(io)
    httpServer.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server error', e.message)
    process.exit(1)
  }
}

start()
