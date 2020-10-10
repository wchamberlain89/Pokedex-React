import React from 'react'
import * as s from './CardStyles'

const Card = ({ children }) => {
  return (
    <s.Container>
      { children }
    </s.Container>
  )
}

Card.Title = ({ children }) => {
  return (
    <s.Title>
      { children }
    </s.Title>
  )
}

Card.Subtitle = ({ children }) => {
  return (
    <s.Subtitle>
      { children }
    </s.Subtitle>
  )
}

export default Card