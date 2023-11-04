import React from 'react';
import './PopupFunction.css';
import { goodsHint } from '../../../utils/constants';
import { usePopupClose } from '../../../hooks/usePopupClose';
import img from '../../../images/image 28.png';

function PopupFunction({ isOpen, onClose }) {
  usePopupClose(isOpen, onClose);
  return (
    <div
      className={`popup__function ${isOpen && 'popup__function_opened'}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="436" height="337" viewBox="0 0 436 337" fill="none">
        <g filter="url(#filter0_d_2031_11130)">
          <path d="M39.2697 40C39.2697 35.5817 42.8515 32 47.2697 32H392C396.418 32 400 35.5817 400 40V297C400 301.418 396.418 305 392 305H47.2697C42.8514 305 39.2697 301.418 39.2697 297V186.607L28 169.893L39.2697 153.179V40Z" fill="#FDFDFD" />
        </g>
        <defs>
          <filter id="filter0_d_2031_11130" x="0" y="0" width="436" height="337" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="12" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2031_11130" />
            <feOffset dx="4" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2031_11130" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2031_11130" result="shape" />
          </filter>
        </defs>
      </svg>
      <div className='popup__group-function'>
        <p className='popup__text-function'>
          {goodsHint.function}
        </p>
        <img
          className='popup__img-function'
          src={img}
          alt='описание функционала'
        />
      </div>
    </div>
  );
}

export default PopupFunction;