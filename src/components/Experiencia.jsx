import React from 'react' /*Import React*/ 
import '../utils/css/Experiencia.css' /*Import the styles*/
import foto3 from  '../utils/Images/experiencia.jpeg' /*Import the images*/


function Experiencia () { /*Name of the function*/
    return (
        <div className="Container_Experiencia">
             <div className="Container_imagen">  
            <img id="img1" src={foto3} alt="Esta es la img" />
            </div>

            <div className="Descripcion1">
            <h1> 
                Experiencia
            </h1>
            <div className="Desarrollo2"> 
            <p> 
            2021             
            </p>
            <h3> 
            Sack
            </h3>
            </div>
            <p>Desarrolladora de su página web</p>
            
            <div className="Desarrollo2"> 
            <p> 
            2020
            </p>
            <h3> 
            <a href="https://www.instagram.com/sackstore_/">Sack</a>
            </h3>
            </div>
            <p>Vendedora de ropa</p>
            </div>
        </div>
    )
}

export default Experiencia /*Export the function*/