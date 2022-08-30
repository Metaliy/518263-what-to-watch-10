import { useAppSelector } from '../../hooks';
import { ReviewComponent } from '../review-component/review-component';

export function ReviewsTabComponent () {
  const comments = useAppSelector((state) => state.comments);
  // eslint-disable-next-line no-console
  console.log(comments);
  // eslint-disable-next-line no-console
  console.log(Array.from(comments)[0]);
  const firstHalfReviews: Comment[] = [];
  const twiceHalfReviews: Comment[] = [];
  let counter = 1;
  for (let i = 0; i < comments.length; i++) {
    if (counter % 2 === 0) {
      counter++;
      twiceHalfReviews.push(comments[i]);
    }else {
      counter++;
      firstHalfReviews.push(comments[i]);
    }
  }
  return (
    <div className="catalog__films-list">
      <div className="film-card__reviews-col">
        {firstHalfReviews.map((comment) => (
          <ReviewComponent comment={comment} key={comment.id}/>
        ))}
      </div>
      <div className="film-card__reviews-col">
        {twiceHalfReviews.map((comment) => (
          <ReviewComponent comment={comment} key={comment.id}/>
        ))}
      </div>
    </div>
  );
}
