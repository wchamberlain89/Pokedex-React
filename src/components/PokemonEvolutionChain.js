import React from 'react'
import PokemonSprite from './PokemonSprite'
import Card from './Card'

const PokemonEvolutionChain = ({ pokemon }) => {
  return (
    <Card style={{marginTop: '40px', display: 'flex'}}>
      {pokemon.map(pokemon => <PokemonSprite key={pokemon.name} pokemon={pokemon} /> )}
    </Card>
  )
}

export default PokemonEvolutionChain

