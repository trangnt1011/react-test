import { createReducer } from '@shared/services/reducer-factory';
import * as types from '@core/constants/types';
const initialState = {
  token: null
};

const setToken = (state, payload) => ({
  ...state,
  token: payload.accessToken
});

const strategies = {
  [types.SET_TOKEN]: setToken,
  __default__: state => state
};

const authReducer = createReducer(strategies, initialState);

export default authReducer;
