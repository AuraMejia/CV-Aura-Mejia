import React from 'react' /*Import React*/ 
import '../utils/css/Formulario.css'  /*Import the styles*/
import Icono_form from '../utils/Images/formulario.svg' /*Import the images*/

class Formulario extends React.Component {

    render() {
      return (
        <div className="Container_datos">
        <div className="Container_icono">  
            <img id="ima" src={Icono_form} alt="Esta es la img " />
            </div>
        <form action="aurasofiamejia2805@gmail.com" method="post" enctype="multipart/form-data">
            <h1> 
                Escríbeme
            </h1>
          <p />
          <input type="text" name="nya" id="nombre" placeholder="Nombre" />
          <p />
          <input type="text" name="email" id="email" placeholder="Email" />
          <p/>
          <input type="text" name="Telefono" id="tel" placeholder="Teléfono" />
          <p/>
          <input type="text" name="Mensaje" id="mensaje" placeholder="Mensaje"/>
          <p/><p />
          <input type="submit" id="enviar" value="Enviar" />
        </form>
        
        
        
        </div>
      );
    }
  }
  
 
export default Formulario /*Export of the funcion in the App.js*/