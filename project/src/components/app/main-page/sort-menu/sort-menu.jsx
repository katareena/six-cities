import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import { changeSortingValue, clickOnSortMenu } from '../../../../store/action';
import { SORTING_VALUES } from '../../../../constants/common';
import { getActiveSortingValue, getIsOpenSortMenu } from '../../../../store/ui/selectors';

function renderSortingItem(sortingValue, activeSortingValue, dispatch) {
  return (
    <li
      className={cn('places__option',{'places__option--active':sortingValue === activeSortingValue})}
      tabIndex="0"
      key={sortingValue}
      onClick={() => {
        dispatch(changeSortingValue(sortingValue));
        dispatch(clickOnSortMenu(false));
      }}
    >
      {sortingValue}
    </li>
  );
}

function SortMenu() {
  const activeSortingValue = useSelector(getActiveSortingValue);
  const isOpenSortMenu = useSelector(getIsOpenSortMenu);
  const dispatch = useDispatch();

  const sortingItems = SORTING_VALUES.map((sortingValue) => renderSortingItem(sortingValue, activeSortingValue, dispatch));

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by &thinsp;</span>
      <span className="places__sorting-type" tabIndex="0" onClick={() => dispatch(clickOnSortMenu(!isOpenSortMenu))}>
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

export default SortMenu;
