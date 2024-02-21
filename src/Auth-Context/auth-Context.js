import React, { useState, useEffect } from "react";

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

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    const tokenExpirationTime = Date.now() + 5 * 60 * 1000; 
    localStorage.setItem("tokenExpirationTime", tokenExpirationTime);
    setIsLoggedIn(true);
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
