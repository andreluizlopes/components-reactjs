import React, { Fragment } from 'react'

import Section from '../../../components/UI/Section'
import Container from '../../../components/UI/Container'

import Next from '../../../components/Next'

import './conclusion.scss'

const Conclusion = () =>
  <Fragment>
    <Section className='conclusion' id='conclusion'>
      <Container>

        <h4>Mais informações:</h4>

        <ul>
          <li><cite><a href='https://www.youtube.com/watch?v=6WK0JFdTYws' target='_blank' rel='noopener noreferrer' >O que é arquitetura de software em front-end?</a></cite></li>
          <li><cite><a href='https://dmitripavlutin.com/7-architectural-attributes-of-a-reliable-react-component/#11-the-pitfall-of-multiple-responsibilities' target='_blank' rel='noopener noreferrer'>7 Architectural Attributes of a Reliable React Component</a></cite></li>
          <li><cite><a href='https://philipwalton.com/articles/responsive-components-a-solution-to-the-container-queries-problem/' target='_blank' rel='noopener noreferrer'>Responsive Components: a Solution to the Container Queries Problem</a></cite></li>
          <li><cite><a href='https://medium.com/@dan_abramov/youre-missing-the-point-of-react-a20e34a51e1a' target='_blank' rel='noopener noreferrer'>You’re Missing the Point of React</a></cite></li>
        </ul>

        <Next to='the-end' />
      </Container>
    </Section>

    <Section className='the-end' id='the-end'>
      <Container>
        <div className='the-end__content'>
          <iframe src='https://oandrelopes.bitbucket.io/' title='yo' />
          <h2>FIM</h2>
        </div>
      </Container>
    </Section>
  </Fragment>

export default Conclusion
