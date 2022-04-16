import React from 'react';
import ReviewItem from './review-item/review-item';
import FormComment from './form-comment/form-comment';
import commentsProp from '../../../prop-types/comments.prop';

function renderReview({user: {avatarUrl, name}, rating, comment, date, id}) {
  return (
    <ReviewItem
      avatarUrl={avatarUrl}
      name={name}
      rating={rating}
      comment={comment}
      date={date}
      id={id}
      key={id}
    />
  );
}

function ReviewList({comments}) {
  const Reviews = comments.map((comment) => renderReview(comment));

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {Reviews}
      </ul>
      {/* only after login */}
      <FormComment />
    </section>
  );
}

ReviewList.propTypes = {
  comments: commentsProp,
};

export default ReviewList;
