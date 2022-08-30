import { Filmslist } from '../types/films';

export function getFilteredFilmList (filmList: Filmslist, genre?: string) {
  let filteredFilmList = filmList;
  if (genre !== 'All genres') {
    filteredFilmList = filmList.filter((film) => film.genre === genre);
  }
  return filteredFilmList;
}
