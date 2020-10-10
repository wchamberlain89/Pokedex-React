import React from 'react'
import { useQuery } from 'react-query'
import PokemonService from '../PokemonApiService'
import Card from './Card'

const PokemonAbility = ({ ability }) => {
  const abilityInfo = useQuery('ability', () => PokemonService.getAbilityInfo(ability.url))
  
  if(abilityInfo.status === 'loading') {
    return null
  }
  
  return (
    <li>
      <Card.Subtitle>{ability.name}</Card.Subtitle>
      <p>
        {abilityInfo.data['effect_entries'][1].effect}
      </p>
    </li>
  )
}

const PokemonAbilities = ({ abilites }) => {
  return (
    <Card>
      <Card.Title>Abilities</Card.Title>
      <ul>
        {abilites.map(ability => <PokemonAbility key={ability.name} ability={ability.ability}/>)}
      </ul>
    </Card>
  )
}

export default PokemonAbilities