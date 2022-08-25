import React from "react";
import {Routes, Route} from "react-router-dom";
import ResponsiveAppBar from './componentes/Navbar';
import SobreMi from './paginas/SobreMi';
import Proyectos from './paginas/Proyectos';
import Contacto from './paginas/Contacto';

function App() {
  return (
    <div className="app">
      <ResponsiveAppBar/>
        <Routes>
           <Route path= "/SobreMi" element= {<SobreMi/>}/>
           <Route path= "/Proyectos" element= {<Proyectos/>}/>
           <Route path= "/" element= {<Proyectos/>}/>
           <Route path= "/Contacto" element= {<Contacto/>}/>
        </Routes>
        {/* <ScrollToTop smooth/>
        <Footer/> */}
    </div>
  );
}

export default App;
