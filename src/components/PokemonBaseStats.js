import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const StatBarInner = styled.div`
  width: ${props => `${props.value / 155 * 100}%`};
  height: 100%;
  background-color: ${ props => props.color };
  border-radius: 40px;
  color: lavender;
`

const StatBarContainer = styled.div`
  height: 15px;
  width: 33.3333%;
  background-color: #F3F3F3;
  border-radius: 40px;
`
const StatBar = ({ stat, color }) => {
  return(
    <li>
      <span>
        {stat.base_stat} - {stat.stat.name}
      </span>
      <StatBarContainer>
        <StatBarInner color={color} value={stat.base_stat}/>
      </StatBarContainer>
    </li>
  )
}

const PokemonBaseStats = ({ stats, color }) => {
  return (
    <Card>
      <Card.Title>Base Stats</Card.Title>
      <ul>
        {stats.map(stat => <StatBar stat={stat} color={color} />)}
      </ul>
    </Card>
  )
}

export default PokemonBaseStats