import { NameSpace } from '../root-reducer';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getAuthUser = (state) => state[NameSpace.USER].authUser;
export const getAuthUserAvatar = (state) => state[NameSpace.USER].authUser.avatarUrl;
export const getAuthUserEmail = (state) => state[NameSpace.USER].authUser.email;
export const getAuthUserId = (state) => state[NameSpace.USER].authUser.id;
export const getAuthUserIsProStatus = (state) => state[NameSpace.USER].authUser.isPro;
export const getAuthUserName = (state) => state[NameSpace.USER].authUser.name;
