import { createReducer } from '@shared/services/reducer-factory';

const initialState = {
  token: null
};

const strategies = {
  SET_TOKEN: reducerSetToken,
  __default__: state => state
};

function reducerSetToken(state, params) {
  return {
    ...state,
    token: params.payload.accessToken
  }
}

export default function(state = initialState, { type, payload }) {
  return createReducer(strategies, {type, payload}, initialState);
}
