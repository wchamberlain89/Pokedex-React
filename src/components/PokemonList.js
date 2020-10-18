import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import DrawerContext from './context/DrawerContext'
import { useQuery, queryCache } from 'react-query'
import PokemonService from '../PokemonApiService'
import Card from './Card'

const PokemonListItem = styled.li`
  font-size: 1em;
  margin-top: .25em;
  transition: 0.3sec ease-out;
  min-width: 100px;
  min-height: 100px;

  &:hover {
    color: darkred;
  }

  &::first-child {
    margin-top: 0;
  }
`

const StyledPokemonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const PokemonList = ({ pokemon, showing = true, onClickItem }) => {
  if(!showing) {
    return null
  }

  return (
    <StyledPokemonList>
      {pokemon.map(pokemon => <Link to={`/pokemon/${pokemon.name}`} onClick={onClickItem}><PokemonListItemComponent pokemon={pokemon} key={pokemon.name}/></Link>)}
    </StyledPokemonList>
  )
}

const PokemonListItemComponent = ({ pokemon, children, onClick }) => {
  const pokemonData = useQuery(['pokemon', pokemon.name], () => PokemonService.getPokemon(pokemon.name))
  const speciesInfo = useQuery(['species-info', pokemon.name], () => PokemonService.getSpeciesInfo(pokemon.name))
  const prefetchImage = async (id) => {
    console.log('prefetching Image with id', id)
    await queryCache.prefetchQuery(['pokemon-hero-image', id], () => PokemonService.getPokemonHeroImage(id))
  }
  if(pokemonData.status === 'loading') {
    return (
      <PokemonListItem onClick={onClick}>{pokemon.name}</PokemonListItem> 
    )
  }
  
  return (
    <PokemonListItem onMouseEnter={() => prefetchImage(pokemonData.data.id)} onClick={onClick}>
      <Card>
        <div>{pokemon.name}</div>
        <img src={pokemonData.data.sprites.front_default}/>
      </Card>
    </PokemonListItem> 
  )

}

export default PokemonList