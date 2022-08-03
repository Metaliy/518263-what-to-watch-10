import { Reviewlist } from '../../types/reviews';
import { reviewComponent } from '../review-component/review-component';

export function reviewListComponent (reviews: Reviewlist) {
  return (
    <div className="catalog__films-list">
      {reviews.map((review) => (
        reviewComponent(review)
      ))}
    </div>
  );
}
