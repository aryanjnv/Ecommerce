import React, { useContext } from "react";
import AuthContext from "../Auth-Context/auth-Context";

const Logout = () => {
  const authcontext = useContext(AuthContext);

  return <div>Logout</div>;
};

export default Logout;
