import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import PokemonService from '../PokemonApiService'
import PokemonTypeContext from './context/PokemonTypeContext'
import PokemonCharacteristics from './PokemonCharacteristics'
import PokemonBaseStats from './PokemonBaseStats'
import PokemonAbilities from './PokemonAbilities'
import PokemonEvolutionChain from './PokemonEvolutionChain'
import Card from './Card'

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #FCFCFC;
  padding: 150px 40px 0 40px;
`

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

const PokemonInfoSection = ({ pokemon, speciesInfo }) => {
  const pokemonEvolutionChainData = usePokemonEvolutionChain(speciesInfo.evolution_chain.url)
  const { typeColors } = React.useContext(PokemonTypeContext)
  console.log(typeColors && typeColors.primary, "istype")
  return (
    <Container>
      <PokemonCharacteristics pokemon={pokemon} speciesInfo={speciesInfo} />
      <PokemonBaseStats color={typeColors && typeColors.primary} stats={pokemon.stats} />
      <PokemonAbilities abilites={pokemon.abilities} />
      {pokemonEvolutionChainData && <PokemonEvolutionChain pokemon={pokemonEvolutionChainData} /> }
    </Container>
  )
}

export default PokemonInfoSection