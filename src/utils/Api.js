/* eslint-disable lines-between-class-members */
import { getToken } from './tokenStorage';

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this._credentials = options.credentials;
  }

  _checkResponse = async (res) => {
    if (res.ok) {
      if (res.status === 204) {
        return res;
      }
      const data = await res.json();
      return data;
    }
    const err = await res.json();
    return Promise.reject(err);
  };

  // Делаем запрос на сервер
  _makeRequest = async (url, method, body, params) => {
    // const token = localStorage.getItem('jwt');
    const token = getToken();
    // console.log('_makeRequest=>', token);
    if (token) {
      this._headers.Authorization = `Token ${token}`;
    }
    const parameters = params || '';
    const config = {
      method,
      headers: this._headers,
    };

    if (body !== undefined) {
      // console.log('_makeRequest => body ', body);
      config.body = JSON.stringify(body);
    }

    const res = await fetch(`${this._baseUrl}${url}${parameters}`, config);

    if (url === '/auth/token/logout/') {
      this._headers.Authorization = null;
    }
    return this._checkResponse(res);
  };

  // Авторизация. Получить токен
  postLogIn = (data) => this._makeRequest('/auth/token/login/', 'POST', data);

  // Use this endpoint to logout user (remove user authentication token).
  postLogOut = () => this._makeRequest('/auth/token/logout/', 'POST');

  // Создать пользователя
  postUser = (data) => this._makeRequest('/users/', 'POST', data);

  // Получить данные пользователя
  getUserMe = () => this._makeRequest('/users/me/', 'GET');

  // Изменить пользователя
  putUserMe = (data) => this._makeRequest('/users/me/', 'PUT', data);

  // Изменить одно поле пользователя
  patchUserMe = (data) => this._makeRequest('/users/me/', 'PATCH', data);

  // Удалить пользователя
  deleteUserMe = () => this._makeRequest('/users/me/', 'DELETE');

  // Поменять пароль
  changePassword = (data) =>
    this._makeRequest('/users/set_password/', 'POST', data);

  // Получить список заказов (в разработке).
  getOrders = () => this._makeRequest('/orders/', 'GET');

  // Создать заказ (в разработке).
  postOrders = () => this._makeRequest('/orders/', 'POST');

  // Получить заказ (в разработке).
  getOrdersId = (id) => this._makeRequest(`/orders/${id}`, 'GET');

  // Обновить заказ (в разработке).
  putOrdersId = (id) => this._makeRequest(`/orders/${id}`, 'PUT');

  // Обновить заказ (в разработке).
  patchOrdersId = (id) => this._makeRequest(`/orders/${id}`, 'PATCH');

  // Удалить заказ (в разработке).
  deleteOrdersId = (id) => this._makeRequest(`/orders/${id}`, 'DELETE');

  // Вьюсет для модели продуктов.
  getProducts = (params) =>
    this._makeRequest('/products/', 'GET', undefined, params);

  // Вьюсет для модели продуктов.
  postProduct = () => this._makeRequest('/products/', 'POST');

  // Вьюсет для модели продуктов.
  getProductId = (id) => this._makeRequest(`/products/${id}/`, 'GET');

  // Вьюсет для модели продуктов.
  putProductId = (id, data) =>
    this._makeRequest(`/products/${id}/`, 'PUT', data);

  // Вьюсет для модели продуктов.
  patchProductId = (id, data) =>
    this._makeRequest(`/products/${id}/`, 'PATCH', data);

  // Вьюсет для модели продуктов.
  deleteProductId = (id) => this._makeRequest(`/products/${id}/`, 'DELETE');

  postProductFavorite = (id) =>
    this._makeRequest(`/products/${id}/favorite/`, 'POST');

  deleteProductFavorite = (id) =>
    this._makeRequest(`/products/${id}/favorite/`, 'DELETE');

  // Вьюсет для отображения корзины.
  getCart = () => this._makeRequest('/cart/', 'GET');
  // Добавить бота в корзину, по его id. При нажатии на кнопку
  // "Добавить в корзину и '+'."
  postProductCart = (id) =>
    this._makeRequest(`/products/${id}/shopping_cart/`, 'POST');
  // Удалить бота из корзины, по его id. При нажатии на кнопку 'Удалить'.
  deleteProductCart = (id) =>
    this._makeRequest(`/products/${id}/shopping_cart/`, 'DELETE');
  // Уменьшить кол-во бота в корзине на 1. При нажатии на кнопку '-'.
  reduceProductCart = (id) =>
    this._makeRequest(`/products/${id}/shopping_cart/`, 'PATCH');
  // Выбрать одного бота в коризне. При нажатии на чек-бокс,
  // is_selected меняется True/False
  selectProductCart = (id) =>
    this._makeRequest(`/products/${id}/select/`, 'PATCH');
  // -> Выбрать всех ботов в корзине, вне зависимости от того,
  // какое состояние у них было, у всех is_selected становится True.
  // При нажатии на кнопку 'Выбрать всё'.
  selectAllProductsCart = () =>
    this._makeRequest('/products/select_all/', 'PATCH');
  // Убрать выбор всех ботов в корзине, у всех is_selected становится False.
  // При нажатии на кнопку 'Выбрать всё'.
  unselectAllProductsCart = () =>
    this._makeRequest('/products/select_all/', 'DELETE');
  // Удалить все выбраные товары, при нажатии на кнопку 'Удалить выбранные'.
  deleteSelectedProductsCart = () =>
    this._makeRequest('/products/delete_all_selected/', 'DELETE');
  // далить все выбраные товары, при нажатии на кнопку 'Удалить выбранные'.
  // Вводится промокод, если он корректный, поле 'promocode' становится True,
  // и цена со скидкой отображается в поле 'discount_sum',
  // если нет приходит в ответ "Некорректный промокод"
  addPromocodeCart = (data) =>
    this._makeRequest('/cart/promocode/', 'POST', data);
  // Загрузить мин-макс цену.
  getMinMaxCost = () => this._makeRequest('/get_min_max_cost/', 'GET');

  // Получить отзывы.
  getProductsReviews = (product_id) =>
    this._makeRequest(`/products/${product_id}/reviews/`, 'GET');

  // Добавить отзыв.
  postProductsReview = (product_id, data) =>
    this._makeRequest(`/products/${product_id}/reviews/`, 'POST', data);

  // Получить отпределенный отзыв.
  getProductReviewId = (product_id, review_id) =>
    this._makeRequest(`/products/${product_id}/reviews/${review_id}/`, 'GET');

  // Изменить одно поле отзыва.
  patchProductReviewId = (product_id, review_id, data) =>
    this._makeRequest(
      `/products/${product_id}/reviews/${review_id}/`,
      'PATCH',
      data
    );

  // Изменить все поля отзыва.
  putProductReviewId = (product_id, review_id, data) =>
    this._makeRequest(
      `/products/${product_id}/reviews/${review_id}/`,
      'PUT',
      data
    );

  // Удалить отзыв.
  deleteProductReview = (product_id, review_id) =>
    this._makeRequest(
      `/products/${product_id}/reviews/${review_id}/`,
      'DELETE'
    );
}

const config = {
  baseUrl: 'https://botmarketplace.ru/api',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const api = new Api(config);
