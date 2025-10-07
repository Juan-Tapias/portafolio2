import { type HabilidadesInterfaz } from "../../interfaces/habilidades/HabilidadesInterface"
import python from '../../assets/habilidades/python.svg'
import git from '../../assets/habilidades/git.svg'
import html from '../../assets/habilidades/html.svg'
import css from '../../assets/habilidades/css.svg'
import javaScript from '../../assets/habilidades/js.svg'
import mysql from '../../assets/habilidades/mysql.svg'
import java from '../../assets/habilidades/java.svg'
import springBoot from '../../assets/habilidades/spring-boot.svg'
import postgreSQL from '../../assets/habilidades/postgresql.svg'
import react from '../../assets/habilidades/react.svg'
import tailwind from '../../assets/habilidades/tailwind.svg'
import typeScript from '../../assets/habilidades/typescript.svg'
import { AiOutlineMessage } from "react-icons/ai";
import { FaUsers, FaRegHeart, FaPaintBrush } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { RiStarSFill } from "react-icons/ri";
import { FiRefreshCw, FiClock } from "react-icons/fi";

export const habilidadesData:HabilidadesInterfaz[]  = [
    {
        image: python,
        title: "Python",
        classname: "w-18 h-18"
    },
    {
        image: git,
        title: "Git",
        classname: "w-18 h-18"
    },
    {
        image: html,
        title: "HTML",
        classname: "w-18 h-18"
    },
    {
        image: css,
        title: "CSS",
        classname: "w-18 h-18"
    },
    {
        image: javaScript,
        title: "JavaScript",
        classname: "w-18 h-18"
    },
    {
        image: mysql,
        title: "Mysql",
        classname: "w-18 h-18"
    },
    {
        image: java,
        title: "Java",
        classname: "w-18 h-18"
    },
    {
        image: springBoot,
        title: "Spring Boot",
        classname: "w-18 h-18"
    },
    {
        image: postgreSQL,
        title: "PostgreSQL",
        classname: "w-18 h-18"
    },
    {
        image: react,
        title: "React",
        classname: "w-18 h-18"
    },
    {
        image: tailwind,
        title: "Tailwind",
        classname: "w-18 h-18"
    },
    {
        image: typeScript,
        title: "TypeScript",
        classname: "w-18 h-18"
    },
]

export const habilidadesBlandasData: HabilidadesInterfaz[] = [
 {
    icon: AiOutlineMessage,
    title: "Comunicación Efectiva",
    descripcion: "Habilidad para expresar ideas de manera clara y persuasiva.",
    classname: "text-blue-500",
  },
  {
    icon: FaUsers,
    title: "Trabajo en Equipo",
    descripcion: "Capacidad para colaborar y contribuir en grupos diversos.",
    classname: "text-green-500",
  },
  {
    icon: GiBrain,
    title: "Resolución de Problemas",
    descripcion: "Enfoque analítico para abordar desafíos complejos.",
    classname: "text-yellow-500",
  },
  {
    icon: RiStarSFill,
    title: "Liderazgo",
    descripcion: "Habilidad para inspirar y guiar a otros hacia objetivos comunes.",
    classname: "text-purple-500",
  },
  {
    icon: FiRefreshCw,
    title: "Adaptabilidad",
    descripcion: "Flexibilidad para ajustarse a nuevas situaciones y tecnologías.",
    classname: "text-cyan-400",
  },
  {
    icon: FaPaintBrush,
    title: "Creatividad",
    descripcion: "Capacidad para generar ideas innovadoras y soluciones originales.",
    classname: "text-pink-500",
  },
  {
    icon: FiClock,
    title: "Gestión del Tiempo",
    descripcion: "Habilidad para priorizar tareas y cumplir plazos eficientemente.",
    classname: "text-red-500",
  },
  {
    icon: FaRegHeart,
    title: "Empatía",
    descripcion: "Capacidad para entender y considerar las perspectivas de otros.",
    classname: "text-orange-500",
  },
]