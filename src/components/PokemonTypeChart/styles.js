import React from 'react'
import styled from 'styled-components'


export const ResistancesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-column-gap: 80px;
  grid-row-gap: 10px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 125px);
    grid-column-gap: 50px;
  }
`

export const ResistanceContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.125em;
  @media screen and (max-width: 768px) {
    font-size: 90%;
  }
`

export const ResistanceValue = styled.span`
  font-size: 1.125em;
`