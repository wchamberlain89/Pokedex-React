import React, { useContext } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import PokemonService from '../PokemonApiService'
import PokemonHeroSection from './PokemonHeroSection'
import PokemonInfoSection from './PokemonInfoSection'
import PokemonTypeContext from './context/PokemonTypeContext'

const Pokemon = () => {
  const { id } = useParams()
  const { data, error, status } = useQuery(['pokemon', id], () => PokemonService.getPokemon(id))
  const speciesInfo = useQuery(['species-info', id], () => PokemonService.getSpeciesInfo(id))
  const pokemon = data;

  
  if(status === 'loading' || speciesInfo.status === 'loading') {
    return null
  }
  
  if(status === 'error') {
    console.log(error)
  }



  return (
    <>
        <PokemonHeroSection pokemon={pokemon} speciesInfo={speciesInfo.data} />
        <PokemonInfoSection pokemon={pokemon} speciesInfo={speciesInfo.data} />
    </>
  )
}

export default Pokemon