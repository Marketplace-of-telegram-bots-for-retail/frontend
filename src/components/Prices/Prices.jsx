import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import './Prices.css';

const Prices = () => {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const PriceSlider = styled(Slider)({
    color: '#680BE0',
    height: 4,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 14,
      width: 14,
      backgroundColor: 'linear-gradient(270deg, #7916E1 0%, #680BE0 47.92%, #5500DE 100%)',
      border: '2px solid linear-gradient(270deg, #7916E1 0%, #680BE0 47.92%, #5500DE 100%)',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      display: 'none',
    }
  });
  console.log(value);
  return (
    <>
      <section className='categories' style={{ marginTop: '3rem' }}>
        <h3 className='categories__title'>Цена</h3>
      </section>
      <Box className='prices__box' sx={{ width: 290 }}>
        <PriceSlider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay='auto'
        />
      </Box>
      <p>{value[0]}</p>
      <p>{value[1]}</p>
    </>
  );
};

export default Prices;
