import React, { useState } from 'react';
import './Faq.css';
import PicQuestionsMen from '../../../images/faq-pic-question-man.svg';

const Faq = () => {
  // хук для описания всех вопросов/ответов из раздела FAQ
  // eslint-disable-next-line no-unused-vars
  const [descriptions, setDescriptions] = useState([
    {
      id: 1,
      title: 'Что входит в стоимость бота?',
      description: 'В стоимость входит исходный код и инструкция по установке, тестировался на Python 3.10.2',
    },
    {
      id: 2,
      title: 'Куда пришлют бота?',
      description: 'После оплаты заказа мы отправляем ссылку для скачивания скрипта и инструкции по установке бота на почту, которую вы указали при регистрации',
    },
    {
      id: 3,
      title: 'Как установить бота?',
      description: 'Для каждого бота предусмотрена подробная инструкция по установке. Если у вас все же останутся вопросы, то вы сможете связаться с продавцом бота через форму обратной связи',
    },
    {
      id: 4,
      title: 'Куда обращаться за помощью?',
      description: 'Вы можете связаться с нами через форму обратной связи или по контактам на этой странице',
    },
    {
      id: 5,
      title: 'Могу ли я разместить своего бота на площадке?',
      description: 'Чтобы стать продавцом, вам следует заполнить дополнительные данные в личном кабинете в разделе Продавца. Условия вы сможете увидеть на странице Стать продавцом',
    },
    {
      id: 6,
      title: 'Могу ли вернуть заказ?',
      description: 'Вы можете запросить возврат в течение 14 дней со дня оплаты при условии, что вы не переходили по ссылке для скачивания бота из письма. Факт скачивания проверяется системой',
    },
  ]);

  const [currentDescription, setCurrentDescription] = useState('');

  // функция обработки при нажатии на вопрос: 1 щелчок- октрываем описание, 2 щелчок- закрываем
  const handleClick = (id) => {
    const selectedDescription = descriptions.find((item) => item.id === id);
    if (selectedDescription) {
      if (selectedDescription.description === currentDescription) {
        setCurrentDescription('');
      } else {
        setCurrentDescription(selectedDescription.description);
      }
    }
  };

  return (
    <section className='content__faq faq' id='faq'>
      <h1 className='faq__heading'>FAQ</h1>
      <div className='faq__container'>
        <ul className='faq__list'>
          {descriptions.map((item) => (<li className='faq__list-item' key={item.id} onClick={() => handleClick(item.id)}>
            {item.title}
            <p className='faq__list-discription'>{item.description === currentDescription ? currentDescription : null}</p>
          </li>))}
        </ul>
        <img src={PicQuestionsMen} className='faq__img' alt='Картинка с милым роботом, который задает вопрос'></img>
      </div>
    </section>
  );
};

export default Faq;