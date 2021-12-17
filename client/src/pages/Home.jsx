import React from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Title from '../components/Title'

const StyledNav = styled.nav`
  display: grid;
  row-gap: 10px;
`

const StyledLink = (props) => (<Link style={{color: 'white'}} {...props} />)

const Home = () => {
  return (
    <>
      <Title align='center'>Styled Chat</Title>
      <StyledNav>
        <StyledLink to='/room/1'>First room</StyledLink>
        <StyledLink to='/room/2'>Second room</StyledLink>
        <StyledLink to='/room/3'>Third room</StyledLink>
      </StyledNav>
    </>
  )
}

export default Home
