import React from 'react';
import { Link } from 'react-router-dom';
import './FeedbackForm.css';

const FeedbackForm = ({ nameForm, title, buttonText, link, linkText, registrationText, isValid, onSubmit, children }) => {
  return (
    <section className='content__feedback-form feedback-form'>
      <div className='feedback-form__container'>
        <h1 className='feedback-form__title'>{title}</h1>
      </div>
      <form className='form' name={`form-${nameForm}`} onSubmit={onSubmit} disabled={!isValid}>

        {children}

        {/* чекбокс со ссылкой для перехода на страницу Политики конфиденциальности */}
        <label className='feedback-form__text' htmlFor='checkbox'>
          <input className='feedback-form__checkbox' type='checkbox' id='checkbox' />
          {registrationText}
          &nbsp;
          <Link to={`/${link}`} className='feedback-form__link'>{linkText}</Link>
        </label>
        <button className='feedback-form__button_type_submit' type='submit' disabled={!isValid}>{buttonText}</button>
      </form>
    </section>

  );
};

export default FeedbackForm;
