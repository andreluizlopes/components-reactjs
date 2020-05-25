import React from 'react'

import './section.scss'

const Section = ({ className = '', id = '', children }) => {
  return (
    <section className={`section ${className}`} id={id}>
      {children}
    </section>
  )
}

export default Section
