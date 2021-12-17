import React, { useEffect, useState } from 'react'
import TimeAgo from 'react-timeago'
import Message from './Message'

const MessagesList = ({ socket }) => {
  const [messages, setMessages] = useState({})
  
  useEffect(() => {
    if(socket) {
      const messageListener = message => {
        setMessages(prev => {
          const newMessages = { ...prev }
          newMessages[message.id] = message
          return newMessages
        })
      }
      
      socket.on('new-message', messageListener)
      socket.emit('getAllMessages')

      return () => {
        socket.off('new-message', messageListener)
      }
    }
  }, [socket])


  return (
    <>
      {[...Object.values(messages)]
        .sort((a, b) => a.time - b.time)
        .map(msg => (
          <Message outcoming={socket.io.opts.query.userName === msg.user} key={msg.id}>
            {msg.user}: {msg.value} (<TimeAgo date={msg.time} />)
          </Message>
        ))}
    </>
  )
}

export default MessagesList
