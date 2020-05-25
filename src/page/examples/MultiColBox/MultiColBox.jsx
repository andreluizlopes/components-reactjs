import React from 'react'

import Compare, { Item } from '../../../components/UI/Compare'
import MultiColBox from '../../../components/MultiColBox'

const MultiColBoxExample = () =>
  <Compare>
    <Item>
      <MultiColBox />
    </Item>
    <Item>
      <MultiColBox />
    </Item>
  </Compare>

export default MultiColBoxExample
