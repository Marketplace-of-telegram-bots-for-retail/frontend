/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Стили
import './ProductPhotos.css';
// import required modules
import {
  FreeMode,
  Navigation,
  Thumbs,
  EffectFade,
  Controller,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper/modules';
import { getProductCardData } from '../../../store';

export default function ProductPhotos() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const { images } = useSelector(getProductCardData);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  // указываем `useEffect` для обработчика `Escape`
  useEffect(() => {
    if (!isOpen) return;
    function handleEscapeKey(e) {
      if (e.code === 'Escape') {
        setOpen(false);
      }
    }
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isOpen, setOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
  }, [isOpen]);

  // создаем обработчик оверлея
  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  return (
    <>
      <div className='rpoduct__images images'>
        <Swiper
          className='images__nav-swiper'
          direction='vertical'
          modules={[FreeMode, Thumbs, Mousewheel]}
          spaceBetween={20}
          slidesPerView={3.41}
          onSwiper={setThumbsSwiper}
          freeMode={true}
          watchSlidesProgress={true}
          mousewheel={true}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <img className='images__image' src={image.image} alt='Скриншот' />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          modules={[EffectFade, Navigation, Thumbs, Controller]}
          watchSlidesProgress={true}
          controller={{ control: controlledSwiper }}
          coverflowEffect={{
            shadow: true,
          }}
          effect='fade'
          spaceBetween={10}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          className='images__swiper'
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <img
                className='images__image'
                src={image.image}
                alt='Скриншот'
                onClick={() => {
                  setOpen((state) => !state);
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {isOpen ? (
        <div className='images__modal' onClick={handleOverlay}>
          <button
            type='button'
            className='modal__close'
            onClick={() => {
              setOpen((state) => !state);
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              viewBox='0 0 28 28'
              fill='none'
            >
              {/* <g cliPath='url(#clip0_713_6228)'> */}
              <circle cx='14' cy='14' r='14' fill='#F8F8FF' />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.07107 21.0711C6.77066 20.7707 6.77066 20.2836 7.07107 19.9832L20.1253 6.92893C20.4257 6.62853 20.9128 6.62853 21.2132 6.92893C21.5136 7.22934 21.5136 7.71639 21.2132 8.01679L8.15892 21.0711C7.85852 21.3715 7.37147 21.3715 7.07107 21.0711Z'
                fill='#1E1E1E'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M21.2132 21.0711C20.9128 21.3715 20.4257 21.3715 20.1253 21.0711L7.07107 8.01679C6.77066 7.71639 6.77066 7.22934 7.07107 6.92893C7.37147 6.62853 7.85852 6.62853 8.15892 6.92893L21.2132 19.9832C21.5136 20.2836 21.5136 20.7707 21.2132 21.0711Z'
                fill='#1E1E1E'
              />
              {/* </g> */}
              {/* <defs>
                <clipPath id='clip0_713_6228'>
                  <rect width='28' height='28' fill='white' />
                </clipPath>
              </defs> */}
            </svg>
          </button>
          <Swiper
            className='modal__swiper'
            style={{
              '--swiper-navigation-color': '#B2B0FF',
              '--swiper-pagination-color': '#352DF2',
              '--swiper-pagination-bullet-size': '12px',
              '--swiper-pagination-bullet-width': '12px',
              '--swiper-pagination-bullet-height': '12px',
              '--swiper-pagination-bullet-inactive-color': '#B2B0FF',
              '--swiper-pagination-bullet-inactive-opacity': '1',
              '--swiper-pagination-bullet-opacity': '1',
              '--swiper-pagination-bullet-horizontal-gap': '8px',
              '--swiper-pagination-bottom': '32px',
            }}
            modules={[Navigation, Controller, Pagination, Keyboard]}
            onSwiper={setControlledSwiper}
            slidesPerView={1.2}
            slidesPerGroupSkip={1}
            watchSlidesProgress={true}
            grabCursor={true}
            centeredSlides={true}
            keyboard={{
              enabled: true,
            }}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <img
                  className='images__image'
                  src={image.image}
                  alt='Скриншот'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : null}
    </>
  );
}
