import React from 'react'
import styled from 'styled-components'
import {
  QueryCache,
  ReactQueryCacheProvider,
  ReactQuery
} from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'
import GlobalStyles from '../globalStyles'
import Pokedex from './Pokedex'
import { Drawer, DrawerButton } from './Drawer'
import PokemonGenerationsList from './PokemonGenerationsList'
import PokedexIcon from '../assets/pokedex.png';
import DrawerProvider from './context/DrawerProvider'

const queryCache = new QueryCache()

function App() {
  const [drawerShowing, setdrawerShowing] = React.useState(false);
  
  const toggleDrawer = (drawerState) => {
    setdrawerShowing(!drawerState)
  }

  return (
    <>
      <GlobalStyles/>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <DrawerProvider>
          <Drawer showing={drawerShowing}>
            <PokemonGenerationsList />
          </Drawer>
          <DrawerButton onClick={() => toggleDrawer(drawerShowing)}><img style={{ width: '100%' }} src={PokedexIcon}/></DrawerButton>
          <Pokedex />
        </DrawerProvider>
      </ReactQueryCacheProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default App
