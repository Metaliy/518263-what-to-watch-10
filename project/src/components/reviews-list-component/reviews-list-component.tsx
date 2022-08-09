import { Reviewlist } from '../../types/reviews';
import { ReviewComponent } from '../review-component/review-component';

export function ReviewListComponent (reviews: Reviewlist) {
  return (
    <div className="catalog__films-list">
      {reviews.map((review) => (
        ReviewComponent(review)
      ))}
    </div>
  );
}
