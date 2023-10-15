import React from 'react';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className='preloader'>
      <div className='preloader__container'>
        <div className='preloader__outer'></div>
        <div className='preloader__middle'></div>
        <div className='preloader__inner'></div>
      </div>
    </div>
  );
};

export default Preloader;
