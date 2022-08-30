export enum AppRoute {
  SignIn = '/login',
  MyList = '/mylist',
  AddReview = '/films/:id/review',
  Film = '/films/:id',
  Player = '/player/:id',
  Root = '/'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum tabNames {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export const timeOut = 1000;


export const FILMS_COUNT_PER_STEP = 8;


export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Promo = '/promo',
  Film = '/films/',
  Comments = '/comments/'
}


export enum Rating {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}


export const MIN_REVIEW_LENGTH = 50;
export const MAX_REVIEW_LENGTH = 400;
