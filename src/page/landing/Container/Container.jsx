import React from 'react'

import Section from '../../../components/UI/Section'
import Container from '../../../components/UI/Container'
import Next from '../../../components/Next'

import ContainerImage from './container-layout.png'
import PrismicImage from './layout-prismic.jpg'
import LayoutImage from './layout.png'
import HomeImage from './home.png'

import './container.scss'

const ContainerExample = () =>
  <Section className='container-example' id='container'>
    <Container>
      <h2>Container</h2>

      <p>Containers, também podem ser chamados de "composable components", e servem para juntar pequenos componentes. No nosso caso, como estamos trabalhando com portais, eles se tornam muito úteis, pois podemos notar componentes em comum em quase todas as páginas, como Header, Menu e Footer.</p>
      <br />
      <p>Um dos erros mais comuns é o código não ser consistente entre design e o CMS (ou regras de negócio), o que torna o entendimento difícil e a manutenção complexa.</p>
      <br />
      <p>Exemplo: container Layout que irá juntar o conteúdo de uma página com Header, Menu e Footer.</p>

      <img src={ContainerImage} alt='ContainerImage' />

      <p>CMS (Prismic):</p>

      <img src={PrismicImage} alt='PrismicImage' />

      <p>Código do container Layout:</p>

      <img src={LayoutImage} alt='LayoutImage' />

      <p>Código da página utilizando o Layout:</p>

      <img src={HomeImage} alt='HomeImage' />

      <Next to='ui-components' />
    </Container>
  </Section>

export default ContainerExample
