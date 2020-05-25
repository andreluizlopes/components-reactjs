import React from 'react'

import Section from '../../../components/UI/Section'
import Container from '../../../components/UI/Container'

import './strategy.scss'

const Strategy = () =>
  <Section className='strategy' id='strategy'>
    <Container>
      <h2>Estratégia</h2>

      <p>Antes de iniciar o desenvolvimento do nosso componente, precisamos encontrar e separar os elementos em comum (Mobile, Tablet, Desktop).</p>

      <h3>Desktop First?</h3>
      <p>Nos dias de hoje, o recomendado é ter uma abordagem mobile first.
        Os acessos por dispositivos móveis são cada vez maiores e encontrar um produto ou um serviço deveria ser uma tarefa fácil em celulares.
        Porém quando estamos pensando em responsividade, eu procuro olhar a versão desktop primeiro.
        Ela normalmente possui a variação mais completa do componente pelo simples motivo que ter mais espaço na tela.</p>

      <p>Agora que já encontramos todos os setores em comum do componente, podemos com mais clareza  iniciar o desenvolvimento, passando para o html  as divisões do componente, e usando css para controlá-las. Lembre-se, sempre Mobile First. Precisamos focar a nossa experiência em celulares.</p>

      <a
        href='#conclusion'
        type='link'
        className='button button--round button--outline-neutral next'>
        <span>▼</span>
      </a>
    </Container>
  </Section>

export default Strategy
