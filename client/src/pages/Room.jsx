import React, { useState, useEffect } from 'react'

import { useParams, Link } from 'react-router-dom'
import { io } from 'socket.io-client'

import Flex from '../components/Flex'
import Title from '../components/Title'
import Button from '../components/Button'
import Input from '../components/Input'
import MessagesList from '../components/MessagesList'

const Room = () => {
  const { id } = useParams()
  const [typed, setTyped] = useState('')
  const handleTyped = e => setTyped(e.target.value) 

  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3000`, { query: { userName: prompt('What is your name?', 'Anon'), roomId: id } })
    setSocket(newSocket)
    return () => newSocket.close()
  }, [setSocket, id])

  const handleSubmit = e => {
    e.preventDefault()
    socket.emit('message', typed)
    setTyped('')
  }

  return (
    <>
      <Title align='center'>Room {id}</Title>
      <Link to='/' style={{color: 'white'}}>Home</Link>
      <Flex direction='column' justify='space-between' height='90%'>
        <Flex direction='column' margin='30px 0' height='100%' styles={'overflow-y: auto;'}>
          <MessagesList socket={socket} />
        </Flex>
        <form onSubmit={handleSubmit}>
          <Flex>
            <Input name='msg' type='text' placeholder='Type here...' value={typed} onChange={handleTyped} />
            <Button type='submit'>Send</Button>
          </Flex>
        </form>
      </Flex>
    </>
  )
}

export default Room
