const updateCart = (payload) => {
  return (dispatch) => {
    dispatch({type: 'Auth/cart', payload});
  };
};

export {updateCart};
