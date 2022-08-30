import dayjs from 'dayjs';
import { Review } from '../../types/comments';

type ReviewComponentProps = {
  comment: Review
}

export function ReviewComponent ({comment} :ReviewComponentProps) {
  return (

    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={comment.date}>{dayjs(comment.date).format('MMMM D, YYYY')}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>
  );
}
