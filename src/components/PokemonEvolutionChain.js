import React from 'react'
import PokemonSprite from './PokemonSprite'
import Card from './Card'

const PokemonEvolutionChain = ({ pokemon }) => {
  return (
    <Card>
      {pokemon.map(pokemon => <PokemonSprite key={pokemon.name} pokemon={pokemon} /> )}
    </Card>
  )
}

export default PokemonEvolutionChain

