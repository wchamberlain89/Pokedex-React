import React from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import ErrorMessage from './ErrorMessage'
import PokemonService from '../PokemonApiService'
import PokemonGeneration from './PokemonGeneration'

const Container = styled.ul`
  padding: 2rem .5em 0 .5em;
  font-family: 'Poppins';
  font-weight: 200;
`

const PokemonGenerationsList = () => {
  const { status, data, error } = useQuery('generations', PokemonService.getAllGenerations)
  console.log(data)
  if(status === 'loading') {
    return null
  }

  if(status === 'error') {
    return <ErrorMessage message={error} />
  }

  return (
    <Container>
      {data.results.map( (generation, index) => <PokemonGeneration key={index} id={index + 1} />)}
    </Container>
  )
}

export default PokemonGenerationsList