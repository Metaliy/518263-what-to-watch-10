import { Comment } from '../../types/comments';
import { ReviewComponent } from '../review-component/review-component';

type ReviewListComponentProps = {
  comments: Comment[]
}

export function ReviewListComponent ({comments}: ReviewListComponentProps) {
  return (
    <div className="catalog__films-list">
      {comments.map((comment) => (
        <ReviewComponent comment={comment} key={comment.id}/>
      ))}
    </div>
  );
}
