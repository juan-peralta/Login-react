import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState({});
  const [jsonData, setJsonData] = useState([]);
  const token = localStorage.getItem("token");



 
  const obtenerDatos = async () => {
    const url = "http://127.0.0.1:8000/api/grupos-persona";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    const jsonData = await response.json();
    setJsonData(jsonData);
    
   

    
  };
  useEffect(() => {
    obtenerDatos();
  }, []);
  return (
    <div className="p-3 bg-primary">
      <h1 className="p-3 text-white">Listado de hermanos</h1>
     
      {/* <button onClick={obtenerDatos}>Obtener datos</button> */}
      <ul className="list-group p-4 list-group-flush">
        {jsonData.celula &&
          jsonData.celula.miembros.map((miembro, index) => (
            <li className="list-group-item" key={index}>{miembro.nombre} - {miembro.value}</li>
            
          ))}
             {jsonData.celula &&
          jsonData.celula.informe.map((inf, index) => (
            <li  className="list-group-item" key={index}>{inf.direccion} </li>
            
          ))}
              {jsonData.celula &&
          jsonData.celula.informe.map((inf, index) => (
            <li  className="list-group-item" key={index}>{inf.fecha}</li>
            
          ))}
        
      </ul>
    </div>
  );
};

export default Home;
