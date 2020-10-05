import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PokemonListItem = styled.li`
  font-size: 1em;
  margin-top: .25em;
  transition: 0.3sec ease-out;
  
  &:hover {
    transform: scale(1.1);
  }

  &::first-child {
    margin-top: 0;
  }
`

const PokemonList = ({ pokemon, showing = true }) => {
  if(!showing) {
    return null
  }

  return (
    <ul>
      {pokemon.map(pokemon => <Link to={`/pokemon/${pokemon.name}`}><PokemonListItem key={pokemon.name}>{pokemon.name}</PokemonListItem></Link>)}
    </ul>
  )
}

export default PokemonList