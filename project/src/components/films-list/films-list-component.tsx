import { Film } from '../../types/films';
import { useState } from 'react';
import SmallMovieCardComponent from '../small-movie-card-component/small-movie-card-component';

type AddReviewPageProps = {
  films: Film[]
}

function FilmsListComponent({films}: AddReviewPageProps): JSX.Element {
  const [, setActiveCard] = useState('');
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        SmallMovieCardComponent(film, setActiveCard)
      ))}
    </div>
  );
}

export default FilmsListComponent;
