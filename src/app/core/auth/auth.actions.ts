import * as types from '@shared/constant/types';

export const loginUser = (username: string, password: string) => ({
  type: types.LOGIN_USER,
  payload: { username, password }
});
