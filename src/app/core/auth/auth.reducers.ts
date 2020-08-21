import * as types from '@app/core/constant/types';

const initialState = {
  currentUser: null
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    default:
      return state;
  }
}
