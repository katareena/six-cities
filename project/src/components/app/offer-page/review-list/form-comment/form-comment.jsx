import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { sendComment } from '../../../../../store/api-actions';
import { getPostedComment } from '../../../../../store/ui/selectors.js';
import { MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH } from '../../../../../constants/common.js';

function FormComment({offerId}) {
  const [rating, setRating] = useState(0);
  const [newComment, setNewComment] = useState('');
  const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(true);
  const postedComment = useSelector(getPostedComment);
  const dispatch = useDispatch();

  const handleRatingChange = (evt) => {
    const valueRating = evt.target.value;
    setRating(Number(valueRating));
  };

  const handleTextareaChange = (evt) => {
    const valueComment = evt.target.value;
    setNewComment(valueComment);
  };

  const handleSubmitBtnChange = () => {
    setIsSubmitBtnDisabled(!(rating > 0
      && newComment.length >= MIN_COMMENT_LENGTH
      && newComment.length <= MAX_COMMENT_LENGTH));
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (isSubmitBtnDisabled) {
      return;
    }

    Array.from(evt.target.elements).forEach(
      (element) => (element.disabled = true),
    );

    dispatch(sendComment({offerId: offerId, comment: newComment, rating: rating}));

    setRating(0);
    setNewComment('');
    setIsSubmitBtnDisabled(true);
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit} onChange={handleSubmitBtnChange}>

      {postedComment.isErrorPostedComment && <p style={{color: 'red'}}>Review sending error. Please try again later.</p>}

      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((index) => (
          <React.Fragment key={index}>
            <input
              className="form__rating-input visually-hidden"
              type="radio"
              name="rating"
              id={`${index}-stars`}
              value={index}
              onChange={handleRatingChange}
              checked={rating === index ? 'checked' : false}
            />
            <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={MIN_COMMENT_LENGTH}
        maxLength={MAX_COMMENT_LENGTH}
        value = {newComment}
        onChange={handleTextareaChange}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitBtnDisabled}
        >
        Submit
        </button>
      </div>

    </form>
  );
}

FormComment.propTypes = {
  offerId: PropTypes.number.isRequired,
};

export default FormComment;
