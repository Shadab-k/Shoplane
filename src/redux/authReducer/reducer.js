const initialState = {
  cart: [],
  token:""
};

const AuthReducer = (
  state = initialState,
  action
) => {
  const {type, payload} = action;
  switch (type) {
    case 'Update':
      return {...state, ...payload};
    default:
      return state;
  }
};

export default  AuthReducer