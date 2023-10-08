import React from 'react';
import './Product.css';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ProductTitle from '../ProductTitle/ProductTitle';
import ProductInfo from '../ProductInfo/ProductInfo';
import ProductDetails from '../ProductDetails/ProductDetails';
import { cards } from '../../temp/cards';

const Product = () => {
  const card = cards.find((x) => x.id === 1);

  return (
    <section className='product'>
      <BreadCrumbs card={card} />
      <ProductTitle card={card} />
      <ProductInfo card={card} />
      <ProductDetails card={card} />
    </section>
  );
};

export default Product;