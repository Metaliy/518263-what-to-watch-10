import { useState } from 'react';
import { Film } from '../../types/films';
import SmallMovieCardComponent from '../small-movie-card-component/small-movie-card-component';

type MoreLikeThisComponentProps = {
  films: Film[]
}

export function MoreLikeThisComponent ({films} : MoreLikeThisComponentProps) {
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
