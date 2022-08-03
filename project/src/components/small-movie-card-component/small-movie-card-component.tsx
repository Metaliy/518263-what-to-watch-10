import { Film } from '../../types/films';
import { Link } from 'react-router-dom';

function SmallMovieCardComponent({id, Name, SmallCardImage}: Film, setActiveCard: CallableFunction): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" key={id} onMouseEnter={() => setActiveCard(id)} id={id}>
      <div className="small-film-card__image">
        <img src={SmallCardImage} alt={Name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${ id}`} className="small-film-card__link">{Name}</Link>
      </h3>
    </article>
  );
}

export default SmallMovieCardComponent;
