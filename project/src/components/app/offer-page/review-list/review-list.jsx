import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReviewItem from './review-item/review-item';
import FormComment from './form-comment/form-comment';
import commentsProp from '../../../prop-types/comments.prop';
import { AuthorizationStatus } from '../../../../constants/common';
import { getAuthorizationStatus } from '../../../../store/user/selectors';
import { getComments } from '../../../../store/data/selectors';

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

function ReviewList({comments, authorizationStatus, offerId}) {
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
  comments: commentsProp,
  authorizationStatus: PropTypes.string.isRequired,
  offerId: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  comments: getComments(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({

});

export { ReviewList };
export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
