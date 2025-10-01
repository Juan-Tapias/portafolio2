import ProjectCarousel from "./SliderProyecto";
import {projects} from '../../data/proyectos/proyectosData'

export const ProyectosSection = () => {
    return(
        <ProjectCarousel projects={projects} />
    )
}
