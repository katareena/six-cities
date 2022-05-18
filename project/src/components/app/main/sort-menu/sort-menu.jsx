import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { connect } from 'react-redux';
import { changeSortingValue, clickOnSortMenu } from '../../../../store/action';
import { SORTING_VALUES } from '../../../../constants/common';

function renderSortingItem(sortingValue, activeSortingValue, clickOnSortMenuHandler, changeSortingValueHandler) {
  return (
    <li
      className={cn('places__option',{'places__option--active':sortingValue === activeSortingValue})}
      tabIndex="0"
      key={sortingValue}
      onClick={() => {
        changeSortingValueHandler(sortingValue);
        clickOnSortMenuHandler(false);
      }}
    >
      {sortingValue}
    </li>
  );
}

function SortMenu({activeSortingValue, isOpenSortMenu, clickOnSortMenuHandler, changeSortingValueHandler}) {
  const sortingItems = SORTING_VALUES.map((sortingValue) => renderSortingItem(sortingValue, activeSortingValue, clickOnSortMenuHandler, changeSortingValueHandler));

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by &thinsp;</span>
      <span className="places__sorting-type" tabIndex="0" onClick={() => clickOnSortMenuHandler(!isOpenSortMenu)}>
        {activeSortingValue}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpenSortMenu ? 'places__options--opened' : ''}`}>
        {sortingItems}
      </ul>
    </form>
  );
}

SortMenu.propTypes = {
  activeSortingValue: PropTypes.string.isRequired,
  isOpenSortMenu: PropTypes.bool.isRequired,
  clickOnSortMenuHandler: PropTypes.func.isRequired,
  changeSortingValueHandler: PropTypes.func.isRequired,
};

const mapStateToProps = ({UI}) => ({
  activeSortingValue: UI.activeSortingValue,
  isOpenSortMenu: UI.isOpenSortMenu,
});

const mapDispatchToProps = (dispatch) => ({
  changeSortingValueHandler(sortingValue) {
    dispatch(changeSortingValue(sortingValue));
  },
  clickOnSortMenuHandler(isOpenSortMenu) {
    dispatch(clickOnSortMenu(isOpenSortMenu));
  },
});

export { SortMenu };
export default connect(mapStateToProps, mapDispatchToProps)(SortMenu);
