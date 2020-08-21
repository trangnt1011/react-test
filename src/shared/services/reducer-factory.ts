export const createReducer = (strategies, action, initialState) => {
  const state = initialState;
  const transformer = strategies[action.type] ?? strategies.__default__;
  return transformer(state, action);
}
