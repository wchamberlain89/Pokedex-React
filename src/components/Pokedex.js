import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Pokemon from './Pokemon'

const Pokedex = () => {
  return (
    <>
      <Switch>
        <Route path='/pokemon/:id'>
          <Pokemon />
        </Route>
        <Route path='/'>
          <Redirect to='/pokemon/bulbasaur'/>
        </Route>
      </Switch>
    </>
  )
}

export default Pokedex