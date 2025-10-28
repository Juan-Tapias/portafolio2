import Inicio from "./components/inicio/Inicio"
import Header  from "./components/encabezado/Encabezado"
import SobreMi from "./components/sobreMi/SobreMi"
import { ProyectosSection } from "./components/ proyectos/Proyectos"
import Habilidades from "./components/habilidades/habilidades"
import { Contacto } from "./components/contacto/Contacto"
import { Footer } from "./components/piePagina/piePagina"

function App() {

  return (
    <>
      <Header />
      <Inicio />
      <SobreMi/>
      <Habilidades/>
      <ProyectosSection/>
      <Contacto/>
      <Footer/>
    </>
  )
}

export default App
