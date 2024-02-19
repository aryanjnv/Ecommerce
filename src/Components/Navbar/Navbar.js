import React, { useContext, useState } from "react";
import classes from "./Navbar.module.css";
import CartContext from "../Context/cart-context";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../Auth-Context/auth-Context";

const Navbar = (props) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const cartContext = useContext(CartContext);
  let quantity = cartContext.items.length;

  const authcontext = useContext(AuthContext);

  const isLoggedIn = authcontext.isLoggedIn;

  const logOutHandler = () => {
    navigate("/login");
    authcontext.logout();
  };
  return (
    <>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <NavLink to="/home">
            {" "}
            <li>Home</li>
          </NavLink>
          <NavLink to="/">
            <li>Store</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact </li>
          </NavLink>
          {isLoggedIn && (
            <NavLink to="/password">
              <li>Profile</li>
            </NavLink>
          )}
        </ul>
        <div className={classes.cart}>
          {!isLoggedIn && (
            <NavLink to="/login">
              <h3 className={classes.login}>Login</h3>
            </NavLink>
          )}
          {isLoggedIn && (
            <h3 onClick={logOutHandler} className={classes.login}>
              Logout
            </h3>
          )}

          {isLoggedIn && (
            <button className={classes.button} onClick={props.onClick}>
              Cart
            </button>
          )}
          {isLoggedIn && <p className={classes.p}>{quantity}</p>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
