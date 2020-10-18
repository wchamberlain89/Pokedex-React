import React, { useContext } from 'react';
import styled from 'styled-components'
import DrawerContext from './context/DrawerContext'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: -100vw;
  width: 75vw;
  height: 100vh;
  background-color: #FEFEFE;
  z-index: 999;
  transition: 0.35s ease-out;
  &.open {
    left: 0;
  }
`

const Button = styled.button`
  width: 150px;
  height: 150px;
  position: fixed;
  top: 2rem;
  right: 2rem;
`

export const Drawer = ({ children, showing }) => {
  const { isOpen } = useContext(DrawerContext)
  return (
    <Container className={ isOpen ? 'open' : null }>
      {children}
    </Container>
  )
}

export const DrawerButton = ({ children, onClick }) => {
  const { drawerToggle } = useContext(DrawerContext)
  console.log(drawerToggle)
  return (
    <Button onClick={drawerToggle}>
      {children}
    </Button>
  )
}

export default Drawer