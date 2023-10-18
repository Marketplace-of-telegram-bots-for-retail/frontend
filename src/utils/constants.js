export const PRICE_LIMIT = {
  min: 0,
  max: 10000,
};

export const REQUEST_OPTIONS = {
  search: 'search=',
  categories: 'category=',
  sorting: 'ordering=',
  is_favorited: 'is_favorited=True',
  prices: 'price=',
};

export const CATEGORY_OPTIONS = [
  { id: 1, labelName: 'Автоматизация заказов' },
  { id: 2, labelName: 'Управление запасами' },
  { id: 3, labelName: 'Улучшение обслуживания ' },
  { id: 4, labelName: 'Персонализация акций' },
];

export const SORTING_OPTIONS = [
  {
    id: 1,
    value: '-created',
    labelName: 'Сначала новые',
    anotherName: 'Сначала новые',
  },
  {
    id: 2,
    value: 'created',
    labelName: 'Сначала старые',
    anotherName: 'По дате создания',
  },
  {
    id: 1,
    value: 'price',
    labelName: 'Сначала дешевые',
    anotherName: 'По возрастанию цены',
  },
  {
    id: 1,
    value: '-price',
    labelName: 'Сначала дорогие',
    anotherName: 'По убыванию цены',
  },
];

// export const CATEGORIES_INPUT = [
//   { checkbox: 'checkbox1', labelName: 'Автоматизация заказов' },
//   { checkbox: 'checkbox2', labelName: 'Управление заказами' },
//   { checkbox: 'checkbox3', labelName: 'Улучшение обслуживания' },
//   { checkbox: 'checkbox4', labelName: 'Персонализация акций' },
// ];
export const ARR_NAV = [
  { label: 'О маркетплейсе', link: '/promo#about' },
  { label: 'Контакты', link: '/promo#contacts' },
  { label: 'FAQ', link: '/promo#faq' },
  { label: 'Возврат', link: '/return#' },
  { label: 'Стать продавцом', path: '/salesman#' },
];

export const FOOTER_LINKS = [
  { label: 'О маркетплейсе', link: '/promo#about' },
  { label: 'Возврат', link: '/return#' },
  { label: 'Контакты', link: '/promo#contacts' },
  { label: 'Политика конфиденциальности', link: '/privacy-policy#' },
  { label: 'FAQ', link: '/promo#faq' },
  { label: 'Команда разработчиков', link: '/promo#developers#' },
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
