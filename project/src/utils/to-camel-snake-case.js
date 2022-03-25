// import {camelCase, snakeCase} from 'lodash';

// export const toCamelCase = (data) => {
//   if (Array.isArray(data)) {
//     return data.map((value) => toCamelCase(value));
//   } else if (data !== null && data.constructor === Object) {
//     console.log(data);
//     return Object.keys(data).reduce(
//       (result, key) => ({
//         ...result,
//         [camelCase(key)]: toCamelCase(data[key]),
//       }),
//       {},
//     );
//   }
//   return data;
// };

// export const toSnakeCase = (data) => {
//   if (Array.isArray(data)) {
//     return data.map((value) => toSnakeCase(value));
//   } else if (data !== null && data.constructor === Object) {
//     return Object.keys(data).reduce(
//       (result, key) => ({
//         ...result,
//         [snakeCase(key)]: toSnakeCase(data[key]),
//       }),
//       {},
//     );
//   }
//   return data;
// };

const _ = require('lodash');

export const toCamelCase = (obj) => _.transform(obj, (acc, value, key, target) => {
  const camelKey = _.isArray(target) ? key : _.camelCase(key);

  acc[camelKey] = _.isObject(value) ? toCamelCase(value) : value;
});
