import React from 'react'

import Section from '../../../components/UI/Section'
import Container from '../../../components/UI/Container'

import './intro.scss'

const Intro = () =>
  <Section className='intro' id='intro'>
    <Container>
      <p>O que precisamos responder sobre componentes responsivos:</p>
      <ul>
        <li>Qual a responsabilidade do componente?</li>
        <li>Ele será reutilizado?</li>
        <li>Como ele se comportará em diferentes tipos de tela?</li>
      </ul>
      <p>Nos dias de hoje, todos podemos concordar que uma aplicação web precisa ser responsiva.
      Existem várias abordagens na criação de componentes responsivos com o ReactJS.
      Após muitos web componentes feitos aqui na <a href='https://escale.com.br' target='_blank'>escale</a> quero demonstrar na prática, como é simples pensar em uma aplicação responsiva, e dar aos nossos usuários a melhor experiência em qualquer dispositivo.
      </p>

      <a
        href='#keep-simple'
        type='link'
        className='button button--round button--outline-neutral next'>
        <span>▼</span>
      </a>
    </Container>
  </Section>

export default Intro
