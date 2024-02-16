import React, { useContext, useState } from 'react'
import classes from './Navbar.module.css'
import CartContext from '../Context/cart-context'


const Navbar = (props) => {
    const [show,setShow]=useState(false)
    const cartContext=useContext(CartContext)
    let quantity=cartContext.items.length
  return (
    <>
    <nav className={classes.nav}>
        <ul className={classes.list}>
            <li>Home</li>
            <li>Store</li>
            <li>About</li>
        </ul>
        <div className={classes.cart}>
            <button className={classes.button} onClick={props.onClick}>Cart</button>
            <p className={classes.p}>{quantity }</p>
        </div>
    </nav>
   
    </>
  )
}

export default Navbar