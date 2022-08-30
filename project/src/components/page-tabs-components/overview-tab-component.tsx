import { Fragment } from 'react';
import { Rating } from '../../const';
import { Film } from '../../types/films';

type TabOverviewProps = {
  film: Film;
}

export function OverviewTabComponent ({film}: TabOverviewProps) {

  const getGrade = (rating: number): string => {
    if (rating >= 0 && rating <= 3) {
      return Rating.Bad;
    }

    if (rating >= 3 && rating <= 5) {
      return Rating.Normal;
    }

    if (rating >= 5 && rating <= 8) {
      return Rating.Good;
    }

    if (rating >= 5 && rating < 10) {
      return Rating.VeryGood;
    }

    if (rating === 10) {
      return Rating.Awesome;
    }
    return '';
  };

  return (
    <Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getGrade(film?.rating)}</span>
          <span className="film-rating__count">{film.scoresCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film?.description}</p>
      </div>
    </Fragment>
  );
}
