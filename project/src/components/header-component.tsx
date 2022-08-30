import { Link } from 'react-router-dom';
import { Film } from '../types/films';
import { LogoComponent } from './logo-component/logo-component';
import { UserBlockComponent } from './user-block-component/UserBlockComponent';

type HeaderProps = {
  isInMyList?: boolean;
  isInSignIn?: boolean;
  isInAddReview?: boolean;
  film?: Film;
}

export function HeaderComponent(props: HeaderProps): JSX.Element {
  return (
    <header className="page-header user-page__head">
      <LogoComponent/>
      {props.isInAddReview &&
      <nav className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link to={`/films/${props.film?.id}`} className="breadcrumbs__link">{props.film?.name}</Link>
          </li>
          <li className="breadcrumbs__item">
            <Link to={`/films/${props.film?.id}/review`} className="breadcrumbs__link">Add review</Link>
          </li>
        </ul>
      </nav> }

      {props.isInMyList && <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>}

      {props.isInSignIn && <h1 className="page-title user-page__title">Sign in</h1>}
      {!props.isInSignIn && <UserBlockComponent/>}

    </header>
  );
}
