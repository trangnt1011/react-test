import * as types from '@app/core/constant/types';

const initialState = {
  accessToken: null
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_TOKEN:
      return {
        ...state,
        accessToken: payload.accessToken
      };
    default:
      return state;
  }
}
