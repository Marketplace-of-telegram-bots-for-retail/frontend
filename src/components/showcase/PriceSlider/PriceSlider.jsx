/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';
import { Box, Slider } from '@mui/material';
import { collecPrices } from '../../../store/dataSearchFormSlice';
import './PriceSlider.css';
import { PRICE_LIMIT } from '../../../utils/constants';

const PriceSlider = () => {
  const [value, setValue] = useState([PRICE_LIMIT.min, PRICE_LIMIT.max]);
  const [valueOnBlur, setValueOnBlur] = useState(value);
  const dispatch = useDispatch();
  const { prices } = useSelector((state) => state.dataSearchForm);

  const handleChangeSlider = (event, newValue) => {
    dispatch(collecPrices(newValue));
  };
  const handleChange = (e, index) => {
    let inputValue = Number(e.target.value);
    if (isNaN(inputValue)) {
      inputValue = 0;
      console.log('check');
    }
    if (!isNaN(inputValue)) {
      const numericValue = parseInt(inputValue, 10);
      if (numericValue >= PRICE_LIMIT.min && numericValue <= PRICE_LIMIT.max) {
        const updatedValue = [...value];
        updatedValue[index] = numericValue;
        setValue(updatedValue);
      }
    }
  };
  const handleOnBlur = (e, index) => {
    console.log(e.target.value, index);

    let inputValue = Number(e.target.value);
    if (isNaN(inputValue)) {
      inputValue = 0;
      console.log('check');
    }
    if (!isNaN(inputValue)) {
      const numericValue = parseInt(inputValue, 10);
      if (numericValue >= PRICE_LIMIT.min && numericValue <= PRICE_LIMIT.max) {
        const updatedValue = [...value];
        updatedValue[index] = numericValue;

        if (index === 0 && updatedValue[1] < updatedValue[0]) {
          updatedValue[1] = updatedValue[0];
        } else if (index === 1 && updatedValue[0] > updatedValue[1]) {
          updatedValue[0] = updatedValue[1];
        }
        setValueOnBlur(updatedValue);
        dispatch(collecPrices(updatedValue));
      }
    } else {
      inputValue = 0;
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter') {
      // 👇 Get input value
      e.preventDefault();
      handleOnBlur(e, index);
    }
  };

  useEffect(() => {
    setValue(prices);
    setValueOnBlur(prices);
  }, [prices]);
  return (
    <div className='filters__price-slider price-slider'>
      <h2 className='price-slider__title'>Цена</h2>

      <Box className='price-slider__box'>
        <Slider
          value={valueOnBlur}
          onChange={handleChangeSlider}
          valueLabelDisplay='off'
          max={PRICE_LIMIT.max}
          min={PRICE_LIMIT.min}
          classes={{
            root: 'custom-slider-root',
            thumb: 'custom-slider-thumb',
            rail: 'custom-slider-rail',
            track: 'custom-slider-track',
          }}
        />
      </Box>
      <div className='price-slider__input-wrapper'>
        <input
          placeholder={`от ${PRICE_LIMIT.min}`}
          className='price-slider__input'
          type='text'
          // value={!Number(value[0]) ? '' : value[0]}
          value={value[0]}
          onChange={(e) => handleChange(e, 0)}
          onBlur={(e) => handleOnBlur(e, 0)}
          onKeyDown={(e) => handleKeyDown(e, 0)}
        />
        <input
          placeholder={`до ${PRICE_LIMIT.max}`}
          className='price-slider__input'
          type='text'
          // value={!Number(value[1]) ? '' : value[1]}
          value={value[1]}
          onChange={(e) => handleChange(e, 1)}
          onBlur={(e) => handleOnBlur(e, 1)}
          onKeyDown={(e) => handleKeyDown(e, 1)}
        />
      </div>
    </div>
  );
};

export default PriceSlider;
