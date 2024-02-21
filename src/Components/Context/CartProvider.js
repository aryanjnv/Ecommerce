import React, { useEffect, useState } from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {
    const [items,setItems]=useState([])
    const token=localStorage.getItem('token')

    const fetchData = async () => {
      const email = localStorage.getItem('email');
      const newEmail = email.replace(/[^\w\s]/gi, "");

      if (!email) {
          console.error('Email not found in localStorage');
          return;
      }

      const response = await fetch(`https://react-http-834f8-default-rtdb.firebaseio.com/cartItems/${newEmail}.json`);

      if (!response.ok) {
          console.error('Failed to fetch cart items');
          return;
      }

      const existingItems = await response.json();
      if (existingItems) {
          const updatedItems = Object.values(existingItems); // Convert object to array
          setItems(updatedItems);
      }
  };

  useEffect(() => {
      fetchData(); // Fetch data when component mounts
  }, [token]);
    
   
    const addItemHandler=async(item)=>{
        console.log('Cart Context',item)

     
      const email = localStorage.getItem('email');
      const newEmail = email.replace(/[^\w\s]/gi, "");
      if (!email) {
          console.error('Email not found in localStorage');
          return;
      }
  
      const response = await fetch(`https://react-http-834f8-default-rtdb.firebaseio.com/cartItems/${newEmail}.json`)
      
      if(!response.ok){
        console.error('Failed to fetch cart items');
        return;
      }
      const ExistingItems = await response.json();
      //console.log(data);
      let updatedItems=[]
      if(ExistingItems){
        updatedItems=Object.values(ExistingItems) //Convert Object to array

      }
      updatedItems.push(item)

      const updatedResponse = await fetch(`https://react-http-834f8-default-rtdb.firebaseio.com/cartItems/${newEmail}.json`,{
        method:'PUT',
        body:JSON.stringify(updatedItems),
        headers:{
          'Content-Type':'application/json'
        }
      })

      

     setItems(updatedItems)
     console.log(items)
        
      
    }
    const removeItemHandler=async(item,index)=>{

      const email = localStorage.getItem('email');
    const newEmail = email.replace(/[^\w\s]/gi, "");

    if (!email) {
        console.error('Email not found in localStorage');
        return;
    }

    const updatedItems = [...items]; // Create a copy of items array
    updatedItems.splice(index, 1); // Remove item at the specified index

    setItems(updatedItems); // Update the local state

    // Update the item list in Firebase
    const response = await fetch(`https://react-http-834f8-default-rtdb.firebaseio.com/cartItems/${newEmail}.json`, {
        method: 'PUT',
        body: JSON.stringify(updatedItems),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        console.error('Failed to delete item from cart at index:', index);
    } else {
        console.log('Item removed from cart at index:', index);
    }


    }
    const cartBlankHandler=async()=>{
      const email = localStorage.getItem('email');
      const newEmail = email.replace(/[^\w\s]/gi, "");
      let blankCart=[]
      const response = await fetch(`https://react-http-834f8-default-rtdb.firebaseio.com/cartItems/${newEmail}.json`, {
        method: 'PUT',
        body: JSON.stringify(blankCart),
        headers: {
            'Content-Type': 'application/json'
        }
    });
      setItems(blankCart)
    }

    let cartContext={
        items:items,
        addItem:addItemHandler,
        removeItem:removeItemHandler,
        fetchData:fetchData,
        cartBlank:cartBlankHandler
    }
  return (
   <CartContext.Provider value={cartContext}>
    {props.children}
   </CartContext.Provider>
  )
}

export default CartProvider
