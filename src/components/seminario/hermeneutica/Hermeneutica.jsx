import React from "react";
import { NavLink } from "react-router-dom";
import Introduccion from "./Introduccion";

const Hermeneutica = () => {
  return (
    <div>
      <h3 className="text-secondary text-center p-3">Hermeneutica</h3>

      <ul className="list-group">
        <li className="list-group-item"> 
        <NavLink
          className="nav-link p-3 bg-light"
          activeclassname="active"
          to="/Introduccion"
        >
          <h6>1. Introducción</h6>
        </NavLink></li>
        
       
      </ul>
    </div>
  );
};

export default Hermeneutica;
