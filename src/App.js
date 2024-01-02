import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {store,persistor} from "../src/redux/store";
import Home from "./components/Home";
import Clothing from "./components/Clothing";
import Accesssories from "./components/Accesssories";
import Navbar from "./components/Navbar";
import SignUpPage from "./components/SignUpPage";
import Cart from "./components/Cart";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<SignUpPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/Clothing" element={<Clothing />} />
              <Route path="/Accessories" element={<Accesssories />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
