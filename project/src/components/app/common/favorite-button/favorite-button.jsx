import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addOfferToFavorites } from '../../../../store/api-actions';
import { getAuthorizationStatus } from '../../../../store/user/selectors';
import { AppRoute, AuthorizationStatus, FavoritesButtonSetting } from '../../../../constants/common';

function FavoritesButton({ offerId, isFavorite, buttonType}) {
  const history = useHistory();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (authorizationStatus !== AuthorizationStatus.AUTH) {
      history.push(AppRoute.LOGIN);
    }

    dispatch(addOfferToFavorites({offerId, status: Number(!isFavorite)}));
  };

  return (
    <button
      className={`${FavoritesButtonSetting[buttonType].CLASS}__bookmark-button ${isFavorite ? `${FavoritesButtonSetting[buttonType].CLASS}__bookmark-button--active` : ''} button`}
      type="button"
      onClick={handleClick}
    >
      <svg className={`${FavoritesButtonSetting[buttonType].CLASS}__bookmark-icon`} width={FavoritesButtonSetting[buttonType].WIDTH} height={FavoritesButtonSetting[buttonType].HEIGHT}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

FavoritesButton.propTypes = {
  offerId: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  buttonType: PropTypes.string.isRequired,
};

export default FavoritesButton;
