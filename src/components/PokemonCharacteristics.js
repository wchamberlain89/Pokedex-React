import React from 'react'
import Card from './Card'
import TypeIcon from './TypeIcon'

const Characteristic = ({ value, label }) => {
  return (
    <tr>
      <th>{label}</th>
      <td>{value}</td>
    </tr>
  )
}

const Characteristics = ({ pokemon, speciesInfo }) => {
  const species = speciesInfo.genera.filter(genus => genus.language.name === 'en')[0]
  
  return (
    <Card>
      <Card.Title>Characteristics</Card.Title>
      <table>
        <tbody>
          <Card.Subtitle>General</Card.Subtitle>
          <Characteristic value={species.genus} label={'Species'}/>
          <Characteristic value={`${pokemon.weight}lbs`} label={'Weight'}/>
          <Characteristic value={`${Math.floor(pokemon.height / 12)}'${pokemon.height % 12}"`} label={'Height'}/>
          <Characteristic value={speciesInfo.pokedex_numbers.find(entry => entry.pokedex.name === 'national').entry_number} label={'National №'}/>
          <Characteristic 
            value={
              <>
                {pokemon.types.map(type => <TypeIcon type={type.type.name}/>)}
              </>
            }
            label={'Types'}/>
          <Card.Subtitle>Breeding</Card.Subtitle>
          <Characteristic value={speciesInfo.growth_rate.name} label={'Growth rate'}/>
          <Characteristic value={'50% Male / 50% Female'} label={'Gender'}/>
          <Characteristic value={speciesInfo.egg_groups.map((group, index) => {
            if(index > 0) {
            return <span> / {group.name}</span>
            }
            return <span>{group.name}</span>
          })} label={'Egg Groups'}/>
          <Characteristic value={speciesInfo.hatch_counter} label={'Egg Cycles'}/>
          <Card.Subtitle>Training</Card.Subtitle>
          <Characteristic value={pokemon.base_experience} label={'Base EXP Yield'}/>
          <Characteristic value={pokemon.stats.map((stat, index) => {
            if(stat.effort > 0) {
              if(index < 0) {
                return <span> / {stat.effort} {stat.stat.name}</span>
              } else {
                return <span> {stat.effort} {stat.stat.name}</span>
              } 
            }
          })} label={'EV Yield'}/>
          <Characteristic value={`${Math.floor(speciesInfo.capture_rate / 255 * 100)}%`} label={'Catch Rate'}/>
          <Characteristic value={speciesInfo.base_happiness} label={'Base Friendship'}/>
        </tbody>
      </table>
    </Card>
  )
}

export default Characteristics