import React from 'react'
import "./Home.css"
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../redux/authReducer/action";
import {minus,plus} from '../assets/images'

const Cart = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.AuthReducer);
  
 
  
    const onPlusClick = (item, index) => {
      let temp = [...cart];
      temp[index] = { ...item, count: temp[index].count + 1 };
      dispatch(updateCart([...temp]));
    };
    const onMinusPress = (item, index) => {
      let temp = [...cart];
      if (temp[index].count === 1) {
        temp.splice(index, 1);
        dispatch(updateCart([...temp]));
      } else {
        temp[index] = { ...item, count: temp[index].count - 1 };
        dispatch(updateCart([...temp]));
      }
    };
  return (
    <div className="row">
    {cart.length!==0?
    cart.map((item) => {
      let index = cart.findIndex((element) => element.id === item.id);
      return (
        <div key={item.id} className=" container col-md-3 my-4">
          <div className="card container mx-5" style={{ width: "18rem" }}>
            <img
              src={item.image}
              style={{ width: "18rem", height: "17rem" }}
              className="card-img-top col-md-4"
              alt="..."
            />
            <div
              className="container card-body overflow-hidden"
              style={{ height: "15rem" }}
            >
              <h5 className="card-title">{item.title}</h5>
              <p className=" container card-text overflow-hidden">
                {item.description}
              </p>
            </div>
            <div className="mx-3 my-1 ">          
              <p className=" container card-text cursor-pointer text-success">
                Rs {item.price}
              </p>
            </div>
            <div className="mx-3 ">
              <p className=" container card-text cursor-pointer text-danger">
                Category: {item.category}
              </p>
            </div>
            {/* Additional card links if needed */}
            <div className="card-body">
                <div className="cart-number-container">
                  <img src={minus} alt='decrement icon'
                  className="increment-decrement-icons"
                    onClick={() => onMinusPress(item, index)}
                  />
                  <p
                    className="cart-item-count"
                  >
                    {cart[index].count}
                  </p>
                  <img src={plus} alt='increment icon'
                  className="increment-decrement-icons"
                    onClick={() => onPlusClick(item, index)}
                  />
                </div>
            </div>
          </div>
        </div>
      );
    }):(<h1 className=' my-5 d-flex justify-content-center'>No item to display</h1>)}
  </div>
  )
}

export default Cart
