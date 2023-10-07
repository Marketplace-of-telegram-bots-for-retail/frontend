import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import PrivacyPolicyText from '../PrivacyPolicyText/PrivacyPolicyText';
import { privacyPolicy } from '../../constants/privacyPolicy';

const PrivacyPolicy = () => {
  return (
    <section className='privacy-policy'>
      <BreadCrumbs />
      <h1 className='privacy-policy__title'>Политика конфиденциальности</h1>
      <h2 className='privacy-policy__subtitle'>
        «Политика в отношении обработки персональных данных
      </h2>
      <PrivacyPolicyText policy={privacyPolicy} />
      <div className='privacy-policy__buttons-container'>
        <button className="button button_color_transparent" type="button">Распечатать</button>
        <Link to={-1} className="button button_color_blue privacy-policy__link">Назад</Link>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
