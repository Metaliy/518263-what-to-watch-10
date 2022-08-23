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
    SmallCardImage,
    Trailer,
    Name
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
      <div className="small-film-card__image">
        {isActiveCard
          ? <VideoPlayerComponent src={Trailer} poster={SmallCardImage} />
          : <img src={SmallCardImage} alt={Name} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${ id}`} className="small-film-card__link">{Name}</Link>
      </h3>
    </article>
  );
}

export default SmallMovieCardComponent;
