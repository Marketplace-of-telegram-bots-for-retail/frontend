import React from 'react';
import './Main.css';

const Main = ({ children }) => {
  return <main className='page__content content'>{children}</main>;
};

export default Main;
