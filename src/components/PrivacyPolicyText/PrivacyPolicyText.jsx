import React from 'react';
import './PrivacyPolicyText.css';

const PrivacyPolicyText = ({ policy }) => {
  return (
    <ul className="privacy-policy__paragraphs-list">
      {policy.map((item, index) => {
        return (
          <li className="privacy-policy__paragraphs-item" key={index}>
            <h2 className="privacy-policy__paragraphs-title">{item.title}</h2>
            {item.text.split('\n').map((item, index) => {
              return <p className="privacy-policy__paragraphs-text" key={index}>{item}</p>;
            })}
          </li>
        );
      })}
    </ul>
  );
};

export default PrivacyPolicyText;
