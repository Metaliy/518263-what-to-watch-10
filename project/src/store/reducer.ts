import { createReducer } from '@reduxjs/toolkit';
import { mockFilms } from '../mocks/films';
import { changeGenre, getFilteredOnGenreFilmsList, resetFilter } from './action';

const originFilmList = mockFilms;


const initialState = {
  genre: 'All genres',
  filmList: originFilmList,
  filteredOnGenreFilmsList: originFilmList
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilteredOnGenreFilmsList, (state, action) => {
      if (action.payload === 'All genres') {
        return {...state, filteredOnGenreFilmsList: originFilmList};
      }
      state.filteredOnGenreFilmsList = state.filmList.filter((film) => film.Genre === action.payload);
    }).addCase(resetFilter, (state) => {
      state.filteredOnGenreFilmsList = initialState.filmList;
    });
});

export {reducer};
