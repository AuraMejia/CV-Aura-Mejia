
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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">

      <Cabecera/>

      <Router>
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
