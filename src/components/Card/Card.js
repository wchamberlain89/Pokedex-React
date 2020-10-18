import React from 'react'
import * as s from './CardStyles'

const Card = ({ children, ...restProps }) => {
  return (
    <s.Container {...restProps}>
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