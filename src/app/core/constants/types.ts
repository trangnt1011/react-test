const makeApiTypes = (type: string) => ({
  [`${type}`]: type,
  [`${type}_SUCCESS`]: `${type}_SUCCESS`,
  [`${type}_ERROR`]: `${type}_ERROR`
});
export const TYPES = {
  ...makeApiTypes('SIGN_IN')
};
