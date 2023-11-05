import React from 'react';
import './PopupVideo.css';
import { goodsHint } from '../../../utils/constants';
import { usePopupClose } from '../../../hooks/usePopupClose';

function PopupVideo({ isOpen, onClose }) {
  usePopupClose(isOpen, onClose);
  return (
    <div
      className={`popup__video ${isOpen && 'popup__video_opened'}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="377" height="151" viewBox="0 0 377 151" fill="none">
        <g filter="url(#filter0_d_2031_11321)">
          <path d="M37.4823 40C37.4823 35.5817 41.064 32 45.4823 32H333C337.418 32 341 35.5817 341 40V111C341 115.418 337.418 119 333 119H45.4823C41.064 119 37.4823 115.418 37.4823 111V81.2704L28 75.9439L37.4823 70.6173V40Z" fill="#FDFDFD" />
        </g>
        <defs>
          <filter id="filter0_d_2031_11321" x="0" y="0" width="377" height="151" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="12" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2031_11321" />
            <feOffset dx="4" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2031_11321" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2031_11321" result="shape" />
          </filter>
        </defs>
      </svg>
      <div className='popup__group-video'>
        <p className='popup__text-video'>
          {goodsHint.videoFirst}
          <br />
          {goodsHint.videoSecond}
        </p>
      </div>
    </div>
  );
}

export default PopupVideo;