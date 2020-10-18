import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import PokemonService from '../PokemonApiService'
import PokemonHeroSection from './PokemonHeroSection'
import PokemonInfoSection from './PokemonInfoSection'

const Pokemon = () => {
  const { id } = useParams()
  const pokemon = useQuery(['pokemon', id], () => PokemonService.getPokemon(id))
  const speciesInfo = useQuery(['species-info', id], () => PokemonService.getSpeciesInfo(id))
  
  if(pokemon.status === 'loading' || speciesInfo.status === 'loading') {
    return null
  }
  
  if(pokemon.status === 'error' || speciesInfo.status === 'error') {
    console.log(pokemon.error)
  }

  return (
    <>
        <PokemonHeroSection pokemon={pokemon.data} speciesInfo={speciesInfo.data} />
        <PokemonInfoSection pokemon={pokemon.data} speciesInfo={speciesInfo.data} />
    </>
  )
}

export default Pokemon