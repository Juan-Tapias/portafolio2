import { FaUser, FaProjectDiagram, FaCode, FaHandshake } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import type {HeaderItem}  from "../../interfaces/encabezado/Encabezado";

export const headerItems: HeaderItem[] = [
  { icon: FaUser },
  { icon: FaProjectDiagram },
  { icon: FaCode },
  { icon: FaHandshake },
  {icon: FaLinkedin, link:'https://www.linkedin.com/in/juanmartinezt/' }
];
