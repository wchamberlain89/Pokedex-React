import React, { useState } from 'react';
import PokemonTypeContext from './PokemonTypeContext'
import getBackgroundColorByType from '../../helpers/getBackgroundColorByType.js'

const PokemonTypeProvider = ({ children }) => {
  const [ type, setType ] = useState(
    {
      name: '',
      colors: {}
    }
  );
  const [typeColors, setTypeColors] = useState()

  React.useEffect( () => {
    const typeColors = getBackgroundColorByType(type)
    setTypeColors(typeColors)
  }, [type])

  return (
    <PokemonTypeContext.Provider value={{ type, setType, typeColors }}>
      {children}
    </PokemonTypeContext.Provider>
  )
}

export default PokemonTypeProvider