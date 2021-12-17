import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  color: white;
  border: 1px solid;
  border-radius: 4px;
  padding: .5em 1.2em;
  background-color: transparent;
  &::placeholder {
    color: white;
  }
`

const Input = props => {
  return <StyledInput {...props} />
}

export default Input
