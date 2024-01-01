import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store from '../src/redux/store'
import Home from './components/Home';
import Clothing from './components/Clothing';
import Accesssories from './components/Accesssories';
import Navbar from './components/Navbar';
import SignUpPage from './components/SignUpPage';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<SignUpPage/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/Clothing" element={<Clothing />} />
          <Route path='/Accessories' element={<Accesssories />} />
        </Routes>
      </BrowserRouter>
    </div >
    </Provider>
  );
}

export default App;
