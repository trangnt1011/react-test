import * as types from '@app/core/constants/types';

export const loginUser = (username: string, password: string) => ({
  type: types.SIGN_IN,
  payload: { username, password }
});
