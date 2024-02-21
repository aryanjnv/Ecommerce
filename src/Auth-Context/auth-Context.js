import React, { useState, useEffect, useContext } from "react";
import CartContext from "../Components/Context/cart-context";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [isLoggedIn, setIsLoggedIn] = useState(!!initialToken);

  // const cartcontext=useContext(CartContext)

  useEffect(() => {
    const tokenExpiryTime = 5 * 60 * 1000; 
    let logoutTimer;

    if (token) {
      const tokenExpirationTime = parseInt(localStorage.getItem("tokenExpirationTime"));
      const timeRemaining = tokenExpirationTime - Date.now();

      if (timeRemaining > 0) {
        //  Timer to automatically logout the user after token expiry time
        logoutTimer = setTimeout(() => {
          logoutHandler();
          alert("Your session has expired. Please login again.");
        }, timeRemaining);
      } else {
        // If token has already expired logout immediately
        logoutHandler();
        alert("Your session has expired. Please login again.");
      }
    }

    return () => {
      
      clearTimeout(logoutTimer);
    };
  }, [token]);

  const loginHandler = async (token,email) => {
    setToken(token);
    localStorage.setItem("token", token);
    const tokenExpirationTime = Date.now() + 50 * 60 * 1000; 
    localStorage.setItem("tokenExpirationTime", tokenExpirationTime);
    localStorage.setItem('email',email)
    setIsLoggedIn(true);
    // await cartcontext.fetchData();
  
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpirationTime");
    setIsLoggedIn(false);
  };

  const contextValue = {
     token: token,
     isLoggedIn: isLoggedIn,
     login: loginHandler,
     logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
