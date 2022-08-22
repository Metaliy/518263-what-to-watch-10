import { Film } from '../../types/films';
import { useState } from 'react';
import SmallMovieCardComponent from '../small-movie-card-component/small-movie-card-component';

type AddReviewPageProps = {
  films: Film[]
}

export function FilmsListComponent({films}: AddReviewPageProps): JSX.Element {
  const [, setActiveCard] = useState('');
  const filmsList = films;
  return (
    <div className="catalog__films-list">
      {filmsList.map((film) => (
        SmallMovieCardComponent(film, setActiveCard)
      ))}
    </div>
  );
}

