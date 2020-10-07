import React from 'react'
import {
  QueryCache,
  ReactQueryCacheProvider
} from 'react-query'
import GlobalStyles from '../globalStyles'
import Pokedex from './Pokedex'
import Drawer from './Drawer'
import PokemonGenerationsList from './PokemonGenerationsList'
import PokedexIcon from '../assets/pokedex.png';

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
        <Drawer showing={drawerShowing}>
          <PokemonGenerationsList />
        </Drawer>
        <Drawer.Button onClick={() => toggleDrawer(drawerShowing)}><img style={{ width: '100%' }} src={PokedexIcon}/></Drawer.Button>
        <Pokedex />
      </ReactQueryCacheProvider>
    </>
  )
}

export default App
