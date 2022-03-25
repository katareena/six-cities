// Получение случайного целого числа в заданном интервале. Максимум и минимум включаются
export const getRandomInt = (lower, upper) => {
  const min = Math.ceil(lower);
  const max = Math.floor(upper);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
