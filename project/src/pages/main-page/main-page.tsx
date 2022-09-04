import {FilmsListComponent} from '../../components/films-list/films-list-component';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, FILMS_COUNT_PER_STEP} from '../../const';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { GenreListComponent } from '../../components/genre-list-component/genre-list-component';
import { ShowMoreComponent } from '../../components/show-more-component/show-more-component';
import { useEffect, useState } from 'react';
import { getFilteredFilmList } from '../../utils/film-filter';
import { HeaderComponent } from '../../components/header-component';
import { redirectToRoute } from '../../store/action';
import { changeFilmStatusAction, fetchFavoriteFilmsAction, fetchPromoFilmAction } from '../../store/api-actions';
import NotFoundComponent from '../../components/not-found-component/not-found-component';
import { FavoriteButtonIcon } from '../../components/favorite-button-icon/favorite-button-icon';


function MainPageScreen(): JSX.Element {
  const { filmList, promoFilm, authorizationStatus, favoriteFilmsList} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((state) => state.genre);
  const genres = Array.from(['All genres', ...new Set(filmList.map((film) => film.genre))]);
  const [renderedFilmsCount, setRenderedFilmsCount] = useState(FILMS_COUNT_PER_STEP);
  const [ShowMoreComponentVisibility, setShowMoreComponentVisibility] = useState(true);
  const [filteredFilmList, setFilteredFilmList] = useState(getFilteredFilmList(filmList, activeGenre));
  const [promoFilmFavoriteStatus, setPromoFilmFavoriteStatus] = useState(promoFilm?.isFavorite);

  let favoriteFilmsCount = favoriteFilmsList.length;

  const handleLoadMoreButtonClick = () => {
    if (renderedFilmsCount >= filmList.length) {
      setShowMoreComponentVisibility(false);
    }
    const newRenderedFilmsCount = Math.min(filmList.length, renderedFilmsCount + FILMS_COUNT_PER_STEP);
    setRenderedFilmsCount(newRenderedFilmsCount);
  };

  const handleChangeGenreClick = () => {
    setRenderedFilmsCount(FILMS_COUNT_PER_STEP);
  };


  useEffect(() => {
    setFilteredFilmList(getFilteredFilmList(filmList, activeGenre));
    if (renderedFilmsCount >= FILMS_COUNT_PER_STEP && renderedFilmsCount < filteredFilmList.length) {
      setShowMoreComponentVisibility(true);
    } else {
      setShowMoreComponentVisibility(false);
    }

  }, [renderedFilmsCount, filteredFilmList.length, ShowMoreComponentVisibility, activeGenre, filmList]);

  useEffect(() => {
    if(authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
      dispatch(fetchPromoFilmAction());
    }
  }, [dispatch, promoFilmFavoriteStatus, authorizationStatus]);

  useEffect(() => {
    setPromoFilmFavoriteStatus(promoFilm?.isFavorite);
    dispatch(fetchPromoFilmAction());
    dispatch(fetchFavoriteFilmsAction());
    favoriteFilmsCount = favoriteFilmsList.length;
  }, [promoFilm?.isFavorite, authorizationStatus]);

  if (!promoFilm) {
    return (
      <NotFoundComponent />
    );
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={filmList[0].backgroundImage} alt={promoFilm?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <HeaderComponent />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm?.posterImage} alt={promoFilm?.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>


              <div className="film-card__buttons">
                <Link className="btn btn--play film-card__button" to={`Player/${ promoFilm?.id}`}>
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
                      setPromoFilmFavoriteStatus(!promoFilm.isFavorite);
                      dispatch(changeFilmStatusAction({
                        filmId: Number(promoFilm.id),
                        status: Number(!promoFilm.isFavorite),
                      }));
                    }
                  }}
                >
                  <FavoriteButtonIcon favoriteStatus={promoFilmFavoriteStatus} authorizationStatus={authorizationStatus} />

                  <span>My list</span>
                  <span className="film-card__count">{favoriteFilmsCount}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreListComponent genres={genres} currentGenre={activeGenre} resetRenderedFilmsCount={handleChangeGenreClick} />

          <FilmsListComponent films={filteredFilmList.slice(0, renderedFilmsCount)} />


          {ShowMoreComponentVisibility && <ShowMoreComponent onAddFilms={handleLoadMoreButtonClick} />}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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

export default MainPageScreen;
