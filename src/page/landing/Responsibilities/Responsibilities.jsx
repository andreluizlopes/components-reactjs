import React from 'react'

import Section from '../../../components/UI/Section'
import Container from '../../../components/UI/Container'
import Next from '../../../components/Next'

import SRPImage from '../../../images/single-responsibility.jpeg'
import WeatherImage from './weather.png'
import WeatherFetchImage from './weather-fetch.png'

import './responsibilities.scss'

const Responsibilities = () =>
  <Section className='responsibilities' id='responsibilities'>
    <Container>
      <h2>Responsabilidades</h2>

      <p>Uma abordagem comum quando estamos iniciando um projeto, por não ter visão de todos os casos de usabilidade e de regras de negócio, é desenvolver componentes com múltiplas responsabilidades.</p>

      <blockquote className='blockquote'>
        <p>Essa estrutura ingênua é fácil de codificar no começo. As dificuldades aparecerão nas modificações posteriores, à medida que o aplicativo cresce e se torna mais complexo.</p>
        <cite title='Source Title'>Dmitri Pavlutin</cite>
      </blockquote>

      <h3>Single responsibility principle (SRP)</h3>

      <img src={SRPImage} alt='canivete' />

      <p>Princípio de responsabilidade única, é quando o componente possui apenas uma responsabilidade, ou seja, existe apenas uma razão para alterá-lo.
      Se um componente tem múltiplas responsabilidades, e você precisar alterar uma responsabilidade que pode ter influência nas outras, causando problemas colaterais imprevistos.
      </p>

      <p>Exemplo: um componente Weather que faz uma solicitação HTTP para um servidor especializado para obter o clima atual.</p>

      <img src={WeatherImage} alt='Weather componente' />

      <p>Qual o problema?
        <br /> O componente Weather tem 2 razões para mudar:
      </p>

      <ul>
        <li>Buscar lógica no useEffect: a URL do servidor ou o formato de resposta podem ser alterados</li>
        <li>Visualização da interface: a maneira como o componente exibe o clima pode mudar várias vezes</li>
      </ul>

      <p>Solução: componente WeatherFetch</p>

      <img src={WeatherFetchImage} alt='WeatherFetch component' />

      <Next to='container' />
    </Container>
  </Section>

export default Responsibilities
