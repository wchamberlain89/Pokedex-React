import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Pokemon from './Pokemon'
import PokemonTypeProvider from './context/PokemonTypeProvider'
import DrawerProvider from './context/DrawerProvider'

const Pokedex = () => {
  return (
    <>
      <PokemonTypeProvider>
       
          <Switch>
            <Route path='/pokemon/:id'>
              <Pokemon />
            </Route>
            <Route path='/'>
              <Redirect to='/pokemon/bulbasaur'/>
            </Route>
          </Switch>
        
      </PokemonTypeProvider>
    </>
  )
}

export default Pokedex