import React from "react";
import { NavLink } from "react-router-dom";

function IntroduccionSat() {
  return (
    <div>
      <p className="p-3">
        Sinopsis del Antiguo Testamento es un estudio sintético de cada uno de
        los libros del Antiguo Testamento: Se examina el propósito de cada
        libro, quién fue el autor, cuándo y a quiénes se escribió. Se identifica
        cuál es el mensaje de cada libro y cómo se relaciona este con los demás.
        La meta de esta materia es darle al alumno un concepto panorámico de la
        Biblia.
      </p>
      <ul className="list-group">
        <li className="list-group-item">
          <NavLink
            className="nav-link p-3 bg-light"
            activeclassname="active"
            to="/PrimeraDeReyes"
          >
            <h6>Primera de Reyes</h6>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default IntroduccionSat;
