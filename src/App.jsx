import { BrowserRouter, Routes, Route } from "react-router-dom"

import Nav from "./components/Nav"
import Sidenav from "./components/sidenav"

import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Nosotros from "./pages/nosotros"
import Productos from "./pages/productos"
import Contactanos from "./pages/contactanos"

function App() {
  return (
    <BrowserRouter>  
          <Nav/>        
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/nosotros" element={<Nosotros/>} />
            <Route path="/productos" element={<Productos/>} />
            <Route path="/contactanos" element={<Contactanos/>} />
            
          </Routes>
    </BrowserRouter>
  )
}

export default App
