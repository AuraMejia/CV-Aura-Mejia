import React from 'react'
import '../utils/css/Proyectos.css'
import Icono_proyectos from '../utils/Images/proyectos.svg'


function Proyectos () {
    return (
    <div className="Container_Proyectos">
        
            <div className="Texto">
            <h1> 
                Proyectos
            </h1>
           <button>Signos zoodiacales</button>
            </div>
            
            <div className="Container_icono_project">  
            <img id="ima" src={Icono_proyectos} alt="Esta es la img " />
            </div>


        </div>
    )
}
export default Proyectos