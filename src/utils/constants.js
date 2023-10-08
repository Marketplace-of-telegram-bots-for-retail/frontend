export const ARR_NAV = [
  { labelName: 'О маркетплейсе', path: '/about' },
  { labelName: 'Контакты', path: '/contacts' },
  { labelName: 'FAQ', path: '/faq' },
  { labelName: 'Возврат', path: '/return' },
  { labelName: 'Стать продавцом', path: '/salesman' },
];

export const CATEGORIES_INPUT = [
  { checkbox: 'checkbox1', labelName: 'Автоматизация заказов' },
  { checkbox: 'checkbox2', labelName: 'Управление заказами' },
  { checkbox: 'checkbox3', labelName: 'Улучшение обслуживания' },
  { checkbox: 'checkbox4', labelName: 'Персонализация акций' },
];

export const FOOTER_LINKS = [
  'О маркетплейсе',
  'Возврат',
  'Контакты',
  'Политика конфиденциальности',
  'FAQ',
  'Команда разработчиков',
];

export const PRIVACY_POLICY_URL = 'https://botmarketplace.ru';

export const profileNavigation = [
  {
    title: 'Заказы',
    links: [
      {
        name: 'Моя корзина',
        link: '/cart',
      },
      {
        name: 'Мои заказы',
        link: '/orders',
      },
      {
        name: 'Мои возвраты',
        link: '/returns',
      },
    ],
  },
  {
    title: 'Оплата',
    links: [
      {
        name: 'Способы оплаты',
        link: '/payment',
      },
      {
        name: 'Мои промокоды',
        link: '/promo',
      },
    ],
  },
  {
    title: 'Отзывы',
    links: [
      {
        name: 'Мои отзывы',
        link: '/reviews',
      },
    ],
  },
  {
    title: 'Помощь',
    links: [
      {
        name: 'Связаться с нами',
        link: '/contact',
      },
    ],
  },
];