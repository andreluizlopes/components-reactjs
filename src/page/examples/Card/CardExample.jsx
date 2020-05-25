import React from 'react'

import Compare, { Item } from '../../../components/UI/Compare'
import Card from '../../../components/Card'

const CardExample = () =>
  <Compare>
    <Item>
      <Card />
    </Item>
    <Item>
      <Card />
    </Item>
  </Compare>

export default CardExample
