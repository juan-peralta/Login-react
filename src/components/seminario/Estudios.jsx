import React from 'react'
import { NavLink } from "react-router-dom";

function Estudios() {
  return (
    <ul className="list-group">
    <li className="list-group-item">
      <NavLink
        className="nav-link p-3 bg-light"
        activeclassname="active"
        to="/IntroduccionMundoBiblico"
      >
        <h6>Mundo Biblico</h6>
      </NavLink>
      <NavLink
        className="nav-link p-3 bg-light"
        activeclassname="active"
        to="/Hermeneutica"
      >
        <h6>Hermeutica</h6>
      </NavLink>
      <NavLink
        className="nav-link p-3 bg-light"
        activeclassname="active"
        to="/EstudioBiblico"
      >
        <h6>Estudio Biblico</h6>
      </NavLink>
      <NavLink
        className="nav-link p-3 bg-light"
        activeclassname="active"
        to="/IntroduccionSat"
      >
        <h6>Sinopsis AT</h6>
      </NavLink>
    </li>
  </ul>
  )
}

export default Estudios