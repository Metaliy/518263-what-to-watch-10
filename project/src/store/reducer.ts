import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Film } from '../types/films';
import { changeGenre, getFilteredOnGenreFilmsList, loadMovies, requireAuthorization, resetFilter, setDataLoadedStatus } from './action';

type InitialState = {
  genre: string,
  filmList: Film[],
  filteredOnGenreFilmsList: Film[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
}


const initialState: InitialState = {
  genre: 'All genres',
  filmList: [],
  filteredOnGenreFilmsList: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilteredOnGenreFilmsList, (state, action) => {
      if (action.payload === 'All genres') {
        return {...state, filteredOnGenreFilmsList: state.filmList};
      }
      state.filteredOnGenreFilmsList = state.filmList.filter((film) => film.genre === action.payload);
    })
    .addCase(resetFilter, (state) => {
      state.filteredOnGenreFilmsList = initialState.filmList;
    })
    .addCase(loadMovies, (state, action) => {
      state.filmList = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});

export {reducer};
