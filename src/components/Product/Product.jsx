import React from 'react';
import './Product.css';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ProductTitle from '../ProductTitle/ProductTitle';
import ProductInfo from '../ProductInfo/ProductInfo';
import ProductDetails from '../ProductDetails/ProductDetails';

const Product = () => {
  return (
    <section className='product'>
      <BreadCrumbs />
      <ProductTitle />
      <ProductInfo />
      <ProductDetails />
    </section>
  );
};

export default Product;