import React from 'react'
import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : 'stretch')};
  align-items: ${({ align }) => (align ? align : 'stretch')};
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  width: ${({ width }) => (width ? width : 'initial')};
  height: ${({ height }) => (height ? height : 'initial')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  padding: ${({ padding }) => (padding ? padding : '0')};

  ${({styles}) => styles ? styles : ''}
`

const Flex = props => {
  return <StyledFlex {...props} />
}

export default Flex
