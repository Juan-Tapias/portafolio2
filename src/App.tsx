import Inicio from "./components/inicio/Inicio"
import Header  from "./components/encabezado/Encabezado"
import SobreMi from "./components/sobreMi/SobreMi"
import { ProyectosSection } from "./components/ proyectos/Proyectos"
import Habilidades from "./components/habilidades/habilidades"

function App() {

  return (
    <>
      <Header />
      <Inicio />
      <SobreMi/>
      <Habilidades/>
      <ProyectosSection/>
    </>
  )
}

export default App
