import React from 'react';
import './AboutMain.css';
import ImageHello from '../../../images/pic_main-cart.png';

const AboutMain = () => {
  return (
    <section className='content__about about' id='about'>
      <div className='about__container'>
        <h1 className='about__title'>О маркетплейсе</h1>
        <p className='about__subtitle'>Платформа, позволяющая ритейлерам найти и приобрести готовые телеграм-боты или заказать разработку индивидуального бота.</p>
        <ul className='about__list'>
          <li className='about__list-item'>экономия времени и ресурсов</li>
          <li className='about__list-item'>широкий выбор готовых ботов</li>
          <li className='about__list-item'>профессиональная поддержка</li>
        </ul>
      </div>
      <img className='about__image' src={ImageHello} alt='картинка с приветсвием'></img>
    </section>
  );
};

export default AboutMain;
