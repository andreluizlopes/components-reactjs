import React from 'react'

import Section from '../../../components/UI/Section'
import Container from '../../../components/UI/Container'
import Next from '../../../components/Next'

import './rules.scss'

const Rules = () =>
  <Section className='rules' id='rules'>
    <Container>
      <h2>Components x Components UI</h2>

      <ul>
        <li>Componentes não devem ter regras de estrutura</li>
        <li>Devemos ter componentes de estrutura, que apliquem as regras de largura, posicionamento e espaçamento na interface.</li>
      </ul>

      <p>
        O que é importante para um componente se tornar reutilizável?
        Devemos ter componentes e componentes de estrutura.
      </p>
      <p>Um componente que será reutilizado por outros projetos não deveria se preocupar com a estrutura das páginas, e nem regras de interface como largura, paddings e margens externas.</p>

      <Next to='strategy' />
    </Container>
  </Section>

export default Rules
