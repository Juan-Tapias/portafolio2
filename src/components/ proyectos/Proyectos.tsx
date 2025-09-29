import ProjectCarousel from "./SliderProyecto";
import foto1 from '../../assets/gato1.jpg'
import foto2 from '../../assets/foto1.jpeg'
import foto3 from '../../assets/foto2.jpeg'
import foto4 from '../../assets/foto3.jpeg'

export const ProyectosSection = () => {
    const projects = [
    { image: foto1, title: "Proyecto 1", description: "Descripción del proyecto 1" },
    { image: foto2, title: "Proyecto 2", description: "Descripción del proyecto 2" },
    { image: foto3, title: "Proyecto 3", description: "Descripción del proyecto 3" },
    { image: foto4, title: "Proyecto 4", description: "Descripción del proyecto 4" },
    ];
    return(
         <ProjectCarousel projects={projects} />
    )
}
