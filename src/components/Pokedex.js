import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Pokemon from './Pokemon'

const Pokedex = () => {
  return (
    <>
      <Switch>
        <Route path='/pokemon/:id'>
          <Pokemon />
        </Route>
      </Switch>
    </>
  )
}

export default Pokedex