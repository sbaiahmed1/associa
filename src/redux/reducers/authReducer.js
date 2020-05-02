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
        id: action.payload.id,
        name: action.payload.name,
        lastName: action.payload.lastName,
        type: action.payload.type,
        role: action.payload.role,
        email: action.payload.email,
        userName: action.payload.userName,
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
