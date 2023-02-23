import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'


const Contact = () => {
  const {datos} = useContext(DataContext);
  return (
    <div className='text-primary text-center p-3'>

      <pre>
        <h1>Esta es la pagina de contacto</h1>
        {JSON.stringify(datos, null, 2)}
      </pre>
    </div>
  )
}

export default Contact