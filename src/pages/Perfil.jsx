import React from "react" /*Import React*/ 
import Habilidades from "../components/Habilidades" /*Import the component of Habilidades*/
import SobreMi from "../components/SobreMi" /*Import the SobreMi*/


const Perfil = () =>{ /*It is going to show us the components that we export. It works with the button*/
	return(
	<>
	<SobreMi/>
	<Habilidades/>
    </>
	)
} 

export default Perfil
