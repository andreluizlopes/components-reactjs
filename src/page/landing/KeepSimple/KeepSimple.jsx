import React from 'react'

import Section from '../../../components/UI/Section'
import Container from '../../../components/UI/Container'

import './keep-simple.scss'

const KeepSimple = () =>
  <Section className='keep-simple' id='keep-simple'>
    <Container>
      <h2>Simples é melhor</h2>

      <blockquote className='blockquote'>
        <p>As vezes é melhor repetir, do que criar um componente super inteligente.</p>
        <cite title='Source Title'>Andrea Zambrana</cite>
      </blockquote>

      <p>Para evitar abstrações precoces e criar um componente com muita lógica para atender todos os cenários previstos, às vezes é melhor repetir e duplicar um componente.</p>
      <p>Um componente muito complexo custa caro, porque é difícil pensar em todos os cenários, e é difícil dar manutenção.</p>

      <a
        href='#rules'
        type='link'
        className='button button--round button--outline-neutral next'>
        <span>▼</span>
      </a>
    </Container>
  </Section>

export default KeepSimple
