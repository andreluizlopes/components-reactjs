import React from 'react'

import Section from '../../../components/UI/Section'
import Container from '../../../components/UI/Container'

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
            <p className='card-description text-center'>
              front end engineer e entusiasta em UX
            </p>
          </div>
          <div className='text-center card-footer'>
            <a href='#pablo' className='btn-just-icon btn-neutral btn btn-link'>
              <i className='fa fa-twitter' />
            </a>
            <a href='#pablo' className='btn-just-icon btn-neutral ml-1 btn btn-link'>
              <i className='fa fa-google-plus' />
            </a>
            <a href='#pablo' className='btn-just-icon btn-neutral ml-1 btn btn-link'>
              <i className='fa fa-linkedin' />
            </a>
          </div>
        </div>

        <a
          href='#intro'
          type='link'
          className='button button--round button--outline-neutral next'>
          <span>▼</span>
        </a>
      </Container>
    </Section>
  )
}

export default About
