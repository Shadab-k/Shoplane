const  updateCart = (action) => {
  let  payload={
     cart:action
 
    }
     
  return  (dispatch) => {
    dispatch ({type: 'Update', payload});
   
    };

  };


export  {updateCart};
