/* eslint-disable react/jsx-curly-newline */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import './Dropdown.css';
import { SORTING_OPTIONS, FILTER_GOODS } from '../../../utils/constants';
import { setSorting } from '../../../store/actions';

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(0);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(!open);
  };
  const dropdownListClick = (index) => {
    setDropdown(index);
  };

  // Обновляем стейт Redux
  useEffect(() => {
    dispatch(setSorting(SORTING_OPTIONS[dropdown].value));
  }, [dropdown, dispatch]);
  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      handleOpen();
    }
    handleOpen();
  };
  return (
    <div className={`showcase__dropdown dropdown `}>
      <button
        className='dropdown__button'
        type='button'
        id='dropdownButton'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'
        onClick={() => handleOpen()}
      >
        {SORTING_OPTIONS[dropdown].labelName}
        <span className={`dropdown__button-icon ${open && 'dropdown__button-icon_open'}`}></span>
      </button>
      {open ? (
        <ul
          className={`dropdown__list ${open && 'dropdown_is-open'}`}
          aria-labelledby='dropdown-list'
          onClick={(e) => {
            handleOverlay(e);
          }}
        >
          {location.pathname === '/' && SORTING_OPTIONS.map((item, index) => {
            const active =
              SORTING_OPTIONS[dropdown].value === item.value && true;
            // console.log(item); // удалить
            return (
              <li
                className='dropdown__item'
                onClick={() => dropdownListClick(index)}
                key={index}
                value={item.value}
                onSubmit={() => handleSubmit()}
              >
                {item.labelName}
                {active ? <span className='dropdown__item-icon'></span> : null}
              </li>
            );
          })}
          {location.pathname === '/personal/seller/goods' && FILTER_GOODS.map((item, index) => {
            const active =
              FILTER_GOODS[dropdown].value === item.value && true;
            return (
              <li
                className='dropdown__item'
                onClick={() => dropdownListClick(index)}
                key={index}
                value={item.value}
                onSubmit={() => handleSubmit()}
              >
                {item.labelName}
                {active ? <span className='dropdown__item-icon'></span> : null}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
