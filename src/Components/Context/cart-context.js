import React from "react";

const CartContext=React.createContext({
  items:[],
  addItem:(item)=>{},
  removeItem:(id)=>{},
  cartBlank:()=>{}

})

export default CartContext