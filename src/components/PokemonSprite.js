import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import PokemonService from '../PokemonApiService'

const PokemonSprite = ({ pokemon }) => {
  const pokemonData = useQuery(['pokemon', pokemon.name], () => PokemonService.getPokemon(pokemon.name))
  const pokemonSpeciesData = useQuery(['species-info', pokemon.name], () => PokemonService.getSpeciesInfo(pokemon.name))

  return (
    <Link to={`/pokemon/${pokemon.name}`}>
      <li>{pokemon.name}</li>
      {pokemonData.data && <img src={pokemonData && pokemonData.data.sprites.front_default}/>}
    </Link>
  )
}

export default PokemonSprite