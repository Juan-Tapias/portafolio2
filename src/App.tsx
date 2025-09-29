import Inicio from "./components/inicio/Inicio"
import Header  from "./components/encabezado/Encabezado"
import SobreMi from "./components/sobreMi/SobreMi"
import { ProyectosSection } from "./components/ proyectos/Proyectos"
function App() {

  return (
    <>
      <Header />
      <Inicio />
      <SobreMi/>
      <ProyectosSection/>
    </>
  )
}

export default App
