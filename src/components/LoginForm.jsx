import React, { useState } from "react";
import "./Login.css";
import { useNavigate,Navigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const LoginForm = () => {


  const [rut, setRut] = useState("");
  const [password, setPassword] = useState("");
 const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);



  function separateRut(rut) {
    const rut_parts = rut.split("-");
    const rut_number = rut_parts[0];
    const rut_verifier = rut_parts[1];
    return { rut_number, rut_verifier };
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { rut_number, rut_verifier } = separateRut(rut);
    
    setLoading(true); //mostrar spinner

    try {
      
      // Enviar una solicitud al servidor para autenticar al usuario
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        body: JSON.stringify({ rut: rut_number, dv: rut_verifier, password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      // Guardar el token recibido en el estado de la aplicación
      setToken(data.access_token);
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("nombre", data.data.nombre);
    
  
      console.log(data.access_token)
      setTimeout(() => {
        setLoading(false);
        if(data.access_token){ 
           navigate("/Home");
           window.location.reload(false);
        }else{
          return navigate("/Login");
        }
      }, 1000); // Esperar 2 segundos antes de redirigir
    


    } catch (error) {
      console.error(error);
    }
  };

  return (
  <div className="mb-3 container div-form">
    <form onSubmit={handleSubmit} className="p-3 ">
      
      <div className="mt-3 mb-3 ">
        <label className="">Rut</label>
        <input
          className="form-control"
          type="text"
          id="rut"
          placeholder="rut"
          value={rut}
          onChange={(e) => setRut(e.target.value)}
        />
      </div>
    

      <br />
      <div className="mb-1">
      <label className="">Contraseña</label>
        <input
          className="form-control"
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <div className="mb-1">
      { loading && (
        
          <Spinner animation="grow" variant="light" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        </div>
      <div className="mb-1">
        <button
          className="btn btn-secondary"
          type="submit">
          Iniciar sesión
        </button>
      </div>
    
    
    </form>
      </div>
  );
}

export default LoginForm;
