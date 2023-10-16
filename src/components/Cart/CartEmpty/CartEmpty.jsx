/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import './CartEmpty.css';
import CartEmptyImg from '../../../images/pic_cart-empty.svg';

function CartEmpty() {
  return (
    <div className='cart-empty'>
      <img className='cart-empty__image' src={CartEmptyImg} alt='коробка' />
      <h2 className='cart-empty__title'>Корзина пуста</h2>
      <p className='cart-empty__text'>
        Если&nbsp;в&nbsp;корзине&nbsp;были&nbsp;товары&nbsp;&mdash;
        <a href='' className='cart-empty__link-login' target='_blank' rel='noreferrer'>
        &nbsp;войдите,
        </a>
      </p>
      <p className='cart-empty__text'>&nbsp;чтобы посмотреть список.</p>
      <Link to='/' className='cart-empty__link'>
        На главную
      </Link>
    </div>
  );
}

export default CartEmpty;