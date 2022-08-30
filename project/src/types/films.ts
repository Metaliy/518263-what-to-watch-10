
export type Filmslist = Film[];

export type Film = {
  backgroundColor: string,
  backgroundImage: string,
  description: string,
  director: string,
  genre: string,
  id: string,
  isFavorite: boolean,
  name: string,
  posterImage: string
  previewImage: string
  previewVideoLink: string
  rating: number
  released: number
  runTime: number
  scoresCount: number
  starring: []
  videoLink: string
};
