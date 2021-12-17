import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  font-size: 20px;
  font-weight: 400;
  color: white;
  border: 1px solid;
  border-radius: 4px;
  padding: .5em 1.2em;
  background-color: transparent;
  cursor: pointer;
  transition: all .3s linear;
  &:hover {
    color: black;
    background-color: white;
  }
`

const Button = props => {
  return <StyledButton {...props} />
}

export default Button
