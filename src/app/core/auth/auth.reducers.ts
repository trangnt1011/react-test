import { createReducer } from '@shared/services/reducer-factory';

const initialState = {
  token: null
};

const strategies = {
  SET_TOKEN: setToken,
  __default__: state => state
};

function setToken(state, params) {
  return {
    ...state,
    token: params.payload.accessToken
  };
}

const authReducer = createReducer(strategies, initialState);

export default authReducer;
