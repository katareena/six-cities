import { createReducer } from '@reduxjs/toolkit';
import { requireAuthorization, setActiveUser, signout } from '../action';
import { AuthorizationStatus } from '../../constants/common';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authUser: {
    avatarUrl: '',
    email: '',
    id: null,
    isPro: false,
    name: '',
  },
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setActiveUser, (state, action) => {
      state.authUser = {
        avatarUrl: action.payload.avatarUrl,
        email: action.payload.email,
        id: action.payload.id,
        isPro: action.payload.isPro,
        name: action.payload.name,
      };
    })
    .addCase(signout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.authUser = {
        avatarUrl: '',
        email: '',
        id: null,
        isPro: false,
        name: '',
      };
    });
});

export { user };
