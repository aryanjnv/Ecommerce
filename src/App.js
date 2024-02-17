import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Store from './Components/Store/Store';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';

import { useState } from 'react';
import Cart from './Components/Modal/Cart';
import CartProvider from './Components/Context/CartProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home';

function App() {
  const [cartIsShown,setCartIsShown]=useState(false)

  const showCartHandler=()=>{
    setCartIsShown(true)
  }
  const hideCartHandler=()=>{
    setCartIsShown(false)
    
  }
  return (
    <div>
      
      <CartProvider>
        <BrowserRouter>
        <Navbar onClick={showCartHandler}/>
        
        <Routes>
          <Route path='/' element={<Store/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
        </BrowserRouter>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
    
     
      {/* <Store/> */}
      <Footer/>
      {/* <Modal/> */}
      </CartProvider>
    
    </div>
  );
}

export default App;