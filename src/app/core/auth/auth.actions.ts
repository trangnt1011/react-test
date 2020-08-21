import * as types from '@app/core/constant/types';

export const loginUser = (username: string, password: string) => ({
  type: types.SIGN_IN,
  payload: { username, password }
});
