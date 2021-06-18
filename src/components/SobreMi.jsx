import React from 'react' /*Import React*/ 
import '../utils/css/SobreMi.css' /*Import the styles*/
import foto from '../utils/Images/foto_mi.jpeg' /*Import the images*/

function SobreMi () {/*Name of the function*/
    return (
        <div className="Container_Mi">
            
            <div className="Descripcion">
            <h1> 
                Sobre mí
            </h1>
            <p> 
                 Mi nombre es Aura Sofía Mejía Ruiz, tengo 20 años, actualmente cursó tercer año de Derecho y estoy en un programa para convertirme en una desarrolladora front-end. Soy creativa, proactiva, trabajo en equipo y tengo capacidad de buscar soluciones y adaptarme a los entornos. En el 2018, gane el encuentro de filosofía del Sistema Educativo de la Arquidiócesis de Bogotá (SEAB) y participe en las olimpiadas de Filosofía de la Universidad Javeriana. En el 2021, obtuve una beca de Procesamiento y Digitación de Datos en la institución de Kuepa con enfoque de desarrollo front-end. Tengo conocimiento en los lenguajes de HTML5, CSS3, JavaScript y el framework React JS. 
            </p>
            </div>

            <div className="Container_foto">  
            <img id="img2" src={foto} alt="Esta es la img 2" />
            </div>

        </div>
    )
}
export default SobreMi /*Export of the funcion in the App.js*/