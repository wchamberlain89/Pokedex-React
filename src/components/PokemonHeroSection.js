import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query' 
import styled from 'styled-components'
import getBackgroundColorByType from '../helpers/getBackgroundColorByType.js'
import PokemonService from '../PokemonApiService'
import PokemonTypeContext from './context/PokemonTypeContext'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top:0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  padding: 40px 40px;
  color: #000;
  transition: 0.3sec ease-out;
  overflow-x: hidden;
  z-index: -100;
  @media screen and (max-width: 1024px) {
    font-size: 80%;
    position: relative;
  }
`

const HeroSpacer = styled.div`
  height: 100vh;
  width: 100vw;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`

const Header = styled.div`
  position: relative;
`

const Image = styled.img`
  position: relative;
  width: 100%;
  max-width: 600px;
`

const ImageBackground = styled.div`
  position: absolute;
  top: -25vh;
  left: -10vw;
  background-color: ${(props) => props.color ? props.color : 'green'};
  width: 70vw;
  height: 70vw;
  border-radius: 50%;
  transition: 1sec ease-out;
`

const ImageContainer = styled.div`
  width: 50%;
  position: absolute;
  max-height: 80vh;
  top: 60vh;
  left: 60%;
  transform: translateY(-50%);
  z-index: -1;
  @media screen and (max-width: 1024px) {
    position: relative;
    top: 0;
    left: 0;
  }
`

const PokemonName = styled.h2`
  font-size: 8em;
  font-weight: 800;
  font-style: italic;
  z-index: 100;
`

const PokemonJapaneseName = styled.h2`
  font-size: 5em;
  color: rgba(0, 0, 0, 0.6);
  position: relative;
  top: -1.25rem;
  right: -5rem;
`

const PokemonNumber = styled.h3`
  font-size: 8em;
  font-weight: 800;
  line-height: 100%;
  color: rgba(0,0,0, 0.29);
  z-index: -10;
`

const PokemonInfoContainer = styled.div`
  display: flex;
  font-size: 1.4em;
  width: 50%;
  font-family: 'Poppins';
  padding-bottom: 15vh;
`

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

const formatPokemonNumber = (number) => {
  const numberArray = number.toString().split('');
  while(numberArray.length < 3) {
    numberArray.unshift(0)
  }
  return numberArray.join('')
}

const PokemonHeroSection = ({ pokemon, speciesInfo }) => {
  const { type, setType, typeColors } = useContext(PokemonTypeContext)
  const PokemonImage = useQuery(['pokemon-hero-image', pokemon.id], () => PokemonService.getPokemonHeroImage(pokemon.id))
  
  React.useEffect(() => {
    setType(pokemon.types[0].type.name)
  }, [ pokemon ])

  if (!typeColors) {
    return null
  }

  // box-shadow: 6px 6px 14px 0 rgba(0, 0, 0, 0.2),
  // -8px -8px 18px 0 rgba(255, 255, 255, 0.55);

  return (
    <>
    <Container style={{backgroundColor: '#FCFCFC' || typeColors.primary}}>
      <Header>
        <PokemonNumber>#{formatPokemonNumber(pokemon.id)}</PokemonNumber>
        <PokemonName>{pokemon.name.toUpperCase()}</PokemonName>
        <PokemonJapaneseName>{speciesInfo.names && speciesInfo.names[0].name}</PokemonJapaneseName>
      </Header>
      <ImageContainer>
        <ImageBackground color={typeColors.secondary}/>
        {PokemonImage.loading ? null : <Image src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}/>}
      </ImageContainer>
      <PokemonInfoContainer>
        <PokemonBio><strong>Bio - </strong> {speciesInfo.flavor_text_entries[0].flavor_text}</PokemonBio>
        <PokemonAttributesContainer>
          <PokemonAttribute><strong>Weight -</strong> {pokemon.weight}</PokemonAttribute>
          <PokemonAttribute><strong>Height -</strong> {pokemon.height}</PokemonAttribute>
          <PokemonAttribute><strong>Type -</strong> {pokemon.types[0].type.name}</PokemonAttribute>
        </PokemonAttributesContainer>
      </PokemonInfoContainer>
    </Container>
    <HeroSpacer/>
    </>
  )
}

export default PokemonHeroSection