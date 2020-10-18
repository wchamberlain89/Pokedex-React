import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const StatBarInner = styled.div`
  width: ${props => `${props.value / 255 * 100}%`};
  height: 100%;
  background-color: ${ props => props.color };
  border-radius: 40px;
  color: lavender;
`

const StatBarContainer = styled.div`
  height: 25px;
  width: 100%;
  background-color: #F3F3F3;
  border-radius: 40px;
  border: 2px solid ${ props => props.color };
`
const StatBar = ({ value, color }) => {
  console.log('props value', value / 255 * 100)
  return(
    <StatBarContainer color={color}>
      <StatBarInner color={color} value={value}/>
    </StatBarContainer >
  )
}

const PokemonBaseStat = ({ statValue, statName, color }) => {
  return (
    <tr>
      <th style={{width: '20%'}}>{statName}</th>
      <td>
        <div style={{display: 'flex'}}>
          <span style={{marginRight: '10px'}}>{statValue}</span>
          <StatBar value={statValue} color={color} />
        </div>
      </td>
    </tr>
  )
}

const PokemonBaseStats = ({ stats, color }) => {
  return (
    <Card>
      <Card.Title>Base Stats</Card.Title>
      <table style={{width: '100%'}}>
        <tbody>
          {stats.map(stat => <PokemonBaseStat statValue={stat.base_stat} statName={stat.stat.name} color={color} />)}
        </tbody>
      </table>
      {/* OLD SOLUTION 
      <ul>
        {stats.map(stat => <StatBar stat={stat} color={color} />)}
      </ul> */}
    </Card>
  )
}

export default PokemonBaseStats