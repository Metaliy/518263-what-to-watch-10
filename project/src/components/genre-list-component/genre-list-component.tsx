import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeGenre, getFilteredOnGenreFilmsList } from '../../store/action';

type GenresListProps = {
  genres: string[];
  currentGenre: string;
  resetRenderedFilmsCount: () => void;
}

export function GenreListComponent ({genres, currentGenre, resetRenderedFilmsCount}: GenresListProps) {
  const dispatch = useAppDispatch();
  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) =>
          (
            <li
              onClick={(evt) => {
                dispatch(changeGenre((evt.target as HTMLInputElement).textContent));
                dispatch(getFilteredOnGenreFilmsList((evt.target as HTMLInputElement).innerHTML));
                resetRenderedFilmsCount();
              }}
              key={genre} className={currentGenre === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}
            >
              <Link to={''} className="catalog__genres-link">{genre}</Link>
            </li>
          )
        )
      }
    </ul>
  );
}
