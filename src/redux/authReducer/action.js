const setLanguage = (payload) => {
  return (dispatch) => {
    console.log('inSet');
    dispatch({type: 'Home/language', payload});
  };
};

export {setLanguage};
