import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction('game/changeGenre', (value) => ({payload: value}));

export const getFilteredOnGenreFilmsList = createAction('game/getFilteredOnGenreFilmsList', (value) => ({payload: value}));

export const resetFilter = createAction('filter/resetFilter');

