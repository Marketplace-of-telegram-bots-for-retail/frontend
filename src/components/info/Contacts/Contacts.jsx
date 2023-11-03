import React from 'react';
import './Contacts.css';
import ErrorPage from '../../ErrorPage/ErrorPage';

const Contacts = () => {
  return (
    <section className='content__contacts contacts' id='contacts'>
      <h1>Contacts</h1>
      <ErrorPage />
    </section>
  );
};

export default Contacts;

// код в работе
// import React from 'react';
// import './Contacts.css';
// import { useFormWithValidation } from '../../../hooks/useFormWithValidation';
// import FeedbackForm from '../FeedbackForm/FeedbackForm';
// import Input from '../../Input';

// const Contacts = () => {
//   const { values, onBlur, handleChange, errors, isValid } = useFormWithValidation();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <section className='content__contacts contacts' id='contacts'>
//       <h1 className='contacts__heading'>Контакты</h1>
//       <FeedbackForm
//         name='feedback-form'
//         title='Напишите нам'
//         buttonText='Отправить'
//         link='privacy-policy'
//         linkText='Политикой конфиденциальности'
//         registrationText='Согласен с'
//         onSubmit={handleSubmit}
//         isValid={isValid}
//       >
//         <Input
//           name='email'
//           type='email'
//           error={errors.email}
//           value={values.email ?? ''}
//           onChange={handleChange}
//           onBlur={onBlur}
//           inputName='Почта'
//           required
//         />

//         <Input
//           name='nameGuest'
//           type='text'
//           error={errors.nameGuest}
//           value={values.nameGuest ?? ''}
//           onChange={handleChange}
//           onBlur={onBlur}
//           inputName='Ваше Имя'
//           autoFocus
//           required
//         />
//         <div className='contacts__container'>
//           <textarea
//             className='contacts__textarea'
//             name='message'
//             error={errors.message}
//             value={values.message ?? ''}
//             onBlur={onBlur}
//             inputName='Сообщение'
//             required
//           />
//         </div>

//         {/* <Input
//           name='message'
//           type='text'
//           error={errors.message}
//           value={values.message ?? ''}
//           onChange={handleChange}
//           onBlur={onBlur}
//           inputName='Сообщение'
//           required
//         /> */}

//       </FeedbackForm>
//     </section>
//   );
// };

// export default Contacts;