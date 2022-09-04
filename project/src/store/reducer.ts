import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus} from '../const';
import { Review } from '../types/comments';
import { Film } from '../types/films';
import { changeGenre, changePostCommentErrorStatus, getAvatarUrl, loadComments, loadFavoriteFilmsList, loadFilm, loadMovies, loadPromoFilm, loadSimilarFilms, requireAuthorization, setDataLoadedStatus } from './action';

type InitialState = {
  genre: string,
  filmList: Film[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  promoFilm: Film | null,
  comments: Review[],
  similarFilmsList: Film[],
  film: Film | undefined ,
  avatarUrl: string | undefined,
  favoriteFilmsList: Film[],
  isCommentPosterror: boolean
}


const initialState: InitialState = {
  genre: 'All genres',
  filmList: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: true,
  promoFilm:  null,
  comments: [],
  similarFilmsList: [],
  film: undefined,
  avatarUrl: '',
  favoriteFilmsList: [],
  isCommentPosterror: false
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
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilmsList = action.payload;
    })
    .addCase(getAvatarUrl, (state, action) => {
      state.avatarUrl = action.payload;
    })
    .addCase(loadFavoriteFilmsList, (state, action) => {
      state.favoriteFilmsList = action.payload;
    })
    .addCase(changePostCommentErrorStatus, (state, action) => {
      state.isCommentPosterror = action.payload;
    });
});

export {reducer};
