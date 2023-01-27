
import { Navigate, Outlet } from "react-router-dom";



const ProtectedRoute = () => {

     let auth = {token: localStorage.getItem("token")};
    return (
        auth.token ? <Outlet/> : <Navigate to='/login'/>
      )
};

export default ProtectedRoute;


