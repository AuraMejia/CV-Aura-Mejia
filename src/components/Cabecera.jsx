import React from 'react' /*Import React*/ 
import '../utils/css/Cabecera.css'/*Import the styles*/
import Columnas from '../utils/Images/columnas.PNG' /*Import the images*/
import foto1 from '../utils/Images/foto_cabecera.jpeg' /*Import the images*/
import {Link, BrowserRouter} from 'react-router-dom' /*We are going to use this part to move in the Single page with the buttons to the other components*/ 


function Cabecera () { /*Name of the function*/
    return (
        <div className="Container_Cabecera"> 
            
            <div className="Container_logo1">  
            <img id="img1" src={Columnas} alt="Esta es la img" />
            </div>

            <div className="Botones">
            <Link exact to="/Perfil">
                <button>Sobre mí</button>
            </Link>

            <Link exact to="/Academia">
                <button>Estudios y Experiencia</button>
            </Link>

            <Link exact to="/Projects">
                <button>Proyectos</button>
            </Link>

            <Link exact to="/Escribe">
                <button>Escríbeme</button>
            </Link>
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
export default Cabecera /*Export of the funcion in the App.js*/