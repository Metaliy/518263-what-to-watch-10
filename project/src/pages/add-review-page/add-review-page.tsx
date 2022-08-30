import {AddReviewComponent} from '../../components/add-review-component/add-review-component';
import { useAppSelector } from '../../hooks';
import { HeaderComponent } from '../../components/header-component';


function AddReviewPageScreen() {
  const {film} = useAppSelector((state) => state);
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film?.backgroundImage} alt={film?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <HeaderComponent/>

        <div className="film-card__poster film-card__poster--small">
          <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewComponent />
      </div>

    </section>
  );
}

export default AddReviewPageScreen;
