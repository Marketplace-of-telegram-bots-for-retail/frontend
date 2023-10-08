class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this._credentials = options.credentials;
  }
  // Проверяем ответ сервера
  _checkResponse = async (res) => {
    if (res.ok) {
      return await res.json();
    } else {
      const err = await res.json();
      if (err.message) {
        return Promise.reject(err.message);
      } else {
        return Promise.reject('Ошибка. Проверьте интернет соединение.');
      }
    }
  };

  // Делаем запрос на сервер
  _makeRequest = async (url, method, body, token) => {
    if (token !== undefined) {
      this._headers['Authorization'] = `Bearer ${token}`;
    }

    const config = {
      method,
      headers: this._headers,
    };

    if (body !== undefined) {
      config.body = JSON.stringify(body);
    }

    const res = await fetch(`${this._wbaseUrl}${url}`, config);
    return this._checkResponse(res);
  };

  // Авторизация. Получить токен
  // Use this endpoint to obtain user authentication token.
  // data: {
  //   "password": "string",
  //   "email": "string"
  // }
  // {
  //   "auth_token": "a542d0dfa2db95dfbaef99a0bfb35676b0be131e"
  // }
  postLogIn = (data) => this._makeRequest('/auth/token/login/', 'POST', data);
  // Use this endpoint to logout user (remove user authentication token).
  postLogOut = () => this._makeRequest('/auth/token/logout/', 'POST');

  // Вьюсет для отображения корзины.
  getCart = () => this._makeRequest('/cart/', 'GET');
  // Вьюсет для отображения корзины.
  getCartId = (id) => this._makeRequest(`/cart/${id}`, 'GET');

  // Для админки
  // Вьюсет для модели категорий.
  getCategories = () => this._makeRequest('/categories/', 'GET');
  // Вьюсет для модели категорий.
  // Уникальное целочисленное значение, идентифицирующее данную категорию.
  getCategoriesId = (id) => this._makeRequest(`/categories/${id}`, 'GET');

  // Получить список заказов (в разработке).
  getOrders = () => this._makeRequest('/orders/', 'GET');
  // Создать заказ (в разработке).
  postOrders = () => this._makeRequest('/orders/', 'POST');
  // Получить заказ (в разработке).
  getOrders = (id) => this._makeRequest(`/orders/${id}`, 'GET');
  // Обновить заказ (в разработке).
  putOrders = (id) => this._makeRequest(`/orders/${id}`, 'PUT');
  // Обновить заказ (в разработке).
  patchOrders = (id) => this._makeRequest(`/orders/${id}`, 'PATCH');
  // Удалить заказ (в разработке).
  deleteOrders = (id) => this._makeRequest(`/orders/${id}`, 'DELETE');

  // Вьюсет для модели продуктов.
  // ordering - Which field to use when ordering the results.
  // page - A page number within the paginated result set.
  // search - A search term.
  // Code	200
  getProducts = () => this._makeRequest(`/products/`, 'GET');
  //Вьюсет для модели продуктов.
  // No parameters
  // Code	201
  //  {
  //   "name": "string",
  //   "description": "string",
  //   "image_1": "string",
  //   "image_2": "string",
  //   "image_3": "string",
  //   "image_4": "string",
  //   "video": "string",
  //   "price": 2147483647,
  //   "category": [
  //     0
  //   ],
  //   "is_active": true
  // }
  postProduct = () => this._makeRequest(`/products/`, 'POST');
  // Вьюсет для модели продуктов.
  // id - A unique integer value identifying this товар.
  // Code	200
  // {
  //   "id": 0,
  //   "user": 0,
  //   "name": "string",
  //   "description": "string",
  //   "image_1": "string",
  //   "image_2": "string",
  //   "image_3": "string",
  //   "image_4": "string",
  //   "video": "string",
  //   "article": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //   "price": 2147483647,
  //   "rating": [
  //     4.5,
  //     2
  //   ],
  //   "category": [
  //     {
  //       "id": 0,
  //       "name": "string"
  //     }
  //   ],
  //   "is_favorited": false,
  //   "is_in_shopping_cart": false,
  //   "is_active": true,
  //   "created": "2023-10-08T06:47:42.140Z",
  //   "modified": "2023-10-08T06:47:42.140Z"
  // }
  getProductId = (id) => this._makeRequest(`/products/${id}/`, 'GET');
  // Вьюсет для модели продуктов.
  // id - A unique integer value identifying this товар.
  // {
  //   "name": "string",
  //   "description": "string",
  //   "image_1": "string",
  //   "image_2": "string",
  //   "image_3": "string",
  //   "image_4": "string",
  //   "video": "string",
  //   "price": 2147483647,
  //   "category": [
  //     0
  //   ],
  //   "is_active": true
  // }
  // Code	200
  // {
  //   "id": 0,
  //   "user": 0,
  //   "name": "string",
  //   "description": "string",
  //   "image_1": "string",
  //   "image_2": "string",
  //   "image_3": "string",
  //   "image_4": "string",
  //   "video": "string",
  //   "article": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //   "price": 2147483647,
  //   "rating": [
  //     4.5,
  //     2
  //   ],
  //   "category": [
  //     {
  //       "id": 0,
  //       "name": "string"
  //     }
  //   ],
  //   "is_favorited": false,
  //   "is_in_shopping_cart": false,
  //   "is_active": true,
  //   "created": "2023-10-08T06:47:42.140Z",
  //   "modified": "2023-10-08T06:47:42.140Z"
  // }
  putProductId = (id, data) =>
    this._makeRequest(`/products/${id}/`, 'PUT', data);

  // Вьюсет для модели продуктов.
  // id - A unique integer value identifying this товар.
  // {
  //   "name": "string",
  //   "description": "string",
  //   "image_1": "string",
  //   "image_2": "string",
  //   "image_3": "string",
  //   "image_4": "string",
  //   "video": "string",
  //   "price": 2147483647,
  //   "category": [
  //     0
  //   ],
  //   "is_active": true
  // }
  // Code	200
  // {
  //   "id": 0,
  //   "user": 0,
  //   "name": "string",
  //   "description": "string",
  //   "image_1": "string",
  //   "image_2": "string",
  //   "image_3": "string",
  //   "image_4": "string",
  //   "video": "string",
  //   "article": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //   "price": 2147483647,
  //   "rating": [
  //     4.5,
  //     2
  //   ],
  //   "category": [
  //     {
  //       "id": 0,
  //       "name": "string"
  //     }
  //   ],
  //   "is_favorited": false,
  //   "is_in_shopping_cart": false,
  //   "is_active": true,
  //   "created": "2023-10-08T06:47:42.140Z",
  //   "modified": "2023-10-08T06:47:42.140Z"
  // }
  patchProductId = (id, data) =>
    this._makeRequest(`/products/${id}/`, 'PATCH', data);

  // Вьюсет для модели продуктов.
  // id - A unique integer value identifying this товар.
  // Code	204
  deleteProductId = (id) => this._makeRequest(`/products/${id}/`, 'DELETE');

  // Вьюсет для модели продуктов.
  // id - A unique integer value identifying this товар.
  // {
  //   "name": "string",
  //   "description": "string",
  //   "image_1": "string",
  //   "image_2": "string",
  //   "image_3": "string",
  //   "image_4": "string",
  //   "video": "string",
  //   "price": 2147483647,
  //   "category": [
  //     0
  //   ],
  //   "is_active": true
  // }
  // Code	200
  // {
  //   "id": 0,
  //   "user": 0,
  //   "name": "string",
  //   "description": "string",
  //   "image_1": "string",
  //   "image_2": "string",
  //   "image_3": "string",
  //   "image_4": "string",
  //   "video": "string",
  //   "article": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //   "price": 2147483647,
  //   "category": [
  //     0
  //   ],
  //   "is_active": true,
  //   "created": "2023-10-08T07:00:34.072Z",
  //   "modified": "2023-10-08T07:00:34.072Z"
  // }
  postProductFavorite = (id) =>
    this._makeRequest(`/products/${id}/favorite/`, 'POST');

  // Вьюсет для модели продуктов.
  // id - A unique integer value identifying this товар.
  // Code	204
  deleteProductFavorite = (id) =>
    this._makeRequest(`/products/${id}/favorite/`, 'DELETE');

  // Добавление товара в корзину.
  // id - A unique integer value identifying this товар.
  // {
  //   "name": "string",
  //   "description": "string",
  //   "image_1": "string",
  //   "image_2": "string",
  //   "image_3": "string",
  //   "image_4": "string",
  //   "video": "string",
  //   "price": 2147483647,
  //   "category": [
  //     0
  //   ],
  //   "is_active": true
  // }
  // Code	200
  // {
  //   "id": 0,
  //   "user": 0,
  //   "name": "string",
  //   "description": "string",
  //   "image_1": "string",
  //   "image_2": "string",
  //   "image_3": "string",
  //   "image_4": "string",
  //   "video": "string",
  //   "article": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //   "price": 2147483647,
  //   "category": [
  //     0
  //   ],
  //   "is_active": true,
  //   "created": "2023-10-08T07:00:34.072Z",
  //   "modified": "2023-10-08T07:00:34.072Z"
  // }
  postProductCart = (id, data) =>
    this._makeRequest(`/products/${id}/shopping_cart/`, 'POST', data);

  // Удаление товара из корзины.
  // id - A unique integer value identifying this товар.
  // Code	204
  deleteProductCart = (id) =>
    this._makeRequest(`/products/${id}/shopping_cart/`, 'DELETE');

  // Получить отзывы.
  // id - A unique integer value identifying this товар.
  // Code	200
  // [
  //   {
  //     "id": 0,
  //     "user": {
  //       "id": 0,
  //       "email": "user@example.com",
  //       "first_name": "string",
  //       "last_name": "string",
  //       "phone": "string",
  //       "is_bayer": true,
  //       "is_seller": true
  //     },
  //     "products": "string",
  //     "created": "2023-10-08T07:05:59.207Z",
  //     "modified": "2023-10-08T07:05:59.207Z",
  //     "is_active": true,
  //     "rating": 5,
  //     "text": "string",
  //     "product": 0
  //   }
  // ]
  getProductsReviews = (product_id) =>
    this._makeRequest(`/products/${product_id}/reviews`, 'GET');

  // Добавить отзыв.
  // id - A unique integer value identifying this товар.
  // {
  //   "modified": "2023-10-08T08:04:48.098Z",
  //   "rating": 5,
  //   "text": "string"
  // }
  // Code	201
  // {
  //   "id": 0,
  //   "user": "string",
  //   "product": "string",
  //   "created": "2023-10-08T08:04:48.113Z",
  //   "modified": "2023-10-08T08:04:48.113Z",
  //   "rating": 5,
  //   "text": "string"
  // }
  postProductsReview = (product_id) =>
    this._makeRequest(`/products/${product_id}/reviews`, 'POST');

  // Получить отпределенный отзыв.
  // id - A unique integer value identifying this review.
  // product_id - A unique integer value identifying this товар.
  // Code	200
  // {
  //   "id": 0,
  //   "user": {
  //     "id": 0,
  //     "email": "user@example.com",
  //     "first_name": "string",
  //     "last_name": "string",
  //     "phone": "string",
  //     "is_bayer": true,
  //     "is_seller": true
  //   },
  //   "products": "string",
  //   "created": "2023-10-08T07:11:55.942Z",
  //   "modified": "2023-10-08T07:11:55.942Z",
  //   "is_active": true,
  //   "rating": 5,
  //   "text": "string",
  //   "product": 0
  // }
  getProductReviewId = (product_id, review_id) =>
    this._makeRequest(`/products/${product_id}/reviews/${review_id}/`, 'GET');

  // Изменить одно поле отзыва.
  // id - A unique integer value identifying this review.
  // product_id - A unique integer value identifying this товар.
  // {
  //   "modified": "2023-10-08T07:10:11.723Z",
  //   "rating": 5,
  //   "text": "string"
  // }
  // Code	200
  // {
  //   "id": 0,
  //   "user": {
  //     "id": 0,
  //     "email": "user@example.com",
  //     "first_name": "string",
  //     "last_name": "string",
  //     "phone": "string",
  //     "is_bayer": true,
  //     "is_seller": true
  //   },
  //   "products": "string",
  //   "created": "2023-10-08T07:11:55.942Z",
  //   "modified": "2023-10-08T07:11:55.942Z",
  //   "is_active": true,
  //   "rating": 5,
  //   "text": "string",
  //   "product": 0
  // }
  patchProductReviewId = (product_id, review_id, data) =>
    this._makeRequest(
      `/products/${product_id}/reviews/${review_id}/`,
      'PATCH',
      data
    );

  // Изменить все поля отзыва.
  // id - A unique integer value identifying this review.
  // product_id - A unique integer value identifying this товар.
  // {
  //   "modified": "2023-10-08T07:10:11.723Z",
  //   "rating": 5,
  //   "text": "string"
  // }
  // Code	200
  // {
  //   "id": 0,
  //   "user": "string",
  //   "product": "string",
  //   "created": "2023-10-08T07:37:32.794Z",
  //   "modified": "2023-10-08T07:37:32.794Z",
  //   "rating": 5,
  //   "text": "string"
  // }
  putProductReviewId = (product_id, review_id, data) =>
    this._makeRequest(
      `/products/${product_id}/reviews/${review_id}/`,
      'PUT',
      data
    );

  // Удалить отзыв.
  // id - A unique integer value identifying this review.
  // product_id - A unique integer value identifying this товар.
  // Code	204
  geleteProductReview = (product_id, review_id) =>
    this._makeRequest(
      `/products/${product_id}/reviews/${review_id}/`,
      'DELETE'
    );

  // USERS
  // Создать пользователя
  // {
  //   "email": "user@example.com",
  //   "first_name": "string",
  //   "last_name": "string",
  //   "phone": "string",
  //   "password": "string",
  //   "re_password": "string"
  // }
  // Code 201
  // {
  //   "email": "user@example.com",
  //   "first_name": "string",
  //   "last_name": "string",
  //   "phone": "string",
  //   "re_password": "string"
  // }
  postUser = (data) => this._makeRequest('/users/', 'POST', data);

  // Получить данные пользователя
  // Code 200
  // {
  //   "id": 0,
  //   "email": "user@example.com",
  //   "first_name": "string",
  //   "last_name": "string",
  //   "phone": "string",
  //   "is_bayer": true,
  //   "is_seller": true
  // }
  getUserMe = () => this._makeRequest('/users/me/', 'GET');

  // Изменить пользователя
  // {
  //   "email": "user@example.com",
  //   "first_name": "string",
  //   "last_name": "string",
  //   "phone": "string",
  //   "is_bayer": true,
  //   "is_seller": true
  // }
  // Code 200
  // {
  //   "id": 0,
  //   "email": "user@example.com",
  //   "first_name": "string",
  //   "last_name": "string",
  //   "phone": "string",
  //   "is_bayer": true,
  //   "is_seller": true
  // }
  putUserMe = (data) => this._makeRequest('/users/me/', 'PUT', data);

  // Изменить одно поле пользователя
  // {
  //   "email": "user@example.com",
  //   "first_name": "string",
  //   "last_name": "string",
  //   "phone": "string",
  //   "is_bayer": true,
  //   "is_seller": true
  // }
  // Code 200
  // {
  //   "id": 0,
  //   "email": "user@example.com",
  //   "first_name": "string",
  //   "last_name": "string",
  //   "phone": "string",
  //   "is_bayer": true,
  //   "is_seller": true
  // }
  patchUserMe = (data) => this._makeRequest('/users/me/', 'PATCH', data);

  // Удалить пользователя
  // Code 204
  deletetUserMe = () => this._makeRequest('/users/me/', 'DELETE');
}

const config = {
  baseUrl: 'https://botmarketplace.ru/api',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const mainApi = new Api(config);
