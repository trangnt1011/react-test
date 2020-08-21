export const createReducer = ((strategies, initialState) =>
  (state = initialState, {type, payload}) => {
    const transformer = strategies[type] ?? strategies.__default__;
    return transformer(state, payload);
  }
);
