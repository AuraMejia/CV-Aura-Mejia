import React from 'react'
import '../utils/css/Habilidades.css'
import Icono_hab from '../utils/Images/habilidades.svg'

function Habilidades (){
    return(
        <div className="Habilidades"> 
            
            <div className="Container_habilidades_1">
            <h1>
                Habilidades
            </h1>
            <li type="disc">HTML5</li>
            <li type="disc">CSS3</li>
            <li type="disc">JavaScript</li>
            <li type="disc">React</li>
            <li type="disc">B1 de inglés</li>
            <li type="disc">Figma</li>
            </div>

            <div className="Container_habilidades_2">
            <li type="disc">Negociación</li>
            <li type="disc">Resolución de conflictos a través de MASC</li>
            <li type="disc">Comunicación</li>
            <li type="disc">Liderazgo</li>
            <li type="disc">Empatía</li>
            </div>

            <div className="Container_icono1">  
            <img id="img2" src={Icono_hab} alt="Esta es la img 2" />
            </div>

            </div>
    )

}
export default Habilidades