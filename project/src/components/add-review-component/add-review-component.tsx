import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changePostCommentErrorStatus } from '../../store/action';
import { postCommentAction } from '../../store/api-actions';
import { PostCommentData } from '../../types/post-comment-data';

export function AddReviewComponent () {

  const {id} = useParams();

  const dispatch = useAppDispatch();

  const {isCommentPosterror} = useAppSelector((state) => state);

  const [stateText, setStateText] = useState('');

  const [stateRating, setStateRating] = useState('');

  const [isPostButtonDisabled, setPostButtonDisabled] = useState(false);

  const [isPostTextDisabled, SetPostFormDisabled] = useState(false);

  const onSubmit = (comment: PostCommentData) => {
    dispatch(postCommentAction(comment));
  };

  const isCorrectReview = (stateRating !== '' && stateText.length >= MIN_REVIEW_LENGTH && stateText.length <= MAX_REVIEW_LENGTH);


  useEffect(() => {
    if(isCorrectReview) {
      setPostButtonDisabled(false);
    }
  }, [isCorrectReview]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(isCommentPosterror);
    if (isCommentPosterror) {
      toast.error('Error. Comment not sent, please try again later');
      dispatch(changePostCommentErrorStatus(false));
    }
  }, [isCommentPosterror, dispatch]);


  if (!id) {
    return null;
  }

  const handleRatingChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = evt.target;
    setStateRating(value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(isCorrectReview && !isCommentPosterror) {
      onSubmit({
        rating: stateRating,
        comment: stateText,
        filmId: id
      });
      SetPostFormDisabled(true);
      setPostButtonDisabled(true);
      toast.info('Comment sent successfull.');
      window.history.back();
    }
  };


  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit} >
      <div className="rating">
        <div className="rating__stars" onChange={handleRatingChange}>
          <input className="rating__input" id="star-10" type="radio" name="rating" value="10" />
          <label className="rating__label" htmlFor="star-10">Rating 10</label>

          <input className="rating__input" id="star-9" type="radio" name="rating" value="9" />
          <label className="rating__label" htmlFor="star-9">Rating 9</label>

          <input className="rating__input" id="star-8" type="radio" name="rating" value="8" defaultChecked />
          <label className="rating__label" htmlFor="star-8">Rating 8</label>

          <input className="rating__input" id="star-7" type="radio" name="rating" value="7" />
          <label className="rating__label" htmlFor="star-7">Rating 7</label>

          <input className="rating__input" id="star-6" type="radio" name="rating" value="6" />
          <label className="rating__label" htmlFor="star-6">Rating 6</label>

          <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
          <label className="rating__label" htmlFor="star-5">Rating 5</label>

          <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input className="rating__input" id="star-3" type="radio" name="rating" value="3" />
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
          <label className="rating__label" htmlFor="star-2">Rating 2</label>

          <input className="rating__input" id="star-1" type="radio" name="rating" value="1" />
          <label className="rating__label" htmlFor="star-1">Rating 1</label>
        </div>
      </div>

      <div className="add-review__text">
        <textarea disabled={isPostTextDisabled} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={(evt) => {setStateText(evt.target.value);}} minLength={MIN_REVIEW_LENGTH} maxLength={MAX_REVIEW_LENGTH}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isPostButtonDisabled}>Post</button>
        </div>

      </div>
    </form>
  );
}

