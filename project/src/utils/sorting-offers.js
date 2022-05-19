export function sortingOffers(activeSortingValue) {
  switch (activeSortingValue) {
    case 'Price: low to high':
      return (prev, next) => prev.price - next.price;
    case 'Price: high to low':
      return (prev, next) => next.price - prev.price;
    case 'Top rated first':
      return (prev, next) => next.rating - prev.rating;
    default:
      break;
  }
}
