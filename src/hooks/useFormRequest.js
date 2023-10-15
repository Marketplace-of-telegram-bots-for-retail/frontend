import { useSelector } from 'react-redux';
import { REQUEST_OPTIONS } from '../utils/constants';

export const useFormRequest = () => {
  const formState = useSelector((state) => state.dataSearchForm);

  console.log(
    'creatingFormRequest => formState, REQUEST_OPTIONS',
    formState,
    REQUEST_OPTIONS
  );
  const formArry = [];

  if (formState.search) {
    // console.log(formState.search);
    const searchRequest = REQUEST_OPTIONS.search.concat(formState.search);
    // Консолька
    // console.log(searchRequest);
    // Добавить в массив
    formArry.push(searchRequest);
  }
  if (formState.sorting) {
    // console.log(formState.sorting);
    const sortingRequest = REQUEST_OPTIONS.sorting.concat(formState.sorting);
    // Консолька
    // console.log(sortingRequest);
    // Добавить в массив
    formArry.push(sortingRequest);
  }
  if (
    formState.prices &&
    (formState.prices[0] !== 0 || formState.prices[1] !== 0)
  ) {
    // console.log(formState.prices);
    const pricesBefore = REQUEST_OPTIONS.prices.concat(formState.prices[0]);
    const pricesAfter = REQUEST_OPTIONS.prices.concat(formState.prices[1]);
    console.log(pricesBefore, pricesAfter);
    const pricesRequest = [pricesBefore, pricesAfter].join('&');
    // Консолька
    // console.log(pricesRequest);
    // Добавить в массив
    formArry.push(pricesRequest);
  }
  if (formState.categories.length > 0) {
    // console.log(formState.categories);
    const categoriesRequest = formState.categories.map((item) =>
      REQUEST_OPTIONS.categories.concat(item)
    );
    if (categoriesRequest !== 1) {
      formArry.push(categoriesRequest.join('&'));
    } else {
      // Добавить в массив
      formArry.push(categoriesRequest);
    }
  }
  const formRequest = ['?'].concat(formArry).join('&');
  // Консолька запроса
  console.log(['?'].concat(formArry).join('&'));
  return { formRequest };
};
