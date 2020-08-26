import * as types from '@app/core/constants/types';

export const signIn = (account: object) => ({
  type: types.SIGN_IN,
  payload: account
});

export const signInSuccess = (payload) => ({
  type: types.SIGN_IN_SUCCESS,
  payload
});

export const signInError = (payload) => ({
  type: types.SIGN_IN_ERROR,
  payload
});
