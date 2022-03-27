import { nanoid } from 'nanoid';
import dayjs from 'dayjs';

import { getRandomInt } from '../utils/get-random';
import { LENGTH_ID, NUMBER_OF_COMMENTS } from '../constants/common';
import { COMMENTS } from './auxiliary';
import { getUniqItem, getAnyItem } from '../utils/get-item';
import users from './users';

function generateComment() {
  const user = getUniqItem(users);
  const comment = getAnyItem(COMMENTS);

  return {
    'comment': comment,
    'date': dayjs().subtract((getRandomInt(1, 5)), 'month').format('MM/YYYY'),
    'id': nanoid(LENGTH_ID),
    'rating': getRandomInt(0, 5),
    user,
  };
}

const comments = new Array(NUMBER_OF_COMMENTS).fill(undefined).map(() => generateComment());

// console.log('comments', comments);

export default comments;
