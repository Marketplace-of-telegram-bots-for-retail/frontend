class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this._credentials = options.credentials;
  }

  // Проверяем ответ сервера
  _checkResponse = (res) => {
    // console.log('_checkResponse', res);
    return res.ok ? res.json() : Promise.reject(res.status);
  };

  // Делаем запрос на сервер
  _makeRequest = async (url, method, body, token) => {
    if (token !== undefined) {
      this._headers.Authorization = `Token ${token}`;
      console.log('_makeRequest => token !== undefined ', token);
    }

    const config = {
      method,
      headers: this._headers,
    };

    if (body !== undefined) {
      config.body = JSON.stringify(body);
    }

    const res = await fetch(`${this._baseUrl}${url}`, config);
    return this._checkResponse(res);
  };

  // Авторизация. Получить токен
  postLogIn = (data) => this._makeRequest('/auth/token/login/', 'POST', data);

  // Use this endpoint to logout user (remove user authentication token).
  postLogOut = () => this._makeRequest('/auth/token/logout/', 'POST');

  // Вьюсет для отображения корзины.
  getCart = () => this._makeRequest('/cart/', 'GET');

  // Вьюсет для отображения корзины.
  getCartId = (id) => this._makeRequest(`/cart/${id}`, 'GET');

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
  getProducts = () => this._makeRequest('/products/', 'GET');

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

  postProductCart = (id, data) =>
    this._makeRequest(`/products/${id}/shopping_cart/`, 'POST', data);

  deleteProductCart = (id) =>
    this._makeRequest(`/products/${id}/shopping_cart/`, 'DELETE');

  // Получить отзывы.
  getProductsReviews = (product_id) =>
    this._makeRequest(`/products/${product_id}/reviews`, 'GET');

  // Добавить отзыв.
  postProductsReview = (product_id) =>
    this._makeRequest(`/products/${product_id}/reviews`, 'POST');

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
  geleteProductReview = (product_id, review_id) =>
    this._makeRequest(
      `/products/${product_id}/reviews/${review_id}/`,
      'DELETE'
    );

  // Создать пользователя
  postUser = (data) => this._makeRequest('/users/', 'POST', data);

  // Получить данные пользователя
  getUserMe = (token) =>
    this._makeRequest('/users/me/', 'GET', undefined, token);

  // Изменить пользователя
  putUserMe = (data) => this._makeRequest('/users/me/', 'PUT', data);

  // Изменить одно поле пользователя
  patchUserMe = (data) => this._makeRequest('/users/me/', 'PATCH', data);

  // Удалить пользователя
  deletetUserMe = () => this._makeRequest('/users/me/', 'DELETE');
}

const config = {
  baseUrl: 'https://botmarketplace.ru/api',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const api = new Api(config);
