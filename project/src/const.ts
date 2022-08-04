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
