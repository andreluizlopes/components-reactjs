import React from 'react'

import './card.scss'

const Card = () => {
  return (
    <div className='card'>
      <div className='card__figure'>
        <figure className='card__image' />
      </div>
      <div className='card__body'>
        <h3 className='card__title'>Card title</h3>
        <p>A basic card component with an image, title, description, and call to action. By default, the image is on top and full-width, but inside larger containers the image is positioned on the left with the rest of the content beside it.</p>
      </div>
    </div>
  )
}

export default Card
