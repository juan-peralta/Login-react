import React, { useState, useEffect } from "react";
const Tabla = () => {

  const [data, setData] = useState({});
  const [jsonData, setJsonData] = useState([]);
  const token = localStorage.getItem("token");


   const obtenerDatos = async () => {
    const url = "https://api.catedraldelespiritusanto.cl/public/api/grupos-persona";
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
    console.log(jsonData)
  };

  useEffect(() => {
    obtenerDatos();
  }, []);


  const [busqueda, setBusqueda] = useState('');
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'Pedro' },
    { id: 3, nombre: 'Maria' },
    { id: 4, nombre: 'Laura' },
  ]);

  const handleInputChange = event => {
    setBusqueda(event.target.value);
  };

  const usuariosFiltrados = usuarios.filter(usuario =>
    usuario.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    usuario.id.toString().toLowerCase().includes(busqueda.toLowerCase())

  );
  const miembrosFiltrados = jsonData.celula && jsonData.celula.miembros.filter(miembro =>
    miembro.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h1>Usuarios</h1>
      <input type="text" value={busqueda} onChange={handleInputChange} />
      <ul>
        {usuariosFiltrados.map(usuario => (
          <li key={usuario.id}>{usuario.id}{usuario.nombre}</li>
        ))}
          {miembrosFiltrados && miembrosFiltrados.map((miembro, index) => (
          <li className="list-group-item" key={index}>{miembro.nombre} - {miembro.value}</li>
        ))}
      </ul>
    </div>
  );
};
export default Tabla