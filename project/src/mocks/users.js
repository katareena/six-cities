import { nanoid } from 'nanoid';
import { toCamelCase } from '../utils/to-camel-snake-case';

import { LENGTH_ID, AVATAR_URL, NUMBER_OF_USERS } from '../constants/common';
import { USERS, BOOLEANS } from './auxiliary';
import { getAnyItem } from '../utils/get-item';

function generateUser() {
  const userName = getAnyItem(USERS);

  return {
    'avatar_url': `${AVATAR_URL}?rnd=${Math.random()}`,
    'email': `${userName}@gmail.com`,
    'id': nanoid(LENGTH_ID),
    'is_pro': BOOLEANS[Math.floor(Math.random() * BOOLEANS.length)],
    'name': userName,
    'token': 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
  };
}

let users = new Array(NUMBER_OF_USERS).fill(undefined).map(() => generateUser());

users = toCamelCase(users);

// console.log('users', users);

export default users;
