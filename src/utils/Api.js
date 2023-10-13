class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this._credentials = options.credentials;
  }

  // Проверяем ответ сервера
  _checkResponse = (res) => {
    if (res.ok) {
      if (res.status === 204) {
        return res;
      }
      return res.json();
    }
    return Promise.reject(res);
  };

  // Делаем запрос на сервер
  _makeRequest = async (url, method, body, params) => {
    const token = localStorage.getItem('jwt');
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
      config.body = JSON.stringify(body);
    }

    const res = await fetch(`${this._baseUrl}${url}${parameters}`, config);
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
  deletetUserMe = () => this._makeRequest('/users/me/', 'DELETE');

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

  postProductCart = (id, data) =>
    this._makeRequest(`/products/${id}/shopping_cart/`, 'POST', data);

  deleteProductCart = (id) =>
    this._makeRequest(`/products/${id}/shopping_cart/`, 'DELETE');

  // Получить отзывы.
  getProductsReviews = (product_id) =>
    this._makeRequest(`/products/${product_id}/reviews`, 'GET');

  // Добавить отзыв.
  postProductsReview = (product_id, data) =>
    this._makeRequest(`/products/${product_id}/reviews`, 'POST', data);

  /*
  postProductsReview1 = (product_id, data) =>
    this._makeRequest(`/products/${product_id}/reviews`, 'POST', JSON.stringify({
      modified: data.modified,
      rating: data.rating,
      text: data.text,
    })
    );
    */
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
}

const config = {
  baseUrl: 'https://botmarketplace.ru/api',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const api = new Api(config);
