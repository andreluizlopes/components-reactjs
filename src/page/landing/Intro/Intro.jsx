import React from 'react'

import Section from '../../../components/UI/Section'
import Container from '../../../components/UI/Container'
import Next from '../../../components/Next'

import './intro.scss'

const Intro = () =>
  <Section className='intro' id='intro'>
    <Container>
      <p>O que precisamos responder para ter bons componentes:</p>
      <ul>
        <li>Componentes precisam ser complexos?</li>
        <li>Qual a responsabilidade do componente?</li>
        <li>Ele será reutilizado?</li>
        <li>Como ele se comportará em diferentes tipos de tela?</li>
      </ul>
      <p>Atualmente, todos podemos concordar que uma aplicação web precisa ser escalável e responsiva, e existem várias abordagens na criação de componentes com o ReactJS.</p>
      <br />
      <p>Após muitos componentes feitos aqui na <a href='https://escale.com.br' target='_blank' rel='noopener noreferrer'>escale</a>, vamos conversar, sobre como pensar em componentes elegantes, e dar aos nossos usuários a melhor experiência.</p>

      <Next to='keep-simple' />
    </Container>
  </Section>

export default Intro
