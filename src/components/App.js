import React from 'react'
import {
  QueryCache,
  ReactQueryCacheProvider
} from 'react-query'
import styled from 'styled-components'
import GlobalStyles from '../globalStyles'
import Pokedex from './Pokedex'

const queryCache = new QueryCache()

function App() {
  console.log('hello?')
  return (
    <>
      <GlobalStyles/>
      <ReactQueryCacheProvider queryCache={queryCache}>
      
        <Pokedex />
      
      </ReactQueryCacheProvider>
    </>
  )
}

export default App
