import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';

export const changeGenre = createAction('game/changeGenre', (value) => ({payload: value}));

export const getFilteredOnGenreFilmsList = createAction('game/getFilteredOnGenreFilmsList', (value) => ({payload: value}));

export const resetFilter = createAction('filter/resetFilter');

export const loadMovies = createAction('data/loadMovies', (value) => ({payload: value}));

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const redirectToRoute = createAction<AppRoute>('site/redirectToRoute');

export const loadPromoFilm = createAction('data/loadPromoFilm', (value) => ({payload: value}));

export const loadComments = createAction('data/loadComments', (value) => ({payload: value}));

export const loadFilm = createAction('data/loadFilm', (value) => ({payload: value}));

export const loadSimilarFilms = createAction('data/loadSimilarFilms', (value) => ({payload: value}));

export const postComment = createAction('data/postComment', (value) => ({payload: value}));
