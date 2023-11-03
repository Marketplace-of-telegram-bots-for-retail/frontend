export const PRICE_LIMIT = {
  min: 0,
  max: 50000,
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

export const COLORS_PREVIEW = [
  '#FAAE1A80',
  '#FF8F6EB2',
  '#75B2F380',
  '#00B78B99',
  '#D9D9D9',
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

export const profileNavigationCustomer = [
  {
    title: 'Профиль',
    links: [
      {
        name: 'Персональные данные',
        link: '/profile/user',
      },
    ],
  },
  {
    title: 'Заказы',
    links: [
      {
        name: 'Мои заказы',
        link: '/profile/orders',
      },
      {
        name: 'Мои возвраты',
        link: '/profile/returns',
      },
    ],
  },
  {
    title: 'Отзывы',
    links: [
      {
        name: 'Мои отзывы',
        link: '/profile/reviews',
      },
    ],
  },
  {
    title: 'Помощь',
    links: [
      {
        name: 'Связаться с нами',
        link: '/promo#contacts',
      },
    ],
  },
];

export const profileNavigationSeller = [
  {
    title: 'Профиль',
    links: [
      {
        name: 'Персональные данные',
        link: '/profile/user',
      },
      {
        name: 'Юридическая информация',
        link: '/profile/legal-info',
      },
    ],
  },
  {
    title: 'Управление товарами',
    links: [
      {
        name: 'Мои товары',
        link: '/profile/products',
      },
    ],
  },
  {
    title: 'Продажи',
    links: [
      {
        name: 'Статистика продаж',
        link: '/profile/statistics',
      },
      {
        name: 'Мои промокоды',
        link: '/profile/promocodes',
      },
    ],
  },
  {
    title: 'Помощь',
    links: [
      {
        name: 'Связаться с нами',
        link: '/promo#contacts',
      },
    ],
  },
];

// паттерны для валидации полей формы
export const USERNAME_PATTERN = '[А-Яа-я a-zA-Z0-9]{2,30}';
export const EMAIL_PATTERN = '[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]+';
export const PASSWORD_PATTERN = '(?=.*[A-z])(?=.*\\d)(?=.*[!@#$%^&*])(?=.{6,}).*';
export const HTTP_PATTERN = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)$/;

export const VALIDATION = {
  username: {
    message: 'Имя может содержать только кириллицу, латиницу, цифры или пробел',
  },
  email: {
    message: 'Введите корректный Email-адрес',
  },
  password: {
    message: 'Пароль должен состоять минимум из 6 символов, включать латиницу, цифру и спецсимвол',
  },
  errorMessage: {
    message: 'Сообщение может содержать только кириллицу, латиницу, цифры или пробел',
  },

};