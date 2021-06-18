import React from 'react' /*Import React*/ 
import '../utils/css/Intereses.css' /*Import the styles*/
import hobbies from '../utils/Images/hobbies.jpeg' /*Import the images*/

function Intereses () { /*Function name*/
    return (
        <div className="Container_intereses">
             <div className="Container_foto4">  
            <img id="img1" src={hobbies} alt="Esta es la img" />
            </div>
            <div className="Descripcion3">
            <h1> 
                Hobbies e intereses
            </h1>
            <p> 
            Pertenezco al grupo académico de la Mesa Redonda que trata temas de Derecho Privado con un enfoque especial al campo colombiano. Soy una apasionada del baile de la salsa, la bachata y pertenecí al grupo repesentativo de la Universidad "Ritmo Libre". Además, practicó atletismo y me gusta la pintura, la literatura y el canto.  
            </p>
            </div>


        </div>
    )
}
export default Intereses /*Export the function in the js*/