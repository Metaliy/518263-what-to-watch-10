import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus} from '../const';
import { Film } from '../types/films';
import { changeGenre, loadComments, loadMovies, loadPromoFilm, requireAuthorization, setDataLoadedStatus } from './action';

type InitialState = {
  genre: string,
  filmList: Film[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  renderedFilmCount: number,
  promoFilm: Film | null,
  comments: Comment[],
}


const initialState: InitialState = {
  genre: 'All genres',
  filmList: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: true,
  renderedFilmCount: 0,
  promoFilm:  null,
  comments: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadMovies, (state, action) => {
      state.filmList = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    });
});

export {reducer};
