import { combineReducers } from 'redux';

import authReducer from '@app/core/auth/auth.reducers';
import articlesReducer from '@app/pages/articles/articles.reducres';

const appReducer = combineReducers({
  authReducer,
  articlesReducer
});

export default appReducer;
