import React from 'react'
import { useQuery } from 'react-query'
import PokemonService from '../../PokemonApiService'
import typesInfo from '../../helpers/types'
import * as S from './styles'
import Card from '../Card'
import TypeIcon from '../TypeIcon'

const PokemonResistance = ({ name, icon, value }) => {
  return (
    <S.ResistanceContainer>
      <S.ResistanceValue>x{value}</S.ResistanceValue>
      <TypeIcon type={name}/>
    </S.ResistanceContainer>
  )
}

const PokemonTypeChart = ({ types }) => {
  const primaryTypeUrl = types[0].type.url
  const primaryType = useQuery(['type', primaryTypeUrl], () => PokemonService.getTypeInfo(primaryTypeUrl))
  const secondaryTypeUrl = types[1] ? types[1].type.url : null
  const secondaryType = useQuery(['type', secondaryTypeUrl], () => PokemonService.getTypeInfo(secondaryTypeUrl))

  if(primaryType.status === 'loading') {
    return null
  }

  const checkResistance = (pokemonType ,incomingDamageType) => {
    if(pokemonType.data.damage_relations.double_damage_from.some(doubleDamageType => doubleDamageType.name === incomingDamageType)) {
      return 2
    } else if(pokemonType.data.damage_relations.half_damage_from.some(halfDamageType => halfDamageType.name === incomingDamageType)) {
      return .5
    } else if(pokemonType.data.damage_relations.no_damage_from.some(noDamageType => noDamageType.name === incomingDamageType)) {
      return 0
    }
    
    else {
      return 1
    }
  }

  const getResistanceTotal = (incomingDamageType /*psychic*/) => {
    let output = 1;
    output *= checkResistance(primaryType, incomingDamageType)
    secondaryType.data ? output *= checkResistance(secondaryType, incomingDamageType) : output *= 1
    return output;
  }

  return (
    <Card style={{ marginTop: '40px' }}>
      <Card.Title>Resistances</Card.Title>
        <S.ResistancesContainer>
          {
            typesInfo.map(type => {
              const resistanceValue = getResistanceTotal(type.name)
              return <PokemonResistance name={type.name} value={resistanceValue}/>
            })
          }
        </S.ResistancesContainer>
    </Card>
  );
};

export default PokemonTypeChart;