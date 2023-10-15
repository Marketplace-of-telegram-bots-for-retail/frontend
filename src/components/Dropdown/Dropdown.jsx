import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ handleSort }) => {
  const [dropdown, setDropdown] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    console.log('onClick => setOpen(!open)'); // удалить
  };

  // const dropdownList = [
  //   { title: 'По популярности', value: 'popular' },
  //   { title: 'По рейтингу', value: 'rate' },
  //   { title: 'По возрастанию цены', value: 'priceup' },
  //   { title: 'По убыванию цены', value: 'pricedown' },
  //   { title: 'По скидке', value: 'sale' },
  //   { title: 'По новинкам', value: 'newly' },
  // ];

  const dropdownList = [
    { title: 'Сначала новые', value: '-created' },
    { title: 'По дате создания', value: 'created' },
    { title: 'По возрастанию цены', value: 'price' },
    { title: 'По убыванию цены', value: '-price' },
  ];

  const dropdownListClick = (index) => {
    setDropdown(index);
  };

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
        onSubmit={() => handleSort(dropdownList[dropdown].value)}
      >
        {dropdownList[dropdown].title}
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
          {dropdownList.map((item, index) => {
            const active = dropdownList[dropdown].value === item.value && true;
            // console.log(item); // удалить
            return (
              <li
                className='dropdown__item'
                onClick={() => dropdownListClick(index)}
                key={index}
                value={item.value}
              >
                {item.title}
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
