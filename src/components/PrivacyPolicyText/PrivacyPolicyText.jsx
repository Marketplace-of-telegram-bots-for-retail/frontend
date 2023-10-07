import React from 'react';
import './PrivacyPolicyText.css';
import { PRIVACY_POLICY_URL } from '../../utils/constants';

const PrivacyPolicyText = ({ policy }) => {
  const markUrl = (item) => {
    if (item.includes(PRIVACY_POLICY_URL)) {
      const parts = item.split(new RegExp(`(${PRIVACY_POLICY_URL})`, 'gi'));
      return parts.map((part, index) => {
        if (part === PRIVACY_POLICY_URL) {
          return <b key={index}>{part}</b>;
        }
        return part;
      });
    }
    return item;
  };

  return (
    <ul className='privacy-policy__paragraphs-list'>
      {policy.map((item, index) => {
        return (
          <li className='privacy-policy__paragraphs-item' key={index}>
            <h2 className='privacy-policy__paragraphs-title'>{item.title}</h2>
            {item.text.split('\n').map((item, index) => {
              return (
                <p className='privacy-policy__paragraphs-text' key={index}>
                  {markUrl(item)}
                </p>
              );
            })}
          </li>
        );
      })}
    </ul>
  );
};

export default PrivacyPolicyText;
