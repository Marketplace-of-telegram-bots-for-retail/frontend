/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-globals */
import React from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { collecPricesInfo } from '../../store/priceFormSubmitSlice';
import './Prices.css';

const Prices = () => {
  const [value, setValue] = React.useState([0, 0]);
  const dispatch = useDispatch();

  const handleChangeSlider = (event, newValue) => {
    setValue(newValue);
    dispatch(collecPricesInfo(newValue));
  };
  const handleChange = (e, index) => {
    let inputValue = Number(e.target.value);
    if (isNaN(inputValue)) {
      inputValue = 0;
      console.log('check');
    }
    if (!isNaN(inputValue)) {
      const numericValue = parseInt(inputValue, 10);
      if (numericValue >= 0 && numericValue <= 5000) {
        const updatedValue = [...value];
        updatedValue[index] = numericValue;
        setValue(updatedValue);
        if (index === 0 && updatedValue[1] < updatedValue[0]) {
          updatedValue[1] = updatedValue[0];
        } else if (index === 1 && updatedValue[0] > updatedValue[1]) {
          updatedValue[0] = updatedValue[1];
        }
      }
    } else {
      inputValue = 0;
    }
  };
  return (
    <>
      <section style={{ marginTop: '2rem', marginLeft: 'var(  --s-indent)' }}>
        <h3 className='categories__title'>Цена</h3>
      </section>
      <Box className='prices__box' sx={{ width: 290 }}>
        <Slider
          value={value}
          onChange={handleChangeSlider}
          valueLabelDisplay='off'
          max={5000}
          min={0}
          classes={{
            root: 'custom-slider-root',
            thumb: 'custom-slider-thumb',
            rail: 'custom-slider-rail',
            track: 'custom-slider-track',
          }}
        />
      </Box>
      <div className='prices__input-container'>
        <input
          placeholder='от 0'
          className='prices__input'
          type='text'
          value={!Number(value[0]) ? '' : value[0]}
          onChange={(e) => handleChange(e, 0)}
        />
        <input
          placeholder='до 5000'
          className='prices__input'
          type='text'
          value={!Number(value[1]) ? '' : value[1]}
          onChange={(e) => handleChange(e, 1)}
        />
      </div>
    </>
  );
};

export default Prices;
