import React from 'react'

import Section from '../../../components/UI/Section'
import Container from '../../../components/UI/Container'
import Next from '../../../components/Next'

import './about.scss'

const About = () => {
  return (
    <Section id='about-me' className='about'>
      <Container>
        <div className='card-profile card-plain'>
          <div className='card-avatar'>
            <img alt='me' src='https://avatars2.githubusercontent.com/u/1232344?v=4' />
          </div>
          <div className='card-body'>
            <div className='author'>
              <h4 className='card-title'>André Lopes</h4>
              <h6 className='card-category'>software engineer</h6>
            </div>
            <p className='card-description'>
              Front end engineer na Escale e entusiasta em UX
            </p>
          </div>
          <div className='card-footer'>
            <a href='https://twitter.com/oandrelopes' target='_blank' rel='noopener noreferrer' className='btn-just-icon btn-neutral btn btn-link'>
              <svg class='icon' width='27' height='25' viewBox='0 0 27 25' fill='none' xmlns='http://www.w3.org/2000/svg'><g fill='#fff'><path d='M25.043 8.448c-.712.313-1.498.502-2.263.627.362-.06.9-.706 1.114-.96.33-.398.605-.849.753-1.339.02-.039.033-.084-.007-.117-.047-.02-.08-.007-.121.006-.86.444-1.746.77-2.693 1-.08.019-.134 0-.188-.046-.08-.085-.154-.17-.235-.235a4.652 4.652 0 0 0-3.304-1.09 4.79 4.79 0 0 0-1.893.522c-.591.3-1.115.711-1.531 1.214a4.49 4.49 0 0 0-.914 1.782c-.154.627-.147 1.247-.047 1.88.014.105.007.118-.094.105-3.693-.535-6.762-1.821-9.247-4.577-.107-.117-.167-.117-.255.007-1.088 1.586-.557 4.133.8 5.386.18.17.369.333.57.483-.074.013-.98-.078-1.786-.483-.108-.065-.161-.026-.175.092-.006.17.007.326.027.515.208 1.606 1.357 3.095 2.921 3.676.188.078.39.144.591.176-.356.079-.725.13-1.752.053-.128-.026-.175.039-.128.156.772 2.044 2.43 2.651 3.68 2.99.168.027.336.027.504.066-.007.013-.02.013-.027.026-.41.614-1.847 1.064-2.512 1.293-1.215.41-2.531.594-3.814.476-.208-.026-.249-.026-.302 0-.054.033-.007.078.06.13.262.17.524.314.793.458.812.418 1.665.75 2.551.992 4.58 1.228 9.744.327 13.182-2.997 2.7-2.611 3.647-6.208 3.647-9.812 0-.144.174-.222.275-.294.705-.516 1.262-1.13 1.786-1.815.121-.157.108-.294.108-.346v-.02c.006-.039.02-.02-.074.02z' /><path fill-rule='evenodd' clip-rule='evenodd' d='M10.114 24.197c0-.042.398 0 0 0 0-.021.048 0 0 0zM18.045 6.319c-.026.022-.06.022-.093 0h.093z' /></g></svg>
            </a>
          </div>
        </div>
        <Next to='intro' />
      </Container>
    </Section>
  )
}

export default About
