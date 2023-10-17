/* eslint-disable react/jsx-curly-newline */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Dropdown.css';
import { SORTING_OPTIONS } from '../../../utils/constants';
import { collecSorting } from '../../../store/dataSearchFormSlice';

const Dropdown = ({ onSearch }) => {
  const [dropdown, setDropdown] = useState(0);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const dropdownState = useSelector((state) => state.dataSearchForm.sorting);
  const handleOpen = () => {
    setOpen(!open);
  };
  const dropdownListClick = (index) => {
    setDropdown(index);
    onSearch();
  };

  // Обновляем стейт Redux
  useEffect(() => {
    dispatch(collecSorting(SORTING_OPTIONS[dropdown].value));
  }, [dropdown, dispatch]);
  // Отправить запрос
  useEffect(() => {
    onSearch();
  }, [dropdownState]);

  return (
    <div className='showcase__dropdown dropdown'>
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
        <span className='dropdown__button-icon'></span>
      </button>
      {open ? (
        <ul
          className='dropdown__list'
          aria-labelledby='dropdown-list'
          onClick={() => {
            handleOpen();
          }}
        >
          {SORTING_OPTIONS.map((item, index) => {
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
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
