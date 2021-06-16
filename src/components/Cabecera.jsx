import React from 'react'
import '../utils/css/Cabecera.css'
import Columnas from '../utils/Images/columnas.PNG'
import foto1 from '../utils/Images/foto_cabecera.jpeg'
import {Link, BrowserRouter} from 'react-router-dom'


function Cabecera () {
    return (
        <div className="Container_Cabecera">
            
            <div className="Container_logo1">  
            <img id="img1" src={Columnas} alt="Esta es la img" />
            </div>

            <div className="Botones">
            <BrowserRouter><Link to="#/Perfil">
                <button>Sobre mí</button>
            </Link>

            <Link to="/Academia">
                <button>Estudios y Experiencia</button>
            </Link>

            <Link to="/Projects">
                <button>Proyectos</button>
            </Link>

            <Link to="/Escribe">
                <button>Escríbeme</button>
            </Link></BrowserRouter>
            </div>


            
            <div className="Container_Textos"> 
            <div className="Container_foto1">  
            <img id="img1" src={foto1} alt="Esta es la img" />
            </div>
            <div className="Titulo_Cabecera">
            <h1> Hola, soy Aura Mejía </h1>
            <p> Soy estudiante de Desarrollo Web FrontEnd y de Derecho</p>
            </div>
    
            </div>
          
        </div>
    )
}
export default Cabecera