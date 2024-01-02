import React, { useEffect, useState } from "react";
import "./Home.css";
// import { Link } from "react-router-dom";
// import Home2 from "./Home2";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../redux/authReducer/action";
import {minus,plus} from '../assets/images'

const Home2 = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.AuthReducer);

  const getItems = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    setItems(await res.json());
  };

  useEffect(() => {
    getItems();
  }, []);

  const onAddToCart = (item) => {
    let index = cart.findIndex((element) => element.id === item.id);
    let temp = { ...item };
    if (index !== -1) {
      temp = { ...temp, count: temp.count + 1 };
    } else {
      temp.count = 1;
    }
    dispatch(updateCart([...cart, temp]));
  };

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

  const filteredAccessories = items.filter(
    (item) =>
      item.category === "jewelery" || item.category === "electronics"
  );

  return (
    <div className="container">
      <p className="my-4 mx-2 text-style head2">
        {" "}
        <b> Accessories for Men and Women</b>
      </p>
      <div className="row">
        {filteredAccessories.map((item) => {
          let index = cart.findIndex((element) => element.id === item.id);
          return (
            <div key={item.id} className=" container col-md-3 my-4">
              <div className="card container mx-5" style={{ width: "18rem" }}>
                <img alt="item data"
                  src={item.image}
                  style={{ width: "18rem", height: "17rem" }}
                  className="card-img-top col-md-4"
                  
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
                  {" "}
                  <p className=" container card-text cursor-pointer text-success">
                    Rs {item.price}
                  </p>
                </div>
                <div className="mx-3 ">
                  {" "}
                  <p className=" container card-text cursor-pointer text-danger">
                    Category: {item.category}
                  </p>
                </div>

                {/* Additional card links if needed */}
                <div className="card-body">
                  {index === -1 ? (
                      <button
                        type="button"
                        className="btn btn-primary mx-3"
                        onClick={() => onAddToCart(item)}
                      >
                        Add To Cart
                      </button>
                  ) : (
                    <div className="cart-number-container">
                      <img src={minus} alt=" decrement icon"
                      className="increment-decrement-icons"
                        onClick={() => onMinusPress(item, index)}
                      />
                      <p
                        className="cart-item-count"
                      >
                        {cart[index].count}
                      </p>
                      <img src={plus} alt="increment icon"
                      className="increment-decrement-icons"
                        onClick={() => onPlusClick(item, index)}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Home2;