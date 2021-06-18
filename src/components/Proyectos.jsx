import React from 'react' /*Import React*/ 
import '../utils/css/Proyectos.css' /*Import the styles*/
import Icono_proyectos from '../utils/Images/proyectos.svg' /*Import the images*/


function Proyectos () { /*Name of the function*/
    return (
    <div className="Container_Proyectos">
        
            <div className="Texto">
            <h1> 
                Proyectos
            </h1>
           <a href="https://auramejia.github.io/Signos-Zoodiacales/"><button>Signos zoodiacales</button></a>
            </div>
            
            <div className="Container_icono_project">  
            <img id="ima" src={Icono_proyectos} alt="Esta es la img " />
            </div>


        </div>
    )
}
export default Proyectos