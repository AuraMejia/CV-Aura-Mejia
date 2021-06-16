import {createGlobalStyle} from 'styled-components'
import PrimaryFont from '../src/utils/fonts/Raleway.woff'

export const GlobalStyle = createGlobalStyle` 
*
margin:0;
padding:0;
.Titulo_Cabecera{
    font-family: Ralewey;
}
button{
    font-family: Ralewey;
}
.Descripcion{
    font-family: Ralewey;
}
  .Desarrollo {
    margin: 0;
    padding: 0;
  }
  .Desarrollo h3{
    font-family: Ralewey;
  }

  .Educacion p{
    font-family: Ralewey;
  } 
  .Educacion h1{
    font-family: Ralewey;
  }
  .Habilidades{
    font-family: Ralewey;
  }
  .Container_Experiencia{
    font-family: Ralewey;
  }
  .Desarrollo2 a, h3{
    font-family: Ralewey;
  }
  .Descripcion3{
    font-family: Ralewey;
  }
  .Container_Proyectos{
      font-family: Ralewey;
  }
  .Container_datos{
    font-family: Ralewey;
}
.Container_datos input{
    font-family: Ralewey;
}
.Container_Footer{
    font-family: Ralewey;
}
.Pie_pagina{
    font-family: Ralewey;
}

/*Fuentes*/
@font-face{
    font-family: 'Ralewey';
    src: local('Ralewey'), url(${PrimaryFont}) format('woff');
    font-style: normal;
}
`;
 
export default GlobalStyle;