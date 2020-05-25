import React from 'react'
import { Link } from 'react-scroll'

const Next = ({ to }) =>
  <Link
    to={to}
    spy
    smooth
    duration={500}
    type='link'
    className='button button--round button--outline-neutral next'>
    <span>▼</span>
  </Link>

export default Next
