import React from 'react'

import Header from './Header/Header'
import About from './About/About'
import Intro from './Intro/Intro'
import KeepSimple from './KeepSimple'
import Responsibilities from './Responsibilities'
import Container from './Container'
import UIComponents from './UIComponents'
import Responsive from './Responsive'
import Conclusion from './Conclusion'

const Landing = () => {
  return (
    <div>
      <Header />

      <main>
        <About />
        <Intro />
        <KeepSimple />
        <Responsibilities />
        <Container />
        <UIComponents />
        <Responsive />
        <Conclusion />
      </main>
    </div>
  )
}

export default Landing
