// import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FavoriteButtonIcon } from '../../components/favorite-button-icon/favorite-button-icon';
import {FilmsListComponent} from '../../components/films-list/films-list-component';
import { HeaderComponent } from '../../components/header-component';
import { PageTabsComponent } from '../../components/page-tabs-components/page-tabs-component';
import Spinner from '../../components/spinner/spinner';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { redirectToRoute } from '../../store/action';
import { changeFilmStatusAction, fetchCommentsAction, fetchFavoriteFilmsAction, fetchFilmAction, fetchSimilarFilmsAction } from '../../store/api-actions';

export function MoviePageScreen() {
  const { film, similarFilmsList, authorizationStatus, favoriteFilmsList} = useAppSelector((state) => state);
  const { id } = useParams();

  const [filmFavoriteStatus, setFilmFavoriteStatus] = useState(film?.isFavorite);

  const dispatch = useAppDispatch();


  useEffect(() => {
    setFilmFavoriteStatus(film?.isFavorite);
    dispatch(fetchCommentsAction(Number(id)));
    dispatch(fetchFilmAction(Number(id)));
    dispatch(fetchSimilarFilmsAction(Number(id)));
    dispatch(fetchFavoriteFilmsAction());
  }, [dispatch, film?.isFavorite, id]);

  useEffect(() => {
    if(authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFilmAction(Number(id)));
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [dispatch, filmFavoriteStatus, authorizationStatus]);

  if(!film) {
    return (
      <Spinner />
    );
  }

  return (
    <>
      <section className="film-card film-card--full" style={{backgroundColor: film?.backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <HeaderComponent />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${film?.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                  onClick={() => {
                    if (authorizationStatus !== AuthorizationStatus.Auth) {
                      dispatch(redirectToRoute(AppRoute.SignIn));
                    } else {
                      setFilmFavoriteStatus(!film.isFavorite);
                      dispatch(changeFilmStatusAction({
                        filmId: Number(film.id),
                        status: Number(!film.isFavorite),
                      }));
                    }
                  }}
                >
                  <FavoriteButtonIcon favoriteStatus={filmFavoriteStatus} authorizationStatus={authorizationStatus} />

                  <span>My list</span>
                  <span className="film-card__count">{favoriteFilmsList.length}</span>
                </button>
                {authorizationStatus === AuthorizationStatus.Auth && <Link to ={`/films/${ id }/review`} className="btn film-card__button">Add review</Link>}

              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={`${film?.name} poster`} width="218" height="327" />
            </div>
            <PageTabsComponent />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsListComponent films={similarFilmsList}/>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

