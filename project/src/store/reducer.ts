import { createReducer } from '@reduxjs/toolkit';
import { mockFilms } from '../mocks/films';
import { changeGenre, getFilteredOnGenreFilmsList } from './action';


const initialState = {
  genre: 'All genres',
  filmList: mockFilms,
  filteredOnGenreFilmsList: mockFilms
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilteredOnGenreFilmsList, (state, action) => {
      if (action.payload === 'All genres') {
        return {...state, filteredFilmList: mockFilms};
      }
      state.filteredOnGenreFilmsList = state.filteredOnGenreFilmsList.filter((film) => film.Genre === action.payload);
    });
});

export {reducer};
