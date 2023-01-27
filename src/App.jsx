import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import {BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Inicio from "./components/Inicio";
import Logout from "./components/Logout";
import User from "./components/User";
import ProtectedRoute from "./components/ProtectedRoute";



  const App = () => {
   

  return (
   
    <div className="App">
      <header className="App-header">
       
       
      
       
        <Router>
       <nav className="navbar navbar-expand-lg bg-body-tertiary bg-secondary container-fluid">
         
            
           <NavLink className="nav-link p-3 " to="/">
           <img src={logo} className="App-logo" alt="logo"  />
                </NavLink>
                <NavLink className="nav-link p-3" to="/Contact">
                    Contact
                </NavLink>
                <NavLink className=" nav-link p-3" activeclassname="active" to="/Home" >
                    Home
                </NavLink>
                <NavLink className="nav-link p-3" activeclassname="active" to="/Login" >
                    Login
                </NavLink>
                <NavLink className="nav-link p-3" activeclassname="active" to="/Logout" >
                  Logout
                </NavLink>
                
  
       </nav>

          <Routes>
          <Route path="/" element={<Inicio/>} />
            <Route path="/Contact" element={<Contact />}/>
              <Route path='/' element={<User/>} />
              <Route path='/Home' element={<Home/>} />
         
            <Route path="/Login" element={<LoginForm/>}/>
            <Route path="/Logout" element={<Logout/>}/>
           
          </Routes>
        
            
          
        </Router>

       
      </header>
    </div>
  );
}

export default App;
