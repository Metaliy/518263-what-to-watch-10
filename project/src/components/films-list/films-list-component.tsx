import { Filmslist } from '../../types/films';
import { useState } from 'react';
import SmallMovieCardComponent from '../small-movie-card-component/small-movie-card-component';


function FilmsListComponent(films: Filmslist): JSX.Element {
  const [activeCardId, setActiveCard] = useState('');
  // eslint-disable-next-line no-console
  console.log(activeCardId);
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        SmallMovieCardComponent(film, setActiveCard)
      ))}
    </div>
  );
}

export default FilmsListComponent;
