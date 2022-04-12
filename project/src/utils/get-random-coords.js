import { getRandomInt } from './get-random';

export function getRandomCoords(array) {
  const randomInt = getRandomInt(0, array.length - 1);

  return {
    'latitude': array[randomInt][0],
    'longitude': array[randomInt][1],
    'zoom': 10,
  };
}
