
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Store from './Components/Store/Store';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';

import { useState } from 'react';
import Cart from './Components/Modal/Cart';

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
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Navbar onClick={showCartHandler}/>
      <Banner/>
      <Store/>
      <Footer/>
      {/* <Modal/> */}
    
    </div>
  );
}

export default App;