import {FilmsListComponent} from '../../components/films-list/films-list-component';
import { useAppSelector } from '../../hooks';
import { HeaderComponent } from '../../components/header-component';


function MyListScreen() {
  const {filmList} = useAppSelector((state) => state);
  return (
    <div className="user-page">
      <HeaderComponent />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmsListComponent films={filmList} />
        </div>
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
  );
}

export default MyListScreen;
