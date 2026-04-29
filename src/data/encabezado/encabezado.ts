import { FaUser, FaProjectDiagram, FaCode, FaHandshake } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import type {HeaderItem}  from "../../interfaces/encabezado/Encabezado";

export const headerItems: HeaderItem[] = [
  { icon: FaUser, link: '#sobreMi' },
  { icon: FaCode, link: '#habilidades' },
  { icon: FaProjectDiagram, link: '#proyectos' },
  { icon: FaHandshake, link: '#contacto' },
  { icon: FaLinkedin, link: 'https://www.linkedin.com/in/juanmartinezt/' }
];
