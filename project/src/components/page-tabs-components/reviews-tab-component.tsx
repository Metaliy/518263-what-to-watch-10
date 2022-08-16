import { Reviewlist } from '../../types/reviews';
import { ReviewComponent } from '../review-component/review-component';

type ReviewsTabComponentProps = {
  reviews : Reviewlist
}

export function ReviewsTabComponent ({reviews}: ReviewsTabComponentProps) {
  const firstHalfReviews = reviews.slice(0, reviews.length / 2);
  const twiceHalfReviews = reviews.slice(reviews.length / 2, reviews.length);
  return (
    <div className="catalog__films-list">
      <div className="film-card__reviews-col">
        {firstHalfReviews.map((review) => (
          ReviewComponent(review)
        ))}
      </div>
      <div className="film-card__reviews-col">
        {twiceHalfReviews.map((review) => (
          ReviewComponent(review)
        ))}
      </div>
    </div>
  );
}
