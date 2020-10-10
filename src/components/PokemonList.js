import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import DrawerContext from './context/DrawerContext'

const PokemonListItem = styled.li`
  font-size: 1em;
  margin-top: .25em;
  transition: 0.3sec ease-out;
  
  &:hover {
    color: darkred;
  }

  &::first-child {
    margin-top: 0;
  }
`

const PokemonList = ({ pokemon, showing = true, onClickItem }) => {
  if(!showing) {
    return null
  }

  return (
    <ul>
      {pokemon.map(pokemon => <Link to={`/pokemon/${pokemon.name}`} onClick={onClickItem}><PokemonListItemComponent pokemon={pokemon} key={pokemon.name}>{pokemon.name}</PokemonListItemComponent></Link>)}
    </ul>
  )
}

const PokemonListItemComponent = ({ pokemon, children, onClick }) => {
  return (
    <PokemonListItem onClick={onClick}>{children}</PokemonListItem> 
  )
}

export default PokemonList