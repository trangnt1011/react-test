import { createReducer } from '@shared/services/reducer-factory';
import * as types from '@core/constants/types';
const initialState = {
  token: null
};

const strategies = {
  [types.SET_TOKEN]: setToken,
  __default__: state => state
};

function setToken(state, params) {
  return {
    ...state,
    token: params.accessToken
  };
}

const authReducer = createReducer(strategies, initialState);

export default authReducer;
