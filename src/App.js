import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Store from './Components/Store/Store';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';

import { useState } from 'react';
import Cart from './Components/Modal/Cart';
import CartProvider from './Components/Context/CartProvider';
import { BrowserRouter, Route, Routes,Switch } from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import ContactUs from './Components/ContactUs/ContactUs';
import ProductDetail from './Components/ProductDetail/ProductDetail';

function App() {
  const [cartIsShown,setCartIsShown]=useState(false)

  const showCartHandler=()=>{
    setCartIsShown(true)
  }
  const hideCartHandler=()=>{
    setCartIsShown(false)
    
  }
  const productsArr = [

    {
      id:1,
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    album:'Album 1',

    quantity:1
    
    },
    
    {
      id:2,
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    album:'Album 2',

    quantity:1
    
    },
    
    {
      id:3,
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    album:'Album 3',

    quantity:1
    
    },
    
    {
    id:4,
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    album: 'Album 4',
   
    quantity:1
    
    }
    
    ]
  return (
    <div>
      
      <CartProvider>
        
        <BrowserRouter>
        <Navbar onClick={showCartHandler}/>
        
        <Routes>
          <Route path='/' element={<Store productsArr={productsArr}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/products/:productId' element={<ProductDetail productsArr={productsArr}/>} exact/>
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