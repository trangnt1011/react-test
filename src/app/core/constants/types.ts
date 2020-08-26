const apiGotSuccess = (type) => {
  return type + '_SUCCESS';
};

const apiGotError = (type) => {
  return type + '_ERROR';
};

export const SIGN_IN = 'SIGN_IN';
export const SIGN_IN_ERROR = apiGotError(SIGN_IN);
export const SIGN_IN_SUCCESS = apiGotSuccess(SIGN_IN);
