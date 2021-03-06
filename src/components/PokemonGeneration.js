import React, { useState, useContext } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import PokemonList from './PokemonList'
import PokemonService from '../PokemonApiService'
import DrawerContext from './context/DrawerContext'

const Header = styled.h3`
  font-size: 1.25em;
  cursor: pointer;
  transition: 0.3sec ease-out;
  padding: 5px;

  &:hover {
    transform: scale(1.1);
  }
`

const Container = styled.li`
  padding: .3em 0;
`

const PokemonGeneration = ({ id }) => {
  const { drawerClose } = useContext(DrawerContext)
  const [showing, setShowing] = useState(false)
  const { data, status, error } = useQuery(['generation', id], () => PokemonService.getGeneration(id))
  
  if(status === 'loading') {
    return null
  }
  
  if(status === 'error') {
    console.log(error)
  }

  return (
    <Container>
      <Header onClick={() => setShowing(!showing)}>
        {data.main_region.name}
      </Header>
      <PokemonList pokemon={data.pokemon_species.sort((a, b) => a.url - b.url )} onClickItem={drawerClose} showing={showing}/>
    </Container>
  )
}

export default PokemonGeneration