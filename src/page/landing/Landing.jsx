import React from 'react'

import Header from './Header/Header'
import About from './About/About'
import Intro from './Intro/Intro'
import KeepSimple from './KeepSimple'
import Rules from './Rules'
import Strategy from './Strategy'
import Conclusion from './Conclusion'

const Landing = () => {
  return (
    <div>
      <Header />

      <main>
        <About />
        <Intro />
        <KeepSimple />
        <Rules />
        <Strategy />
        <Conclusion />
      </main>
    </div>
  )
}

export default Landing
