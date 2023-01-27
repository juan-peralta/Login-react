import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
 
const navigate = useNavigate();
  function logout() {
    

    localStorage.clear();
    navigate("/Login");
  }
  return (
    

    <div className="btn btn-danger"onClick={logout}> 
      Cerrar Sesión
    </div>

    
  );
};

export default Logout