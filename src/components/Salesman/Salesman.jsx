import { React, useState } from 'react';
import './Salesman.css';
import SellerInfo from '../SellerInfo/SellerInfo';
import Contacts from '../info/Contacts/Contacts';
// import Register from '../auth/Register/Register';
import AuthModal from '../auth/AuthModal/AuthModal';

const Salesman = () => {
  const [isPopupRegisterOpen, setIsPopupRegisterOpen] = useState(false);
  const handleRegister = () => {
    setIsPopupRegisterOpen(true);
  };
  const handleCloseModal = () => {
    setIsPopupRegisterOpen(false);
  };

  return (
    <div>
      <SellerInfo onRegister={handleRegister} />
      <Contacts />
      <div
        className={`seller__popup ${
          isPopupRegisterOpen ? 'seller__popup_opened' : ''
        }`}
      >
        {/* <Register /> */}
        <AuthModal isLogin={false} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default Salesman;
