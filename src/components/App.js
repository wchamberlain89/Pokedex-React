import React from 'react'
import {
  QueryCache,
  ReactQueryCacheProvider
} from 'react-query'
import GlobalStyles from '../globalStyles'
import Pokedex from './Pokedex'
import {Drawer, DrawerButton} from './Drawer'
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
    </>
  )
}

export default App
