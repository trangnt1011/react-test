import { AnyAction } from 'redux';
import { put, takeLatest } from 'redux-saga/effects';

import { ApiService } from '@app/core/services/api.service';
import * as types from '@shared/constant/types';

const http = new ApiService();

export function* getTodos() {
  const res = yield http.get(['todos']).then(res => res);
  yield put({ type: types.SET_TODOS, payload: res });
}

export function* watchAuth() {
  yield takeLatest(types.GET_TODOS, getTodos);
}
