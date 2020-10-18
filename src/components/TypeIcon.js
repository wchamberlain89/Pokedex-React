import React from 'react';
import styled from 'styled-components'
import types from '../helpers/types'

export const StyledTypeIcon = styled.img`
  height: 45px;
  margin-right: 10px;
`

const TypeIcon = ({ type, ...restProps }) => {
  const imgName = types.filter(t => t.name === type)[0].icon
  const iconPath = require(`../assets/typeTags/${imgName}`)
  return (
    <StyledTypeIcon {...restProps} src={iconPath} />
  );
};

export default TypeIcon;