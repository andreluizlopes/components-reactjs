import React from 'react'

import Container from '../../../components/UI/Container'
import Next from '../../../components/Next'

import './header.scss'

const Header = () =>
  <header id='header' className='header'>
    <Container>
      <div className='header__content'>
        <h1>Componentes responsivos</h1>
        <h3>Boas práticas com componentes responsivos: react + scss</h3>
        <br />
        <Next to='about-me' />
      </div>
    </Container>

  </header>

export default Header
