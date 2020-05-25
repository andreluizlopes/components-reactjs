import React from 'react'

import Compare, { Item } from '../../../components/UI/Compare'
import Modal from '../../../components/Modal'

const ModalExample = () =>
  <Compare>
    <Item>
      <Modal />
    </Item>
    <Item>
      <Modal />
    </Item>
  </Compare>

export default ModalExample
