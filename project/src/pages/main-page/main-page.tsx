import { Filmslist } from '../../types/films';
import {FilmsListComponent} from '../../components/films-list/films-list-component';
import { Link } from 'react-router-dom';
import {AppRoute, FILMS_COUNT_PER_STEP} from '../../const';
import { LogoComponent } from '../../components/logo-component/logo-component';
import { useAppSelector } from '../../hooks';
import { GenreListComponent } from '../../components/genre-list-component/genre-list-component';
import { ShowMoreComponent } from '../../components/show-more-component/show-more-component';
import { useEffect, useState } from 'react';

type MainPageProps = {
  films: Filmslist;
}


function MainPageScreen({films}: MainPageProps): JSX.Element {
  const {filteredOnGenreFilmsList, filmList} = useAppSelector((state) => state);
  const genres = Array.from(['All genres', ...new Set(filmList.map((film) => film.genre))]);
  const activeGenre = useAppSelector((state) => state.genre);
  // eslint-disable-next-line no-console
  console.log(filmList);
  const [renderedFilmsCount, setRenderedFilmsCount] = useState(FILMS_COUNT_PER_STEP);
  const [ShowMoreComponentVisibility, setShowMoreComponentVisibility] = useState(true);

  const handleLoadMoreButtonClick = () => {
    if (renderedFilmsCount >= filteredOnGenreFilmsList.length) {
      setShowMoreComponentVisibility(false);
    }
    const newRenderedFilmsCount = Math.min(filteredOnGenreFilmsList.length, renderedFilmsCount + FILMS_COUNT_PER_STEP);
    setRenderedFilmsCount(newRenderedFilmsCount);
  };

  const handleChangeGenreClick = () => {
    setRenderedFilmsCount(FILMS_COUNT_PER_STEP);
  };

  useEffect(() => {
    if (renderedFilmsCount >= FILMS_COUNT_PER_STEP && renderedFilmsCount < filteredOnGenreFilmsList.length) {
      setShowMoreComponentVisibility(true);
    } else {
      setShowMoreComponentVisibility(false);
    }
  }, [renderedFilmsCount, filteredOnGenreFilmsList.length, ShowMoreComponentVisibility]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <LogoComponent />
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">

              <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{films[0].name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{films[0].genre}</span>
                <span className="film-card__year">{films[0].year}</span>
              </p>

              <div className="film-card__buttons">
                <Link className="btn btn--play film-card__button" to={`Player/${ films[0].id}`}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
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

          <FilmsListComponent films={filteredOnGenreFilmsList.slice(0, renderedFilmsCount )}/>


          {ShowMoreComponentVisibility && <ShowMoreComponent addFilmsFunction={handleLoadMoreButtonClick} />}
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
