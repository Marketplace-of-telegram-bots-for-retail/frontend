/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './CartEmpty.css';
import { getAuthorisationData } from '../../../store';
import CartEmptyImg from '../../../images/shopping_basket 2.svg';

const CartEmpty = () => {
  const { isAuthorised } = useSelector(getAuthorisationData);
  return (
    <div className='cart-empty'>
      <img
        className='cart-empty__image'
        src={CartEmptyImg}
        alt='тележка покупателя'
      />
      <h2 className='cart-empty__title'>Корзина пуста</h2>
      {!isAuthorised ? (
        <>
          <p className='cart-empty__text'>
            Если&nbsp;в&nbsp;корзине&nbsp;были&nbsp;товары&nbsp;&mdash;
            <Link to='/'>
              <a
                href=''
                className='cart-empty__link-login'
                target='_blank'
                rel='noreferrer'
              >
                &nbsp;войдите,
              </a>
            </Link>
          </p>
          <p className='cart-empty__text'>&nbsp;чтобы посмотреть список.</p>
        </>
      ) : (
        <Link to='/' className='cart-empty__link'>
          На главную
        </Link>
      )}
    </div>
  );
};

export default CartEmpty;
