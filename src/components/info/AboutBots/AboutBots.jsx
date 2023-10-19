import React from 'react';
import './AboutBots.css';

const AboutBots = () => {
  const colorsBots = [
    '#FAAE1A80',
    '#FF8F6EB2',
    '#00B78B99',
    '#75B2F380'
  ];

  const textBots = [
    'Автоматизирую заказы',
    'Управляю запасами',
    'Персонализирую акции',
    'Улучшаю обслуживание'
  ];

  return (
    <section className='content__about-bots about-bots'>
      <h1 className='about-bots__title'>А что за боты?</h1>
      <div className='about-bots__container'>
        {colorsBots.map((color, i) => (
          <div
            key={i}
            className='about-bots__item card__preview'
            style={{ backgroundColor: color }}
          >
            <p className='about-bots__text card__preview-text'>{textBots[i]}</p>
          </div>
        ))}
        <p className='about-bots__description'>Телеграм-боты — это удобный и эффективный инструмент для ритейла. Они позволяют автоматизировать задачи, привлекать новых клиентов, повышать удовлетворенность клиентов и многое другое.</p>
      </div>
    </section>
  );
};

export default AboutBots;
