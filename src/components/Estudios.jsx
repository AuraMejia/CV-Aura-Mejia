import React from 'react' /*Import React*/ 
import '../utils/css/Estudios.css' /*Import the styles*/
import Icono_estudios from '../utils/Images/vector_estudios.svg'  /*Import the images*/

function Estudios () { /*Name of the function*/
    return (
        <div className="Container_Estudios">

            <div className="Educacion">


            <h1>Estudios académicos</h1> 

            <div className="Desarrollo"> 
            <p> 
            2021             
            </p>
            <h3> 
                Técnico Laboral en Procesamiento y Digitación de Datos
            </h3>
            </div>
            <p>Kuepa Edutech</p>

            <div className="Desarrollo"> 
            <p> 
            2019-En curso             
            </p>
            <h3> 
            Abogada (Tercer año)
            </h3>
            </div>
            <p>Universidad Libre de Colombia</p>


            <div className="Desarrollo"> 
            <p> 
            2018            
            </p>
            <h3> 
            Bachillerato
            </h3>
            </div>
            <p>Gimnasio Monseñor Manuel María Camargo </p>
            </div>

            <div className="Container_img">  
            <img id="ima" src={Icono_estudios} alt="Esta es la img " />
            </div>
        </div>

    )
}
export default Estudios  /*Export of the funcion in the App.js*/