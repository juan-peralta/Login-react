import React from "react";
import { NavLink } from "react-router-dom";

function IntroduccionMundoBiblico() {
  return (
    <div>
      <p className="p-3">
        Mundo Bíblico es el estudio de la historia de la nación de Israel: los
        patriarcas, el éxodo, la monarquía, el cisma, el exilio y el destierro.
        El curso comienza con el mundo de Abraham y da énfasis en las naciones
        que tuvieron influencia sobre el pueblo hebreo: Egipto, Asiria,
        Babilonia, Persia, Grecia y Roma. También se considera la geografía del
        medio-oriente y las costumbres en los tiempos bíblicos.
      </p>
      <ul className="list-group">
    <li className="list-group-item">
    
      <NavLink
        className="nav-link p-3 bg-light"
        activeclassname="active"
        to="/Asentamiento"
      >
        <h6>Asentamiento</h6>
      </NavLink>
    </li>
  </ul>
    </div>
     
  );
}

export default IntroduccionMundoBiblico;
