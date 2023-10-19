import './SellerInfo.css';
import React from 'react';
import { steps } from '../../constants/steps';
import developer from '../../images/developer.png';
import banner_fig from '../../images/banner_fig.png';
import banner_nums from '../../images/banner_nums.png';
import banner_icon from '../../images/banner_icon.png';

const SellerInfo = () => {
  const handleClick = () => {
    console.log('Открытие модального окна с регистрацией');
  };

  return (
    <section className="seller">
      <div className="seller__promo">
        <div className="seller__info">
          <h1 className="seller__heading">Стать продавцом телеграм-ботов? Легко!</h1>
          <p className="seller__text">Вы на платформе, позволяющей разработчикам продавать готовых телеграм-ботов или осуществлять заказную разработку индивидуального бота.</p>
          <button type="button" onClick={handleClick} className="seller__button">Стать продавцом</button>
        </div>
        <img src={developer} alt="Счастливый человек, которым вы можете стать" className="seller__image" />
      </div>
      <ul className="seller__steps">
        {steps.map(({ title, text, number, image }) => (
          <li key={number} className="seller__step">
            <div className="seller__step-info">
              <p className="seller__step-title">{title}</p>
              <p className="seller__step-text">{text}</p>
            </div>
            <img src={image} alt="" className={`seller__step-picture seller__step-picture_type_${number}`} />
          </li>
        ))}
      </ul>
      <div>
        <div className="seller__banner">
          <p className="seller__banner-title">Комиссия за продажу готового бота</p>
          <div className="seller__banner-items">
            <div className="seller__banner-illustrations">
              {/* <p className="seller__banner-nums">5-10%</p> */}
              <img className="seller__banner-nums" src={banner_nums} alt="" />
              <img src={banner_fig} alt="Голубой эллипс" className="seller__banner-figure" />
            </div>
            <img src={banner_icon} alt="Изображение милого бота" className="seller__banner-icon" />
          </div>
        </div>
        <p className="seller__more-text">
          *Подробную информацию можно прочитать в
          <a href="/" className="seller__link"> Договоре-оферте</a>
        </p>
      </div>
    </section>
  );
};

export default SellerInfo;
