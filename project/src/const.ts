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

export const mockFilms = [
  {
    Name: 'The Grand Budapest Hotel',
    Genre: 'Drama',
    Year: 2014,
    id: '1'
  },
  {
    Name: 'Another Hotel',
    Genre: 'Dorama',
    Year: 2020,
    id: '2'
  }
];
