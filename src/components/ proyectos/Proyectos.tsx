import ProjectCarousel from "./SliderProyecto";
import { projects } from '../../data/proyectos/proyectosData';
import { motion } from "framer-motion";
import type { JSX } from "react";

export const ProyectosSection = (): JSX.Element => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-16 py-20"
      aria-label="Sección de proyectos"
    >
      <ProjectCarousel projects={projects} />
    </motion.section>
  );
};
