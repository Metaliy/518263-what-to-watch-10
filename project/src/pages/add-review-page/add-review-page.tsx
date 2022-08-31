import {AddReviewComponent} from '../../components/add-review-component/add-review-component';
import { useAppSelector } from '../../hooks';
import { HeaderComponent } from '../../components/header-component';
import { useParams } from 'react-router-dom';
import NotFoundComponent from '../../components/not-found-component/not-found-component';


function AddReviewPageScreen() {
  const {filmList} = useAppSelector((state) => state);
  const {id} = useParams();

  if (!id) {
    return null;
  }
  const film = filmList.find((element) => Number(element.id ) === Number(id));
  // eslint-disable-next-line no-console
  console.log(filmList.find((element) => element.id === id));

  if (!film) {
    return <NotFoundComponent />;
  }
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <HeaderComponent/>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film?.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewComponent />
      </div>

    </section>
  );
}

export default AddReviewPageScreen;
