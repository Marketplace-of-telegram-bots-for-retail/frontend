import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import './Salesman.css';
import SellerInfo from '../SellerInfo/SellerInfo';
import Contacts from '../info/Contacts/Contacts';
// import Register from '../auth/Register/Register';
import AuthModal from '../auth/AuthModal/AuthModal';
import { becomeSeller } from '../../store/userSlice';

const Salesman = () => {
  const dispatch = useDispatch();
  const [isPopupRegisterOpen, setIsPopupRegisterOpen] = useState(false);
  const handleRegister = () => {
    dispatch(
      becomeSeller({
        inn: '015420070683',
      })
    );
    // setIsPopupRegisterOpen(true);
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
