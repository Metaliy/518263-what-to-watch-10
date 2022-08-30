import { Comment } from '../../types/comments';

type ReviewComponentProps = {
  comment: Comment
}

export function ReviewComponent ({comment} :ReviewComponentProps) {
  return (

    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={comment.date}>December 24, 2016</time>
        </footer>
      </blockquote>

      <div className="review__rating">8,9</div>
    </div>
  );
}
