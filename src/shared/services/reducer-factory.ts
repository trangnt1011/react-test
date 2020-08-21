export const createReducer = ((strategies, initialState) =>
  (state = initialState, action) => {
    const transformer = strategies[action.type] ?? strategies.__default__;
    return transformer(state, action);
  }
);
