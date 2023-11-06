import React from 'react';
import './PopupPhoto.css';
import { goodsHint } from '../../../utils/constants';
import { usePopupClose } from '../../../hooks/usePopupClose';

function PopupPhoto({ isOpen, onClose }) {
  usePopupClose(isOpen, onClose);
  return (
    <div
      className={`popup ${isOpen && 'popup_opened'}`}
    >
      <div className='popup__photo'>
        <svg xmlns="http://www.w3.org/2000/svg" width="377" height="150" viewBox="0 0 377 150" fill="none">
          <g filter="url(#filter0_d_2031_11312)">
            <path d="M37.4823 40C37.4823 35.5817 41.064 32 45.4823 32H333C337.418 32 341 35.5817 341 40V110C341 114.418 337.418 118 333 118H45.4823C41.064 118 37.4823 114.418 37.4823 110V80.7041L28 75.4388L37.4823 70.1735V40Z" fill="#FDFDFD" />
          </g>
          <defs>
            <filter id="filter0_d_2031_11312" x="0" y="0" width="377" height="150" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feMorphology radius="12" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2031_11312" />
              <feOffset dx="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2031_11312" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2031_11312" result="shape" />
            </filter>
          </defs>
        </svg>
        <div className='popup__group-photo'>
          <p className='popup__text-photo'>
            {goodsHint.photo}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PopupPhoto;