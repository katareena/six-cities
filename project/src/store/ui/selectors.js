import { NameSpace } from '../root-reducer';

export const getActiveCity = (state) => state[NameSpace.UI].activeCity;
export const getIsOpenSortMenu = (state) => state[NameSpace.UI].isOpenSortMenu;
export const getActiveSortingValue = (state) => state[NameSpace.UI].activeSortingValue;
export const getPostedComment = (state) => state[NameSpace.UI].postedComment;
export const getIsPostedComment = (state) => state[NameSpace.UI].isPostedComment;
