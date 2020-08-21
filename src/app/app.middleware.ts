import { all } from 'redux-saga/effects';

export default function* rootMiddleware() {
  yield all([
    // watchActions here
  ]);
}
