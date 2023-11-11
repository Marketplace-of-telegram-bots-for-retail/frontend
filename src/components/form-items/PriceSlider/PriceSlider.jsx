/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Slider } from '@mui/material';
import { setPrices } from '../../../store/actions';
import './PriceSlider.css';
import { getSearchFormData } from '../../../store';

const PriceSlider = () => {
  const { prices, min_max } = useSelector(getSearchFormData);
  const { price__min, price__max } = min_max;
  const [value, setValue] = useState([price__min, price__max]);
  // const [valueOnBlur, setValueOnBlur] = useState(value);
  const dispatch = useDispatch();

  const handleChangeSlider = (event, newValue) => {
    setValue(newValue);
  };

  const handleOnBlourSleder = () => {
    dispatch(setPrices(value));
  };
  const handleChange = (e, index) => {
    let inputValue = Number(e.target.value);
    if (isNaN(inputValue)) {
      inputValue = 0;
    }
    if (!isNaN(inputValue)) {
      const numericValue = parseInt(inputValue, 10);
      const updatedValue = [...value];
      updatedValue[index] = numericValue;
      setValue(updatedValue);
    }
  };
  const handleOnBlur = (e, index) => {
    let inputValue = Number(e.target.value);
    if (isNaN(inputValue) || Number(e.target.value) < price__min) {
      inputValue = price__min;
      // console.log('check');
    } else if (inputValue > price__max) {
      inputValue = price__max;
    }
    if (!isNaN(inputValue)) {
      const numericValue = parseInt(inputValue, 10);
      if (numericValue >= price__min && numericValue <= price__max) {
        const updatedValue = [...value];
        updatedValue[index] = numericValue;

        if (index === 0 && updatedValue[1] < updatedValue[0]) {
          updatedValue[1] = updatedValue[0];
        } else if (index === 1 && updatedValue[0] > updatedValue[1]) {
          updatedValue[0] = updatedValue[1];
        }
        // setValueOnBlur(updatedValue);
        setValue(updatedValue);
        dispatch(setPrices(updatedValue));
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
    // setValueOnBlur(prices);
  }, [prices]);
  return (
    <div className='filters__price-slider price-slider'>
      <h2 className='price-slider__title'>Цена</h2>

      <Box className='price-slider__box'>
        <Slider
          value={value}
          onChange={handleChangeSlider}
          onClickCapture={handleOnBlourSleder}
          valueLabelDisplay='off'
          max={price__max}
          min={price__min}
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
          placeholder={`от ${price__min}`}
          className='price-slider__input'
          type='text'
          // value={!Number(value[0]) ? '' : value[0]}
          value={value[0]}
          onChange={(e) => handleChange(e, 0)}
          onBlur={(e) => handleOnBlur(e, 0)}
          onKeyDown={(e) => handleKeyDown(e, 0)}
        />
        <input
          placeholder={`до ${price__max}`}
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
