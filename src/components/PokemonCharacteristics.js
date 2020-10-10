import React from 'react'
import Card from './Card'

const Characteristic = ({ value, label }) => {
  return (
    <tr>
      <th>{label}</th>
      <td>{value}</td>
    </tr>
  )
}

const Characteristics = ({ pokemon, speciesInfo }) => {
  return (
    <Card>
      <Card.Title>Characteristics</Card.Title>
      <table>
        <tbody>
          <Characteristic value={'Mantis Pokemon'} label={'Species'}/>
          <Characteristic value={'199lbs'} label={'Weight'}/>
          <Characteristic value={'4\'6"'} label={'Height'}/>
          <Characteristic value={212} label={'National №'}/>
          <Characteristic value={'Bug / Steel'} label={'Types'}/>
          <Card.Subtitle>Breeding</Card.Subtitle>
          <Characteristic value={70} label={'Growth rate'}/>
          <Characteristic value={'50% Male / 50% Female'} label={'Gender'}/>
          <Characteristic value={'Bug'} label={'Egg Groups'}/>
          <Characteristic value={22} label={'Egg Cycles'}/>
          <Card.Subtitle>Training</Card.Subtitle>
          <Characteristic value={175} label={'Base EXP Yield'}/>
          <Characteristic value={'2 ATK'} label={'EV Yield'}/>
          <Characteristic value={25} label={'Catch Rate'}/>
          <Characteristic value={70} label={'Base Friendship'}/>
        </tbody>
      </table>
    </Card>
  )
}

export default Characteristics