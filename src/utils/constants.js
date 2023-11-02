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

export const typeOfLegal = [
  {
    title: 'ООО',
    fullTitle: 'Общество с ограниченной ответственностью'
  },
  {
    title: 'ИП',
    fullTitle: 'Индивидуальный предприниматель'
  },
  {
    title: 'ОАО',
    fullTitle: 'Открытое акционерное общество'
  },
  {
    title: 'АО',
    fullTitle: 'Акционерное общество'
  },
  {
    title: 'ПАО',
    fullTitle: 'Публичное акционерное общество'
  },
  {
    title: 'ПК',
    fullTitle: 'Производственный кооператив'
  }
];

export const banks = [
  {
    title: 'Сбербанк'
  },
  {
    title: 'Тинькофф банк'
  },
  {
    title: 'Альфа-Банк'
  },
  {
    title: 'ВТБ банк'
  },
  {
    title: 'Газпромбанк'
  },
  {
    title: 'Райффайзен Банк'
  }
];

export const textTooltip = {
  nameShop: 'Название магазина будет отображаться в карточке товара. Не более 25 символов',
  typeLegal: 'Выберите юридическую форму вашей организации из предложенного списка. Эта информация указана в учредительных документах вашей компании',
  nameLegal: 'Введите официальное название вашей компании, как указано в учредительных документах',
  bank: 'Выберите название банка, в котором открыт ваш расчетный счет. Эту информацию можно найти в вашем договоре с банком или на чеках',
  inn: 'Идентификационный номер налогоплательщика - это уникальный номер, выданный налоговой службой. Вы можете найти его в учредительных документах вашей компании или на официальном сайте налоговой службы',
  bankAccount: 'Введите номер вашего расчетного счета, на который будут поступать платежи от покупателей. Этот номер вы можете найти в договоре с вашим банком или на бланке расчетного счета',
  korrAccount: 'Введите номер корреспондентского счета вашего банка. Это учетный счет вашего банка в центральном банке. Номер корреспондентского счета обычно указан в документах вашего банка или на его официальном сайте'
};