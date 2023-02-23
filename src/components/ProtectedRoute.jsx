import { Outlet, Navigate } from 'react-router-dom'
import { DataContext } from '../context/DataContext'
import {useContext} from 'react'
const ProtectedRoute = () => {
  const {datos} = useContext(DataContext);
  const datosValidos = datos && datos.length > 0; // Verificar si los datos son válidos

    return(
      datosValidos ? <Outlet/> : <Navigate to="/Login"/>
    )
}

export default ProtectedRoute
