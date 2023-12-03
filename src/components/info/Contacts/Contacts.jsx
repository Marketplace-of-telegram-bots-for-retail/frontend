import React from 'react';
import './Contacts.css';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import Input from '../../Input';

import icon1 from '../../../images/cnt1.svg';
import icon2 from '../../../images/cnt2.svg';
import icon3 from '../../../images/cnt3.svg';
import icon4 from '../../../images/cnt4.svg';

const Contacts = () => {
  const { values, onBlur, handleChange, errors, isValid } =
    useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className='content__contacts contacts' id='contacts'>
      <h1 className='contacts__heading'>Контакты</h1>
      <div className='contacts__main'>
        <div className="contacts__info">
          <ul className='contacts__data'>
            <li className='contacts__data-line'>
              <img src={icon1} alt='Иконка' className="contacts__icon" />
              <a
                href='mailto:hello@botmarketplace.ru'
                target='_blank'
                rel='noreferrer'
                className='contacts__text'
              >
                hello@botmarketplace.ru
              </a>
            </li>
            <li className='contacts__data-line'>
              <img src={icon2} alt='Иконка' className="contacts__icon" />
              <a
                href='tel:+79999999999'
                target='_blank'
                rel='noreferrer'
                className='contacts__text'
              >
                +7(999)999-99-99
              </a>
            </li>
            <li className='contacts__data-line'>
              <img src={icon3} alt='Иконка' className="contacts__icon" />
              <p className='contacts__text'>
                130900, Москва, ул. Московская, д.1, БЦ Ритейлер, офис 12
              </p>
            </li>
            <li className='contacts__data-line'>
              <img src={icon4} alt='Иконка' className="contacts__icon" />
              <p className='contacts__text'>
                ООО “Ботмаркет” ОГРН 1234567890 / ИНН 123456789
              </p>
            </li>
          </ul>
          <iframe
            title='map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2252.7069065914225!2d37.43414088225836!3d55.62451544228332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5528cd5d0a2c1%3A0x7d572c4fd07adf3a!2z0JzQvtGB0LrQvtCy0YHQutCw0Y8g0YPQuy4sIDEsINCc0L7RgdC60LLQsCwgMTE5NjIw!5e0!3m2!1sru!2sru!4v1701175640707!5m2!1sru!2sru'
            width='600'
            height='450'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
            className="contacts__map"
          ></iframe>
        </div>
        <div>
          <FeedbackForm
            name='feedback-form'
            title='Напишите нам'
            buttonText='Отправить'
            link='privacy-policy'
            linkText='Политикой конфиденциальности'
            registrationText='Согласен с'
            onSubmit={handleSubmit}
            isValid={isValid}
          >
            <Input
              name='email'
              type='email'
              error={errors.email}
              value={values.email ?? ''}
              onChange={handleChange}
              onBlur={onBlur}
              inputName='Почта'
              required
            />
            <Input
              name='nameGuest'
              type='text'
              error={errors.nameGuest}
              value={values.nameGuest ?? ''}
              onChange={handleChange}
              onBlur={onBlur}
              inputName='Ваше имя'
              autoFocus
              required
            />
            <div className='contacts__container'>
              <p className='input__name contacts__message-label'>Сообщение</p>
              <textarea
                className='contacts__textarea'
                id='message'
                name='message'
                error={errors.message}
                value={values.message ?? ''}
                onBlur={onBlur}
                inputName='Сообщение'
                required
              />
            </div>
          </FeedbackForm>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
