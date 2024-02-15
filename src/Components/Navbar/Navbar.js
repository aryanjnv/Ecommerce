import React, { useState } from 'react'
import classes from './Navbar.module.css'


const Navbar = (props) => {
    const [show,setShow]=useState(false)
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
            <p className={classes.p}>0</p>
        </div>
    </nav>
   
    </>
  )
}

export default Navbar