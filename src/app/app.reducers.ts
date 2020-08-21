import { combineReducers } from 'redux';

import auth from '@app/core/auth/auth.reducers';

const appReducer = combineReducers({
  auth
});

export default appReducer;
