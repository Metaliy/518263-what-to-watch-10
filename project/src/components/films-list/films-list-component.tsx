import { Film } from '../../types/films';
import { useState } from 'react';
import SmallMovieCardComponent from '../small-movie-card-component/small-movie-card-component';

type AddReviewPageProps = {
  films: Film[]
}

export function FilmsListComponent({films}: AddReviewPageProps): JSX.Element {
  const [, setActiveCard] = useState('');

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <SmallMovieCardComponent
          key={film.id}
          onSetActiveCard={setActiveCard}
          film={film}
        />
      ))}
    </div>
  );
}

