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
      <SobreMi/>
      <Habilidades/>
      <ProyectosSection/>
      <Contacto/>
    </>
  )
}

export default App
