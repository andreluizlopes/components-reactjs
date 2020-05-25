import React from 'react'

import Section from '../../../components/UI/Section'
import Container from '../../../components/UI/Container'

import './conclusion.scss'

const Conclusion = () =>
  <Section className='conclusion' id='conclusion'>
    <Container>
      <h2>Conclusion</h2>
      <p>The approaches above can actually be used for any UI development but they lend themselves particularly well to Responsive Web Components due to their reusable and shareable nature.
        If you haven’t checked out Web Components yet I would strongly encourage you to do so. While the full spec is currently only available natively in Chrome and Opera, the other browser vendors aren’t far behind.
        If you’re interesting in learning more about Responsive Web Design, check out our new book, Jump Start Responsive Web Design, written by Chris Ward.</p>

      <h4>Mais infirmações podem ser encontrada em:</h4>
      <ol>
        <li><cite> <a href='https://philipwalton.com/articles/responsive-components-a-solution-to-the-container-queries-problem/' target='_blank'>Responsive Components: a Solution to the Container Queries Problem</a></cite></li>
        <li><cite> <a href='https://www.youtube.com/watch?v=6WK0JFdTYws' target='_blank'>O que é arquitetura de software em front-end?</a></cite></li>
      </ol>
    </Container>
  </Section>

export default Conclusion
