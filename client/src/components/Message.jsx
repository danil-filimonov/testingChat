import React from 'react'
import styled from 'styled-components'

const StyledMessage = styled.p`
  border: 1px solid;
  border-radius: 4px;
  width: fit-content;
  padding: 15px;
  margin: 20px 0;
  max-width: 70%;

  ${({ incoming }) => (incoming ? 'align-self: flex-start;' : '')}
  ${({ outcoming }) => (outcoming ? 'align-self: flex-end;' : '')}
`

const Message = props => {
  return <StyledMessage {...props} />
}

export default Message
