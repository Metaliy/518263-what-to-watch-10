import { Review } from '../../types/reviews';


export function ReviewComponent (review: Review) {
  return (

    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.Text}</p>

        <footer className="review__details">
          <cite className="review__author">{review.UserName}</cite>
          <time className="review__date" dateTime={review.Date}>December 24, 2016</time>
        </footer>
      </blockquote>

      <div className="review__rating">8,9</div>
    </div>
  );
}
