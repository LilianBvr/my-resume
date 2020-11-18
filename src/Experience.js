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

  const translate = window.innerWidth >= 570 ? 'calc((-35rem - 2vw) *'+activeItem+')' : -100*(activeItem)+'vw';

  return(
    <div className='xp'>
      <h1 className='xp__title'>Experience</h1>
      <div className='xp__timeline'>
        {ITEMS.map((item, index) => (
          <div className={`xp__timeline-item ${index <= activeItem ? 'filled' : ''}`} style={{width: 80/ITEMS.length+'vw'}}></div>
        ))}
      </div>
      <div className='xp__content' style={{'--translate': translate}}>
        {
          ITEMS.map((item, index) =>(
            <div
              className={`xp__item ${index===activeItem ? 'active' : ''}`}
              key={index}>
                <div className='xp__item__title'>{item.title}</div>
                <div className='xp__item__description'>{item.desc}</div>
                <div className='xp__item__time'>{item.time}</div>
            </div>
          ))
        }
      </div>
      <div className='xp__btn-wrapper'>
          <div className={`xp__btn xp__btn-left ${activeItem===0 ? 'disabled' : ''}`} onClick={prevItem}>
            <div className='xp__btn__arrow xp__btn__arrow-left'>
              <div className='a'></div>
              <div className='b'></div>
              <div className='c'></div>
            </div>
          </div>
          <div className={`xp__btn xp__btn-right ${activeItem===ITEMS.length-1 ? 'disabled' : ''}`} onClick={nextItem}>
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
    desc: 'Entreprise Lagoona : location, entretien, réparation de matériel de spectacle. \n\nRégie son de l’Opéra National du Rhin.',
    time: 'Septembre 2016 à juin 2017'
  },
  {
    title: 'Conservatoire de Musique',
    desc: 'Etudiant en Jazz et Musiques Improvisées au conservatoire de Starsbourg.',
    time: 'Depuis Septembre 2017'
  },
  {
    title: 'Agent agricole',
    desc: 'Job d\'été : Poste d\'agent de castration du maïs semence.',
    time: 'Etés 2016 à 2018'
  },
  {
    title: 'Projet Terminale S',
    desc: 'Réalisation de démarches industrielles en équipe destinées à la conception d’un vélo connecté pour personnes à mobilité réduite.',
    time: 'Septembre 2018 à juin 2019'
  },
  {
    title: 'Equipier FastFood',
    desc: 'Job d\'été : Poste d’équipier McDonald’s',
    time: 'Eté 2019'
  },
  {
    title: 'Commis de cuisine',
    desc: 'Job d\'été : Poste de commis de cuisine à la boulangerie Busser de Vendenheim.',
    time: 'Eté 2020'
  },
  {
    title: 'DUT Informatique',
    desc: 'DUT production informatique, IUT Robert Schuman à Illkirch-Graffenstaden.',
    time: 'Septembre 2019 à Juin 2021'
  },
]

export default Experience;