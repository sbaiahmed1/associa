export const loggedIn = payload => {
  return {
    type: 'LOGIN_SUCCESS',
    payload,
  };
};
