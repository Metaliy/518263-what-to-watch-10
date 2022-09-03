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
  Comments = '/comments/',
  Favorite = '/favorite'
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

export const MIN_PASSWORD_LENGTH = 50;

export enum ProgressBar {
  Start = 0,
  End = 100,
}

export const invalidPasswordMessage = 'The password must be at least two characters and contain at least one number and one letter';
