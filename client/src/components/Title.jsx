import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-size: 40px;
  text-align: ${({ align }) => (align ? align : 'left')};
`

const Title = props => {
  return <StyledTitle {...props} />
}

export default Title
