import { combineReducers } from 'redux';

// import exampleReducer from 'path/to/exampleReducer';
const exampleReducer = (state, {type, payload}) => {
  return {};
};

// Root reducer
const rootReducer = combineReducers({
  exampleReducer,
});

export default rootReducer;
