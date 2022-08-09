import { Film } from '../../types/films';
import { Link } from 'react-router-dom';
import { VideoPlayerComponent } from '../video-player-component/video-player-component';
import { useState } from 'react';

function SmallMovieCardComponent({id, Name, SmallCardImage, Trailer}: Film, setActiveCard: CallableFunction): JSX.Element {
  const [isActiveCard, setIsActiveCard] = useState(false);

  const handleMouseEner = () => {
    setActiveCard(id);
    setIsActiveCard(!isActiveCard);
  };

  const handleMouseLeave = () => {
    setActiveCard('');
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
