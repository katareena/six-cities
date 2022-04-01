import { getRandomInt } from './get-random';

export const getUniqItem = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const current = array.splice(randomIndex, 1)[0];

  return current;
};

export const getAnyItem = (array) => {
  const index = getRandomInt(0, array.length - 1);

  return array[index];
};

export const getRandomArray = (array) => {
  const randomArray = [];
  const randomArrayLength = getRandomInt(1, array.length);

  for (let i = 0; i < randomArrayLength; i++) {
    const item = array[getRandomInt(0, array.length-1)];
    randomArray.push(item);
  }

  return Array.from(new Set(randomArray));
};
