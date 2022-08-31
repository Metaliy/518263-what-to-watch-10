import { Film } from '../../types/films';
import { Link } from 'react-router-dom';
import { VideoPlayerComponent } from '../video-player-component/video-player-component';
import { useState } from 'react';

type SmallMovieCardComponentProps = {
  onSetActiveCard: CallableFunction,
  film: Film
}

function SmallMovieCardComponent({onSetActiveCard, film}:SmallMovieCardComponentProps): JSX.Element {
  const [isActiveCard, setIsActiveCard] = useState(false);

  const {
    id,
    previewImage,
    previewVideoLink,
    name
  } = film;

  const handleMouseEner = () => {
    onSetActiveCard(id);
    setIsActiveCard(!isActiveCard);
  };

  const handleMouseLeave = () => {
    onSetActiveCard('');
    setIsActiveCard(!isActiveCard);
  };

  return (
    <article className="small-film-card catalog__films-card" key={id} onMouseEnter={handleMouseEner} onMouseLeave={handleMouseLeave} id={id}>
      <Link className="small-film-card__link" to={`/films/${ id}`}>

        <div className="small-film-card__image">
          {isActiveCard
            ? <VideoPlayerComponent src={previewVideoLink} poster={previewImage} />
            : <img src={previewImage} alt={name} width="280" height="175" />}
        </div>
        <h3 className="small-film-card__title">
          <p className="small-film-card__link">{name}</p>
        </h3>
      </Link>
    </article>
  );
}

export default SmallMovieCardComponent;
