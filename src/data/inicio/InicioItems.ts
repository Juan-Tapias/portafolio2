import type { Item } from "../../interfaces/inicio/inicio";
import firma from "../../assets/sobremi/firmaMia.png";

const fotomia = "/foto.jpeg";

export const inicioItems: Item[] = [
  {
    type: "h1",
    content: "DESARROLLADOR <br /> JUNIOR FULL STACK",
    className: "md:ml-37 text-[2rem] md:text-[2.7rem] text-white [text-shadow:4px_4px_7px_rgba(207,207,207,0.6)]",
    col: "left",
  },
  {
    type: "h2",
    content: "“Desarrollando con café, pasión y buenas vibras”",
    className: "md:ml-30 text-lg md:text-xl [text-shadow:4px_4px_7px_rgba(207,207,207,1)] px-4 md:px-0",
    col: "left",
  },
  {
    type: "img",
    content: firma,
    className:"w-40 h-30 md:w-70 md:h-50 mx-auto md:ml-50 mt-4 md:mt-[-2.5vw] drop-shadow-[0_0_4px_rgba(255,255,255,1)]",
    col: "left",
  },
  {
    type: "img",
    content: fotomia,
    className:
    "flex flex-col w-64 h-64 md:w-87 md:h-95 rounded-full shadow-lg transition-transform duration-500 hover:scale-105 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]",
    col: "right",
  }
];
