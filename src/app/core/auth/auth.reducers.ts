import { createReducer } from '@app/core/helpers/reducer-factory';
import * as types from '@core/constants/types';

const initialState = {
  isLoading: false,
  isProcessing: false,
  hasError: false,
  data: null,
  error: null,
};

const signInSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  data: payload.data
});

const signInError = (state, payload) => ({
  ...state,
  isLoading: false,
  hasError: true,
  error: payload.error
});

const signIn = (state, payload) => ({
  ...state,
  isLoading: true
});

const strategies = {
  [types.SIGN_IN_SUCCESS]: signInSuccess,
  [types.SIGN_IN]: signIn,
  [types.SIGN_IN_ERROR]: signInError,
  __default__: state => state
};

const authReducer = createReducer(strategies, initialState);

export default authReducer;
