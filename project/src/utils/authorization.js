import { AuthorizationStatus } from '../constants/common';

export const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;
