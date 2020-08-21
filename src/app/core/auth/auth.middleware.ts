import { AnyAction } from 'redux';
import { put, takeLatest } from 'redux-saga/effects';

import { ApiService, ENDPOINT } from '@app/core/services/api.service';
import * as types from '@shared/constant/types';

const http = new ApiService();

export function* loginUserSaga({ payload }: AnyAction) {
  const res = yield http.post([ENDPOINT.auth.login], payload).then(res => res);
  yield put({ type: types.SET_CURRENT_USER, payload: res });
}

export function* watchAuth() {
  yield takeLatest(types.LOGIN_USER, loginUserSaga);
}
