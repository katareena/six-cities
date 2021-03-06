import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getAuthorizationStatus } from '../../../../store/user/selectors';
import { getComments } from '../../../../store/data/selectors';
import ReviewItem from './review-item/review-item';
import FormComment from './form-comment/form-comment';
import { AuthorizationStatus } from '../../../../constants/common';

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

function ReviewList({offerId}) {
  const comments = useSelector(getComments);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const Reviews = comments.map((comment) => renderReview(comment));

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {Reviews}
      </ul>
      {authorizationStatus === AuthorizationStatus.AUTH && <FormComment offerId={offerId}/>}
    </section>
  );
}

ReviewList.propTypes = {
  offerId: PropTypes.number.isRequired,
};

export default ReviewList;
