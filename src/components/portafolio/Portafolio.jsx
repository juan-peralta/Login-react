import React from "react";
import imagen from './img/san.jpg';
import guagua from './img/guagua.jpg';
import casa from './img/casa.jpg';
import ferre from './img/ferre.jpg';
import chiled from "./img/chilede.jpg";
import rio from "./img/riopuelo.jpg";
import githubrepo from "./img/github.jpg"
import "./Portafolio.css";
const Portafolio = () => {
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col-12 col-sm-6">
          <h4>Santuario</h4>
          <img src={imagen} alt="" width={500} className="mx-auto d-block img-fluid"/>
          <p>Sitio corporativo Basado en Wordpress, CS, HTML, jQuery</p>
          <a href="https://santuarionaturalezacruzgrande.cl/" target="_blank" rel="noopener noreferrer">Enlace al sitio</a>
        </div>
        <div className="col-12 col-sm-6">
          <h4>Todoguagua</h4>
          <img src={guagua} alt="" width={500} className="mx-auto d-block img-fluid"/>
          <p>Tienda E-commerce basada en Wordpress, Woocommerce + flow</p>
          <a href="https://todoguagua.cl/" target="_blank" rel="noopener noreferrer">Enlace al sitio</a>
        </div>

        <div className="col-12 col-sm-6 ">
          <h4>Casa Construcción</h4>
          <img src={casa} alt="" width={500} className="mx-auto d-block img-fluid"/>
          <p>Sitio Web - HTML, CSS, JS, Wordpress</p>
          <a href="https://casaconstruccion.cl/" target="_blank" rel="noopener noreferrer">Enlace al sitio</a>
        </div>

        <div className="col-12 col-sm-6 ">
          <h4>Ferretería Las Brujas</h4>
          <img src={ferre} alt="" width={500} className="mx-auto d-block img-fluid"/>
          <p>Tienda Ecommcerce para ferretería - Wordpress + flow</p>
          <a href="https://ferreterialasbrujas.cl/" target="_blank" rel="noopener noreferrer">Enlace al sitio</a>
        </div>
        <div className="col-12 col-sm-6 ">
          <h4>Chiledeluxe</h4>
          <img src={chiled} alt="" width={500} className="mx-auto d-block img-fluid"/>
          <p>Sitio web turistico - Wordpress</p>
          <a href="https://cl.chiledeluxe.cl/wp/" target="_blank" rel="noopener noreferrer">Enlace al sitio</a>
        </div>
        <div className="col-12 col-sm-6 ">
          <h4>Rio Puelo</h4>
          <img src={rio} alt="" width={500} className="mx-auto d-block img-fluid"/>
          <p>Tienda Ecommerce venta de carnes - Wordpress + Woocommerce + flow</p>
          <a href="https://fundoriopuelo.cl/" target="_blank" rel="noopener noreferrer">Enlace al sitio</a>
        </div>
        <div className="col-12 col-sm-12 ">
          <h4>Backend</h4>
          <img src={githubrepo} alt="" width={500} className="mx-auto d-block img-fluid"/>
          
       
          <a href="https://github.com/juan-peralta/back_dirigentes/tree/main" target="_blank" rel="noopener noreferrer">Laravel sistema gestión asistencia</a>
          <p>backend INDAP privado</p>
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
