import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import PokemonService from '../PokemonApiService'
import getBackgroundColorByType from '../helpers/getBackgroundColorByType.js'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  padding: 40px 40px;
  color: #FEFEFE;
  transition: 0.3sec ease-out;
  overflow-x: hidden;
  z-index: -10;
`

const Header = styled.div`
  position: relative;
`

const Image = styled.img`
  position: relative;
  width: 100%;
  max-width: 700px;
`

const ImageBackground = styled.div`
  position: absolute;
  top: 0;
  left: -10%;
  background-color: ${(props) => props.color ? props.color : 'green'};
  width: 100%;
  height: 100%;
  border-radius: 50%;
`

const ImageContainer = styled.div`
  width: 50%;
  position: absolute;
  max-height: 80vh;
  top: 60vh;
  left: 50%;
  transform: translateY(-50%);
  z-index: -1;
`

const PokemonName = styled.h2`
  font-size: 10.5em;
  font-weight: 800;
  font-style: italic;
  z-index: 100;
`

const PokemonJapaneseName = styled.h2`
  font-size: 5em;
  color: rgba(255, 255, 255, 0.6);
  position: relative;
  top: -1.25rem;
  right: -5rem;
`

const PokemonNumber = styled.h3`
  font-size: 8em;
  font-weight: 800;
  line-height: 100%;
  color: rgba(255,255,255, 0.29);
  z-index: -10;
`

const PokemonInfoContainer = styled.div`
  display: flex;
  font-size: 1.4em;
  width: 50%;
  font-family: 'Poppins'

  span {
    font-family: 'Roboto Slab'
  }
`;

const PokemonAttributesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  span:first-child {
    margin-top: 0;
  }
`
const PokemonAttribute = styled.span`
  margin-top: .625em;
`

const PokemonBio = styled.p`
  width: 40%;
  margin-left: 2rem;
  line-height: 162.5%;
  margin-top: calc((1 - 1.625) * 0.5em);
`

const Pokemon = () => {
  const { id } = useParams()
  const { data, error, status } = useQuery(['pokemon', id], () => PokemonService.getPokemon(id))
  const speciesInfo = useQuery(['species-info', id], () => PokemonService.getSpeciesInfo(id))
  const pokemon = data;

  const formatPokemonNumber = (number) => {
    const numberArray = number.toString().split('');
    while(numberArray.length < 3) {
      numberArray.unshift(0)
    }
    return numberArray.join('')
  }
  
  if(status === 'loading' || speciesInfo.status === 'loading') {
    return null
  }
  
  if(status === 'error') {
    console.log(error)
  }
  
  const typeColors = getBackgroundColorByType(pokemon.types[0].type.name)
  console.log(typeColors)
  return (
    <Container style={{backgroundColor: typeColors.primary}}>
      <Header>
        <PokemonNumber>#{formatPokemonNumber(pokemon.id)}</PokemonNumber>
        <PokemonName>{pokemon.name.toUpperCase()}</PokemonName>
        <PokemonJapaneseName>{speciesInfo.data.names && speciesInfo.data.names[0].name}</PokemonJapaneseName>
      </Header>
      <PokemonInfoContainer>
        <PokemonBio><strong>Bio - </strong> Though it's body is slim, Scizor has tremendous attacking power. Even Scizor's muscles are made of steel.</PokemonBio>
        <PokemonAttributesContainer>
          <PokemonAttribute><strong>Weight -</strong> {pokemon.weight}</PokemonAttribute>
          <PokemonAttribute><strong>Height -</strong> {pokemon.height}</PokemonAttribute>
          <PokemonAttribute><strong>Type -</strong> {pokemon.types[0].type.name}</PokemonAttribute>
        </PokemonAttributesContainer>
      </PokemonInfoContainer>
      <ImageContainer>
        <ImageBackground color={typeColors.secondary}/>
        <Image src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}/>
      </ImageContainer>
    </Container>
  )
}

export default Pokemon