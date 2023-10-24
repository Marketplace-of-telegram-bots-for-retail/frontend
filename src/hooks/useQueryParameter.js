import { useSelector } from 'react-redux';
import { REQUEST_OPTIONS } from '../utils/constants';

export const useQueryParameter = () => {
  const { search, categories, prices, sorting } = useSelector(
    (state) => state.dataSearchForm
  );

  const formArry = [];

  if (search) {
    // console.log(search);
    const searchRequest = REQUEST_OPTIONS.search.concat(search);
    // Консолька
    // console.log(searchRequest);
    // Добавить в массив
    formArry.push(searchRequest);
  }
  if (sorting) {
    // console.log(sorting);
    const sortingRequest = REQUEST_OPTIONS.sorting.concat(sorting);
    // Консолька
    // console.log(sortingRequest);
    // Добавить в массив
    formArry.push(sortingRequest);
  }
  if (prices && (prices[0] !== 0 || prices[1] !== 0)) {
    // console.log(prices);
    const pricesBefore = REQUEST_OPTIONS.prices.concat(prices[0]);
    const pricesAfter = REQUEST_OPTIONS.prices.concat(prices[1]);
    // console.log(pricesBefore, pricesAfter);
    const pricesRequest = [pricesBefore, pricesAfter].join('&');
    // Консолька
    // console.log(pricesRequest);
    // Добавить в массив
    formArry.push(pricesRequest);
  }

  const categoriesArr = Object.keys(categories).filter(
    (item) => categories[item] === true && item
  );
  // console.log(categoriesArr);
  const categoriesRequest = categoriesArr.map((item) =>
    REQUEST_OPTIONS.categories.concat(item)
  );
  if (categoriesArr.length > 0) {
    if (categoriesRequest !== 1) {
      formArry.push(categoriesRequest.join('&'));
    } else {
      // Добавить в массив
      formArry.push(categoriesRequest);
    }
  }
  // console.log(formArry.length);
  // console.log(formArry);

  const formRequest =
    formArry.length !== 0 ? ['?'].concat(formArry).join('&') : null;
  // Консолька запроса
  return { formRequest };
};
