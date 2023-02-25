import React from "react";
import { NavLink } from "react-router-dom";
import Introduccion from "./Introduccion";

const Hermeneutica = () => {
  return (
    <div>
      <h3 className="text-secondary text-center p-3">Hermeneutica</h3>
      <p className="p-3">
        Hermenéutica es la ciencia de interpretar correctamente la Biblia usando
        el método gramático-historico tomando en cuenta el impacto directo del
        contexto en el cual se dio la Palabra de Dios. Se sigue la
        interpretación literal de las palabras sin ignorar las figuras
        literarias y retóricas, las parábolas, la poesía y la profecía. Provee
        las herramientas para ser un buen intérprete de las Escrituras.
      </p>
      <ul className="list-group">
        <li className="list-group-item">
          <NavLink
            className="nav-link p-3 bg-light"
            activeclassname="active"
            to="/Introduccion"
          >
            <h6>1. Introducción</h6>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Hermeneutica;
