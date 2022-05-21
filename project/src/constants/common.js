export const CARDS_COUNT = 5;
export const LENGTH_ID = 5;
export const NUMBER_OF_USERS = 10;
export const NUMBER_OF_OFFERS = 20;
export const NUMBER_OF_COMMENTS = 3;
export const AVATAR_URL = 'https://i.pravatar.cc/128';

export const CardListClasses = {
  '': 'cities__places-list places__list tabs__content',
  'offer': 'near-places__list places__list',
};

export const CardItemClasses = {
  '': 'cities__place-card place-card',
  'offer': 'near-places__card place-card',
};

export const ButtonType = {
  OFFERS_LIST_CARD: 'OFFERS_LIST_CARD',
  OFFER_PAGE_CARD: 'OFFER_PAGE_CARD',
};

export const FavoritesButtonSetting = {
  'OFFERS_LIST_CARD': {
    CLASS: 'place-card',
    WIDTH: 18,
    HEIGHT: 19,
  },
  'OFFER_PAGE_CARD': {
    CLASS: 'property',
    WIDTH: 31,
    HEIGHT: 33,
  },
};

export const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id',
  NOT_FOUND: '/not_found',
  ERROR: '/error',
};

export const APIRoute = {
  OFFERS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
  ROOM: '/hotels/',
  COMMENTS: '/comments/',
  FAVORITES: '/favorite',
};

export const ResponseCodes = {
  SUCCESS: 200,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN', //default, when loading
};

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const CITIES = [
  {
    'location': {
      'latitude': 48.858823,
      'longitude': 2.347042,
      'zoom': 12,
    },
    'name': 'Paris',
  },
  {
    'location': {
      'latitude': 50.941311,
      'longitude': 6.982416,
      'zoom': 12,
    },
    'name': 'Cologne',
  },
  {
    'location': {
      'latitude': 50.840784,
      'longitude': 4.378409,
      'zoom': 12,
    },
    'name': 'Brussels',
  },
  {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.9,
      'zoom': 12,
    },
    'name': 'Amsterdam',
  },
  {
    'location': {
      'latitude': 53.557326,
      'longitude': 9.992256,
      'zoom': 12,
    },
    'name': 'Hamburg',
  },
  {
    'location': {
      'latitude': 51.225619,
      'longitude': 6.812501,
      'zoom': 12,
    },
    'name': 'Dusseldorf',
  },
];

export const DEFAULT_CITY = CITIES[0].name;

export const DEFAULT_SORTING = 'Popular';

export const SORTING_VALUES = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;
