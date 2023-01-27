import React from 'react'

const User = () => {

    const nombre = localStorage.getItem("nombre");

  return (
  
    <div>{nombre}</div>
  )
}

export default User