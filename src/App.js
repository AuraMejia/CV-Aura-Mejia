/*Import the component of each component that is going to show in the principal page. It works at the same form in the 2 line to the 16 line */
import Cabecera from './components/Cabecera' 
import SobreMi from './components/SobreMi'
import Estudios from './components/Estudios'
import Intereses from './components/Intereses'
import Formulario from './components/Formulario'
import Habilidades from './components/Habilidades'
import Experiencia from './components/Experiencia'
import Proyectos from './components/Proyectos'
import Footer from './components/Footer'
import Final from './components/Final'
import Perfil from "./pages/Perfil.jsx"
import Academia from "./pages/Academia.jsx"
import Escribe from "./pages/Escribe.jsx"
import GlobalStyle from './globalStyles.js'
import Projects from "./pages/Projects"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom" /*It allows the possiblity of change the contents of the index. We have to install it in the package.json*/
import './App.css';

function App() {
  return (
    <div className="App">

  
      <Router>
      <Cabecera/>
      <GlobalStyle/> 
        <Switch>

          <Route path="/" exact>
            <SobreMi/>
            <Habilidades/>
            <Experiencia/> 
            <Estudios/>
            <Intereses/>
            <Proyectos/>
            <Formulario/>
             </Route>

          <Route path="/Perfil" exact component={Perfil} />
          <Route path="/Academia" exact component={Academia} />
          <Route path="/Projects" exact component={Projects} />
          <Route path="/Escribe" exact component={Escribe} />

          
        </Switch>
      </Router>

      <Footer/>
      <Final/>



    </div>
  );
}

export default App;
