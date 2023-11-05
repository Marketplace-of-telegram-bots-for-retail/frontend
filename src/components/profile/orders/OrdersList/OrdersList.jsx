/* eslint-disable no-unused-vars */
import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrdersData } from '../../../../store/selectors';
import OrderItem from '../OrderItem/OrderItem';

const items = [
  {
    id: 1,
    user: 0,
    pay_method: 'card',
    total_cost: 555555550,
    send_to: 'user@example.com',
    is_paid: true,
    is_active: true,
    number_order: 111111,
    product_list: [
      {
        name: 'z',
        text: 'a',
      },
      {
        name: 'z',
        text: 'a',
      },
    ],
  },
  {
    id: 2,
    user: 0,
    pay_method: 'card',
    total_cost: 150,
    send_to: 'user@example.com',
    is_paid: true,
    is_active: true,
    number_order: 22222,
    product_list: [
      {
        name: 'z',
        text: 'a',
      },
      {
        name: 'z',
        text: 'a',
      },
    ],
  },
  {
    id: 3,
    user: 0,
    pay_method: 'card',
    total_cost: 50,
    send_to: 'user@example.com',
    is_paid: false,
    is_active: true,
    number_order: 222,
    product_list: [
      {
        name: 'z',
        text: 'a',
      },
      {
        name: 'z',
        text: 'a',
      },
    ],
  },
];

function OrdersList() {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  // данные для компонентов в заказе
  // const { itemsForOrder } = useSelector(getCartData);

  // список всех заказов
  const { allOrders } = useSelector(getUserOrdersData);
  console.log('allOrders', allOrders);

  // в ретурне - перебор списка заказов!!
  // в отдельном компоненте - перебор из item.product_list

  return (
    <ul className='orders__list'>
      {allOrders.map((item) => (
        <OrderItem item={item} />
      ))}
    </ul>
  );
}

export default OrdersList;
