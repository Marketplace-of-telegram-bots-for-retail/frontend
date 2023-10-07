import React from 'react';
import './PrivacyPolicy.css';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import PrivacyPolicyText from '../PrivacyPolicyText/PrivacyPolicyText';
import { privacyPolicy } from '../../constants/privacyPolicy';

const PrivacyPolicy = () => {
  return (
    <section className='privacy-policy'>
      <BreadCrumbs />
      <h1 className="privacy-policy__title">Политика конфиденциальности</h1>
      <h2 className="privacy-policy__subtitle">«Политика в отношении обработки персональных данных</h2>
      <PrivacyPolicyText policy={privacyPolicy} />
    </section>
  );
};

export default PrivacyPolicy;
