import * as types from '@app/core/constants/types';

export const doSignin = (account: object) => ({
  type: types.SIGN_IN,
  payload: account
});
