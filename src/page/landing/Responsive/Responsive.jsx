import React from 'react'
import { Link } from 'react-router-dom'

import Section from '../../../components/UI/Section'
import Container from '../../../components/UI/Container'
import Next from '../../../components/Next'

import './responsive.scss'

const Responsive = () =>
  <Section className='responsive' id='responsive'>
    <Container>
      <h2>Componentes responsivos</h2>

      <p>Antes de iniciar um desenvolvimento de componente, precisamos encontrar e separar os elementos em comum (Mobile, Tablet, Desktop).</p>

      <h3>Desktop First?</h3>
      <p>Nos dias de hoje, o recomendado é ter uma abordagem mobile first.
        Os acessos por dispositivos móveis são cada vez maiores e encontrar um produto ou um serviço deveria ser uma tarefa fácil em celulares.
        Porém quando estamos pensando em responsividade, eu procuro olhar a versão desktop primeiro.
        Ela normalmente possui a variação mais completa do componente pelo simples motivo que ter mais espaço na tela.</p>

      <p>Agora que já encontramos todos os setores em comum do componente, podemos com mais clareza  iniciar o desenvolvimento, passando para o html  as divisões do componente, e usando css para controlá-las. Lembre-se, sempre Mobile First. Precisamos focar a nossa experiência em celulares.</p>

      <p>Exemplos:</p>
      <ul>
        <li><Link to='examples/multicolbox'>MultiColBox</Link></li>
        <li><Link to='examples/card'>Card</Link></li>
        <li><Link to='examples/modal'>Modal</Link></li>
      </ul>

      <Next to='conclusion' />
    </Container>
  </Section>

export default Responsive
