import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH } from '../../const';
import { useAppDispatch } from '../../hooks';
import { postCommentAction } from '../../store/api-actions';
import { PostCommentData } from '../../types/post-comment-data';

export function AddReviewComponent () {

  const {id} = useParams();

  const dispatch = useAppDispatch();

  const [stateText, setStateText] = useState('');

  const [stateRating, setStateRating] = useState('');

  const onSubmit = (comment: PostCommentData) => {
    dispatch(postCommentAction(comment));
  };

  const handleOptionChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = evt.target;
    setStateRating(value);
  };

  if(stateRating !== '' && stateText.length >= MIN_REVIEW_LENGTH && stateText.length <= MAX_REVIEW_LENGTH) {
    onSubmit({
      rating: stateRating,
      comment: stateText,
      filmId: id
    });
  }

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars" onChange={handleOptionChange}>
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
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={(evt) => {setStateText(evt.target.value);}}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

