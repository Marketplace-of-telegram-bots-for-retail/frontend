import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutMain.css';

const AboutMain = () => {
  const navigate = useNavigate();

  return (
    <section className='content__about about' id='about'>
      <div className='about__container'>
        <h1 className='about__title'>О маркетплейсе</h1>
        <p className='about__subtitle'>
          Платформа, позволяющая ритейлерам найти и приобрести готовые
          телеграм-боты или заказать разработку индивидуального бота.
        </p>
        <ul className='about__list'>
          <li className='about__list-item'>экономия времени и ресурсов</li>
          <li className='about__list-item'>широкий выбор готовых ботов</li>
          <li className='about__list-item'>профессиональная поддержка</li>
        </ul>
        <button
          type='button'
          className='about__link'
          onClick={() => navigate('/', { replace: true })}
        >
          В каталог
        </button>
      </div>
      <div className='about__wrapper-greetind'>
        <div className='about__greetind'>hello</div>
      </div>
    </section>
  );
};

export default AboutMain;
