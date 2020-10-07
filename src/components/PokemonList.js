import React from 'react'
import { useQuery } from 'react-query'
import PokemonService from '../PokemonApiService'
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

const PokemonListItemComponent = ({pokemon, children}) => {
  const pokemonData = useQuery(['pokemon', pokemon.name], () => PokemonService.getPokemon(pokemon.name))
  const pokemonSpeciesData = useQuery(['species-info', pokemon.name], () => PokemonService.getSpeciesInfo(pokemon.name))
  
  return (
    <PokemonListItem>{children}</PokemonListItem> 
  )
}

export default PokemonList