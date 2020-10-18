import React from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import PokemonService from '../PokemonApiService'
import PokemonTypeContext from './context/PokemonTypeContext'
import PokemonCharacteristics from './PokemonCharacteristics'
import PokemonBaseStats from './PokemonBaseStats'
import PokemonAbilities from './PokemonAbilities'
import PokemonEvolutionChain from './PokemonEvolutionChain'
import PokemonTypeChart from './PokemonTypeChart'

const Container = styled.div`
  background-color: #FCFCFC;
  padding: 150px 40px 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  grid-gap: 40px;
  justify-content: center;

  @media screen and (max-width: 800px){
    grid-template-columns: 1fr;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-top: 40px;
  }
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
      <Grid>
        <Column>
          <PokemonCharacteristics pokemon={pokemon} speciesInfo={speciesInfo} />
          <PokemonAbilities abilites={pokemon.abilities} />
        </Column>
        <Column>
          <PokemonBaseStats color={typeColors && typeColors.primary} stats={pokemon.stats} />
          <PokemonTypeChart types={pokemon.types} />
        </Column>
      </Grid>
        {pokemonEvolutionChainData && <PokemonEvolutionChain style={{marginTop: '40px'}}pokemon={pokemonEvolutionChainData} /> }
    </Container>
  )
}

export default PokemonInfoSection