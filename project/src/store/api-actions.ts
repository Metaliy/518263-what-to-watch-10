import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { changeFilmStatus, changePostCommentErrorStatus, loadComments, loadFavoriteFilmsList, loadFilm, loadMovies, loadPromoFilm, loadSimilarFilms, postComment, requireAuthorization, setDataLoadedStatus} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import { Film, Filmslist } from '../types/films.js';
import { PostCommentData } from '../types/post-comment-data.js';
import { ChangeFilmStatusData } from '../types/film-status-data.js';

export const fetchMovieAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchMovie',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Filmslist>(APIRoute.Films);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadMovies(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Promo);
    dispatch(loadPromoFilm(data));
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavoriteFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(APIRoute.Favorite);
    dispatch(loadFavoriteFilmsList(data));
  },
);

export const fetchCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchComments',
  async (id: number, {dispatch, extra: api}) => {
    const {data} = await api.get<Comment[]>(`${APIRoute.Comments}${id}`);
    dispatch(loadComments(data));
  },
);

export const fetchFilmAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async (id: number, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(`${APIRoute.Film}${id}`);
    dispatch(loadFilm(data));
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async (id: number, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(`${APIRoute.Film}${id}/similar`);
    dispatch(loadSimilarFilms(data));
  },
);

export const postCommentAction = createAsyncThunk<void, PostCommentData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postComment',
  async ({comment, rating, filmId}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<PostCommentData>(`${APIRoute.Comments}${filmId}`, {comment, rating});
      dispatch(postComment(data));
    }
    catch (error) {
      dispatch(changePostCommentErrorStatus(true));
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);


export const changeFilmStatusAction = createAsyncThunk<void, ChangeFilmStatusData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/changeFilmStatus',
  async ({filmId, status}, {dispatch, extra: api}) => {
    const {data} = await api.post<ChangeFilmStatusData>(`${APIRoute.Favorite}/${filmId}/${status}`, {filmId, status});

    dispatch(changeFilmStatus(data));
  },
);
