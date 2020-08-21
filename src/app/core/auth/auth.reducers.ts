import * as types from '@app/core/constants/types';

const initialState = {
  token: null
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_TOKEN:
      return {
        ...state,
        token: payload.accessToken
      };
    default:
      return state;
  }
}
