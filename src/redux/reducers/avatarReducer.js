const init = {
  imageUri: '',
};

const AvatarReducer = (state = init, action) => {
  switch (action.type) {
    case 'IMAGE_URI':
      return {
        imageUri: action.payload.uri,
      };
    default:
      return state;
  }
};
export default AvatarReducer;
