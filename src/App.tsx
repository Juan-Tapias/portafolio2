import Inicio from "./components/inicio/Inicio"
import Header  from "./components/encabezado/Encabezado"
import SobreMi from "./components/sobreMi/SobreMi"
import { ProyectosSection } from "./components/ proyectos/Proyectos"
import Habilidades from "./components/habilidades/habilidades"
import { Contacto } from "./components/contacto/Contacto"

function App() {

  return (
    <>
      <Header />
      <Inicio />
      <br /><br />
      <br /><br />
      <br /><br />
      <SobreMi/>
      <br /><br />
      <br /><br />
      <br /><br />
      <Habilidades/>
      <br /><br />
      <br /><br />
      <br /><br />
      <ProyectosSection/>
      <br /><br />
      <br /><br />
      <br /><br />
      <Contacto/>
    </>
  )
}

export default App
