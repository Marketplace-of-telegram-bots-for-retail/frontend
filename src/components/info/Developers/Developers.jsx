import './Developers.css';
import React from 'react';
import { members } from '../../../constants/memberslist';

const Developers = () => {
  return (
    <section className='content__developers developers' id='developers'>
      <h1 className="developers__heading">Команда разработчиков</h1>
      <div className="developers__container">
        {members.map(({ title, icon, persons }) =>
          <div key={title} className="developers__block">
            <img src={icon} alt="" className="developers__image" />
            <p className="developers__title">{title}</p>
            <ul className="developers__list">
              {persons.map(({ name, linkTitle, link, color }) =>
                <li key={name} className={`developers__person developers__person_type_${color}`}>
                  <p className="developers__person-name">{name}</p>
                  <a href={link} className="developers__person-link" target="_blank" rel="noreferrer">{linkTitle}</a>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Developers;
