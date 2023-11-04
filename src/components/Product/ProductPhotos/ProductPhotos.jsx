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
  EffectCreative,
  Controller,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper/modules';
import { getProductCardData } from '../../../store';
// импорт SVG
import { ReactComponent as CloseModalImagesSvg } from '../../../images/ic_cross-24-circle.svg';

export default function ProductPhotos() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const { images } = useSelector(getProductCardData);
  const [isOpen, setOpen] = useState(false);
  const decorationSpeed = 900;
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
          speed={decorationSpeed}
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
          modules={[EffectCreative, Navigation, Thumbs, Controller]}
          watchSlidesProgress={true}
          controller={{ control: controlledSwiper }}
          effect='creative'
          creativeEffect={{
            prev: {
              translate: [0, 0, -100],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          spaceBetween={10}
          speed={decorationSpeed}
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
            <CloseModalImagesSvg />
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
            modules={[
              EffectCreative,
              Navigation,
              Controller,
              Pagination,
              Keyboard,
            ]}
            effect='creative'
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ['-120%', 0, -400],
              },
              next: {
                shadow: true,
                translate: ['120%', 0, -400],
              },
            }}
            onSwiper={setControlledSwiper}
            slidesPerView={1.2}
            slidesPerGroupSkip={1}
            watchSlidesProgress={true}
            grabCursor={true}
            centeredSlides={true}
            speed={decorationSpeed}
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
