import { Film } from '../../types/films';
import { useState } from 'react';
import SmallMovieCardComponent from '../small-movie-card-component/small-movie-card-component';

type AddReviewPageProps = {
  films: Film[],
  genre?: string
}

function FilmsListComponent({films, genre}: AddReviewPageProps): JSX.Element {
  const [, setActiveCard] = useState('');
  let filmsArray = films;
  if (genre) {
    filmsArray = filmsArray.filter((film) => film.Genre === genre);
  }
  return (
    <div className="catalog__films-list">
      {filmsArray.map((film) => (
        SmallMovieCardComponent(film, setActiveCard)
      ))}
    </div>
  );
}

export default FilmsListComponent;
