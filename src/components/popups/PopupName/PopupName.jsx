import React from 'react';
import './PopupName.css';
import { goodsHint } from '../../../utils/constants';
import { usePopupClose } from '../../../hooks/usePopupClose';

function PopupName({ isOpen, onClose }) {
  usePopupClose(isOpen, onClose);
  return (
    <div
      className={`popup ${isOpen && 'popup_opened'}`}
    >
      <div className='popup__name'>
        <svg xmlns="http://www.w3.org/2000/svg" width="394" height="109" viewBox="0 0 394 109" fill="none">
          <g filter="url(#filter0_d_2031_11318)">
            <path d="M37.9973 40C37.9973 35.5817 41.5791 32 45.9973 32H350C354.418 32 358 35.5817 358 40V69C358 73.4183 354.418 77 350 77H45.9973C41.5791 77 37.9973 73.4183 37.9973 69V57.4847L28 54.7296L37.9973 51.9745V40Z" fill="#FDFDFD" />
          </g>
          <defs>
            <filter id="filter0_d_2031_11318" x="0" y="0" width="394" height="109" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feMorphology radius="12" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2031_11318" />
              <feOffset dx="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2031_11318" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2031_11318" result="shape" />
            </filter>
          </defs>
        </svg>
        <div className='popup__group-name'>
          <p className='popup__text-name'>
            {goodsHint.requiredField}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PopupName;