import React, {createContext, useState} from 'react'

export const DataContext = createContext();

const dataFixed = localStorage.getItem("token");


export const DataProvider = ({children}) => {

    const [datos, setDatos] = useState(dataFixed);
    
  
  return (
    <DataContext.Provider value={
        {datos, setDatos }
    }>
        {children}
    </DataContext.Provider>
  )
}

