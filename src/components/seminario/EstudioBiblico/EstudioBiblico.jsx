import React from "react";
import { NavLink } from "react-router-dom";
import "./EstudioBiblico.css";

const EstudioBiblico = () => {
  return (
    <div>
      <p className="p-3">
        Métodos de Estudio Bíblico es una introducción al método inductivo para
        estudiar la Biblia tomando en cuenta los pasos de la observación
        cuidadosa del texto, luego su interpretación, aplicación y correlación,
        más un vistazo ligero a otros métodos que el alumno puede utilizar en el
        auto estudio de la Palabra de Dios. También considera los beneficios de
        la lectura de las Escrituras y explica cómo preparar, organizar y
        dirigir estudios bíblicos con el fin de evangelizar y discípular.
      </p>
      <ul className="list-group">
        <li className="list-group-item">
          <NavLink
            className="nav-link p-3 bg-light"
            activeclassname="active"
            to="/Personal"
          >
            <h6>1. Personal</h6>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default EstudioBiblico;
