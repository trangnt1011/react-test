import { AnyAction } from 'redux';
import { put, takeLatest } from 'redux-saga/effects';

import { ApiService, ENDPOINT } from '@app/core/services/api.service';
import * as types from '@core/constants/types';

const http = new ApiService();

export function* signin({ payload }: AnyAction) {
  const res = yield http.post([ENDPOINT.auth.login], payload).then(res => res);
  yield put({ type: types.SET_TOKEN, payload: res });
}

export function* watchAuth() {
  yield takeLatest(types.SIGN_IN, signin);
}
