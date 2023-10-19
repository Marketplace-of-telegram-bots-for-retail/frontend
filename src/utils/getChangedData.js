// функция принимает текущий объект пользователя и объект из формы редактирования
// и возвращает объект только со значениями, отличающимися от текущих

export default function getChangedData(currentData, newData) {
  // получаем массив ключей
  const inputKeys = Object.keys(newData);
  // получаем отфильтрованный массив с ключами, значения которых отличаются друг от друга
  const changedInputs = inputKeys.filter(
    (key) => currentData[key] !== newData[key]
  );
  // создаем объект в который будем складывать пары ключ-значение
  const changedData = {};
  // проходимся по массиву ключей и записываем информацию в объект
  changedInputs.forEach((input) => {
    changedData[input] = newData[input];
  });
  // возвращаем объект
  return changedData;
}
