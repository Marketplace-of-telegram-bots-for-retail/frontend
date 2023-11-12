import './Dropdown.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrdersData } from '../../../../../store/selectors';
import { ORDERS_SORTING } from '../../../../../utils/constants';

const Dropdown = ({ setOrders }) => {
/* eslint-disable no-unused-vars */
  const [dropdown, setDropdown] = useState(0);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const { allOrders } = useSelector(getUserOrdersData);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOrders(allOrders);
  }, []);

  const dropdownListClick = (index) => {
    setDropdown(index);
    if (index === 0) {
      setOrders(allOrders);
      console.log(allOrders, 'дропдаун');
    } else if (index === 1) {
      const filteredOrders = allOrders.filter((order) => order.is_paid === true);
      setOrders(filteredOrders);
    } else if (index === 2) {
      const filteredOrders = allOrders.filter((order) => order.is_paid === false);
      setOrders(filteredOrders);
    }
  };

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      handleOpen();
    }
    handleOpen();
  };

  return (
    <div className="orders__dropdown">
      <button
        className='orders-dropdown__button'
        type='button'
        id='dropdownButton'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'
        onClick={() => handleOpen()}
      >
        {ORDERS_SORTING[dropdown].labelName}
        <span className={`orders-dropdown__button-icon ${open && 'orders-dropdown__button-icon_open'}`}></span>
      </button>
      {open ? (
        <ul
          className={`orders-dropdown__list ${open && 'dropdown_is-open'}`}
          aria-labelledby='orders-dropdown-list'
          onClick={(e) => {
            handleOverlay(e);
          }}
        >
          {ORDERS_SORTING.map((item, index) => {
            const active =
            ORDERS_SORTING[dropdown].value === item.value && true;
            return (
              <li
                className={`orders-dropdown__item ${active ? 'orders-dropdown__item_active' : ''}`}
                onClick={() => dropdownListClick(index)}
                key={index}
                value={item.value}
                onSubmit={() => handleSubmit()}
              >
                {item.labelName}
                {active ? <span className='orders-dropdown__item-icon'></span> : null}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
