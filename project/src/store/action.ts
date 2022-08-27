import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';

export const changeGenre = createAction('game/changeGenre', (value) => ({payload: value}));

export const getFilteredOnGenreFilmsList = createAction('game/getFilteredOnGenreFilmsList', (value) => ({payload: value}));

export const resetFilter = createAction('filter/resetFilter');

export const loadMovies = createAction('data/loadMovies', (value) => ({payload: value}));

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
