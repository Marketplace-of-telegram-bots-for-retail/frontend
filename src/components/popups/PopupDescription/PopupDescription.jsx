import React from 'react';
import './PopupDescription.css';
import { goodsHint } from '../../../utils/constants';
import { usePopupClose } from '../../../hooks/usePopupClose';

function PopupDescription({ isOpen, onClose }) {
  usePopupClose(isOpen, onClose);
  return (
    <div
      className={`popup__description ${isOpen && 'popup__description_opened'}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="389" height="188" viewBox="0 0 389 188" fill="none">
        <g filter="url(#filter0_d_2031_11127)">
          <path d="M37.8459 40C37.8459 35.5817 41.4276 32 45.8459 32H345C349.418 32 353 35.5817 353 40V148C353 152.418 349.418 156 345 156H45.8459C41.4276 156 37.8459 152.418 37.8459 148V102.224L28 94.6326L37.8459 87.0408V40Z" fill="#FDFDFD" />
        </g>
        <defs>
          <filter id="filter0_d_2031_11127" x="0" y="0" width="389" height="188" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="12" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2031_11127" />
            <feOffset dx="4" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2031_11127" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2031_11127" result="shape" />
          </filter>
        </defs>
      </svg>
      <div className='popup__group-description'>
        <p className='popup__text-description'>
          {goodsHint.requiredField}
          <br />
          {goodsHint.descriptionFirst}
          <br />
          {goodsHint.descriptionSecond}
        </p>
      </div>
    </div>
  );
}

export default PopupDescription;