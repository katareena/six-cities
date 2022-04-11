import { nanoid } from 'nanoid';
import { toCamelCase } from '../utils/to-camel-snake-case';
import { getRandomInt } from '../utils/get-random';
import { getRandomArray } from '../utils/get-item';
import { getAnyItem} from '../utils/get-item';
import { getRandomCoords } from '../utils/get-random-coords';
import { LENGTH_ID, AVATAR_URL, NUMBER_OF_HOTELS } from '../constants/common';
import { CITIES, BOOLEANS, TYPES, IMAGES, TITLE, COMMENTS, GOODS, USERS, COORDS } from './auxiliary';

function generateHotel() {
  return {
    'bedrooms': getRandomInt(1, 4),
    'city': getAnyItem(CITIES),
    'description': getAnyItem(COMMENTS),
    'goods': getRandomArray(GOODS),
    'host': {
      'avatar_url': `${AVATAR_URL}?rnd=${Math.random()}`,
      'id': nanoid(LENGTH_ID),
      'is_pro': BOOLEANS[Math.floor(Math.random() * BOOLEANS.length)],
      'name': getAnyItem(USERS),
    },
    'id': String(nanoid(LENGTH_ID)),
    'images': getRandomArray(IMAGES),
    'is_favorite': BOOLEANS[Math.floor(Math.random() * BOOLEANS.length)],
    'is_premium': BOOLEANS[Math.floor(Math.random() * BOOLEANS.length)],
    'location': getRandomCoords(COORDS), //coordinates of hotels only for Amsterdam
    'max_adults': getRandomInt(1, 4),
    'preview_image': getAnyItem(IMAGES),
    'price': getRandomInt(50, 300),
    'rating': getRandomInt(0, 5),
    'title': getAnyItem(TITLE),
    'type': getAnyItem(TYPES),
  };
}

let hotels = new Array(NUMBER_OF_HOTELS).fill(undefined).map(() => generateHotel());

hotels = toCamelCase(hotels);

// console.log('hotels', hotels);

export default hotels;
