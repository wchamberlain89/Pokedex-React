import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import PokemonService from '../PokemonApiService'

const Container = styled.div`
  min-height: 100vh;
`

const PokemonBaseStat = ({ stat }) => {
  return (
    <li>
      {stat.base_stat} - {stat.stat.name}
    </li>
  )
}

const PokemonBaseStats = ({ stats }) => {
  return (
    <ul>
      {stats.map(stat => <PokemonBaseStat stat={stat} />)}
    </ul>
  )
}

const PokemonAbility = ({ ability }) => {
  const abilityInfo = useQuery('ability', () => PokemonService.getAbilityInfo(ability.url))
  
  if(abilityInfo.status === 'loading') {
    return null
  }

  return (
    !abilityInfo.loading && 
    <li>
      {ability.name} - {abilityInfo.data['effect_entries'][1].effect}
    </li>
  )
}

const PokemonAbilities = ({ abilites }) => {
  return (
    <ul>
      {abilites.map(ability => <PokemonAbility key={ability.name} ability={ability.ability}/>)}
    </ul>
  )
}

const usePokemonEvolutionChain = (evolutionChainURL) => {
  const pokemonEvolutionChain = []
  const evolutionChain = useQuery('evolutionChain', () => PokemonService.getEvolutionChain(evolutionChainURL))
  
  if(evolutionChain.status === 'loading') {
    return null
  }
  let evolutionChainData = evolutionChain.data.chain
  
  while(!!evolutionChainData && evolutionChainData.hasOwnProperty('evolves_to')) {
    
    pokemonEvolutionChain.push({
      name: evolutionChainData.species.name,
      url: evolutionChainData.species.url,
    })

    evolutionChainData = evolutionChainData['evolves_to'][0]
  }

  return pokemonEvolutionChain
}

const PokemonEvolutionChain = ({ pokemon }) => {
  return (
    pokemon ? pokemon.map(pokemon => <PokemonSprite key={pokemon.name} pokemon={pokemon} /> ) : null
  )
}

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

const PokemonInfoSection = ({ pokemon, speciesInfo }) => {
  const pokemonEvolutionChainData = usePokemonEvolutionChain(speciesInfo.evolution_chain.url)

  return (
    <Container>
      <PokemonBaseStats stats={pokemon.stats} />
      <PokemonAbilities abilites={pokemon.abilities} />
      <PokemonEvolutionChain pokemon={pokemonEvolutionChainData} />
    </Container>
  )
}

export default PokemonInfoSection