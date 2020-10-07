import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 50vw;
  height: 100vh;
  background-color: #FEFEFE;
  z-index: 999;
  display: ${({showing}) => showing ? 'block' : 'none'}
`

const Button = styled.button`
  width: 150px;
  height: 150px;
  position: fixed;
  top: 2rem;
  right: 2rem;
`

const Drawer = ({ children, showing }) => {
  return (
    <Container showing={showing}>
      {children}
    </Container>
  )
}

Drawer.Button = ({ children, onClick }) => {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  )
}

export default Drawer