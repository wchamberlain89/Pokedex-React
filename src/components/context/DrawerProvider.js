import React, { useState } from 'react';
import DrawerContext from './DrawerContext'
import getBackgroundColorByType from '../../helpers/getBackgroundColorByType.js'

const DrawerProvider = ({ children }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  
  const drawerToggle = () => setIsOpen(!isOpen)
  const drawerClose = () => setIsOpen(false)
  const drawerOpen = () => setIsOpen(true)

  return (
    <DrawerContext.Provider value={{ drawerOpen, drawerClose, drawerToggle, isOpen }}>
      {children}
    </DrawerContext.Provider>
  )
}

export default DrawerProvider