import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Pokemon from './Pokemon'
import PokemonGenerationsList from './PokemonGenerationsList'

const PokedexContainer = styled.div`
  display: flex;
  height: 100vh;
`

const Pokedex = () => {
  console.log('hellooooo?')
  return (
    <PokedexContainer>
      <PokemonGenerationsList />
      <Switch>
        <Route path='/pokemon/:id'>
          <Pokemon />
        </Route>
      </Switch>
    </PokedexContainer>
  )
}

export default Pokedex