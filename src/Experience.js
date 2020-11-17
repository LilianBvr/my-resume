import {useState} from 'react';

import './css/Experience.css';

const Experience = () => {
  const [activeItem, setActiveItem] = useState(0);

  const prevItem = () => {
    if(activeItem !== 0)
      setActiveItem(activeItem-1);
  }

  const nextItem = () => {
    if(activeItem !== ITEMS.length - 1)
      setActiveItem(activeItem+1);
  }

  return(
    <div className='xp'>
      <h1 className='xp__title'>Experience</h1>
      <div className='xp__content' style={{
        transform: `translateX(-${35.625*activeItem}rem)`
      }}>
        {
          ITEMS.map((item, index) =>(
            <div
              className={`xp__item ${index===activeItem ? 'active' : ''}`}
              key={index}>
                {item.title}
            </div>
          ))
        }
      </div>
      <div className='xp__btn-wrapper'>
          <div className='xp__btn xp__btn-left' onClick={prevItem}>
            <div className='xp__btn__arrow xp__btn__arrow-left'>
              <div className='a'></div>
              <div className='b'></div>
              <div className='c'></div>
            </div>
          </div>
          <div className='xp__btn xp__btn-right' onClick={nextItem}>
            <div className='xp__btn__arrow xp__btn__arrow-right'>
              <div className='a'></div>
              <div className='b'></div>
              <div className='c'></div>
            </div>
          </div>
      </div>
    </div>
  )
}

const ITEMS = [
  {
    title: 'Stages d’observation 3ème',
    desc: '',
    time: ''
  },
  {
    title: 'Agent agricole',
    desc: '',
    time: ''
  },
  {
    title: 'Projet Terminale S',
    desc: '',
    time: ''
  },
  {
    title: 'Equipier FastFood',
    desc: '',
    time: ''
  },
  {
    title: 'Commis de cuisine',
    desc: '',
    time: ''
  },
  {
    title: 'DUT Informatique',
    desc: '',
    time: ''
  },
]

export default Experience;