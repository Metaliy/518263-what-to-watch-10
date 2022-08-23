import { Filmslist } from '../../types/films';
import {FilmsListComponent} from '../../components/films-list/films-list-component';
import { Link } from 'react-router-dom';
import {AppRoute} from '../../const';
import { LogoComponent } from '../../components/logo-component/logo-component';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { GenreListComponent } from '../../components/genre-list-component/genre-list-component';
import { resetFilter } from '../../store/action';

type MainPageProps = {
  mockFilms: Filmslist;
}


function MainPageScreen({mockFilms}: MainPageProps): JSX.Element {
  const {filteredOnGenreFilmsList, filmList} = useAppSelector((state) => state);
  const genres = Array.from(['All genres', ...new Set(filmList.map((film) => film.Genre))]);
  const activeGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();
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
              <h2 className="film-card__title">{mockFilms[0].Name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{mockFilms[0].Genre}</span>
                <span className="film-card__year">{mockFilms[0].Year}</span>
              </p>

              <div className="film-card__buttons">
                <Link className="btn btn--play film-card__button" to={`Player/${ mockFilms[0].id}`}>
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


      <div className="page-content" onLoad={() => dispatch(resetFilter())}>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreListComponent genres={genres} currentGenre={activeGenre} />

          <FilmsListComponent films={filteredOnGenreFilmsList}/>


          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
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
