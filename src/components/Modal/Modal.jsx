import React from 'react'

import { ReactComponent as Headphone } from '../../images/headphone.svg'
import { ReactComponent as Phone } from '../../images/phone.svg'
import { ReactComponent as RingingPhone } from '../../images/ringing-phone.svg'
import { ReactComponent as SpeechBalloon } from '../../images/speech-balloon.svg'
import { ReactComponent as Cart } from '../../images/cart.svg'

import './modal.scss'

const items = [
  { label: 'Comprar Online', Icon: Headphone },
  { label: 'Me Ligue', Icon: Phone },
  { label: 'Ligue Grátis', Icon: RingingPhone },
  { label: 'Já sou Cliente', Icon: SpeechBalloon },
  { label: 'Chat', Icon: Cart }
]

const Modal = () =>
  <div className='overlay'>
    <div className='modal'>
      <div className='modal__structure'>
        <div className='modal__image' />
        <div className='modal__content'>
          <div className='modal__title'><h3>{'Escolha como deseja contratar'}</h3></div>
          <div className='modal__description'>{'Te ajudaremos a encontrar o que você precisa'}</div>
          <div className='modal__buttons'>
            {items.map((item, i) =>
              <button key={i}>
                <item.Icon />
                <span>{item.label}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>

export default Modal
