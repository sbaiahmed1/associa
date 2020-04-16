const init = {
  isLogged: false,
  name: null,
  lastName: null,
  type: null,
};

const LoginReducer = (state = init, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        isLogged: true,
        name: action.payload.name,
        lastName: action.payload.last,
        type: action.payload.type,
        role: action.payload.role,
        imageName: action.payload.imageName,
      };
    case 'LOGIN_FAILED':
      return {
        init,
      };
    default:
      return state;
  }
};
export default LoginReducer;
