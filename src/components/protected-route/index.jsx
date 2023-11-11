import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

const ProtectedRoute = ({ onlyUnAuth, children }) => {
  const location = useLocation();
  const user = true;
  isAuthChecked = true;

  if (!isAuthChecked) return <Preloader />;

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: '/' } };
    <Navigate to={from} />; //
  }

  if (!onlyUnAuth && !user) {
    console.log('NAVIGATE LOGIN');
    <Navigate to={{ pathname: '/login' }} state={{ from: location }} />;
  }
  return children;
};

export default ProtectedRoute;
