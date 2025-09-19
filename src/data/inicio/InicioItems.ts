import firma from "../../assets/firmaMia.png"
import type { Item } from "../../interfaces/inicio/inicio";

export const inicioItems: Item[] = [
  {
    type: "h1",
    content: "DESARROLLADOR <br /> JUNIOR FULL STACK",
    className: "ml-20 text-[2.7rem] text-white [text-shadow:4px_4px_7px_rgba(207,207,207,0.6)]",
    col: "left",
  },
  {
    type: "h2",
    content: "“Desarrollando con café, pasión y buenas vibras”",
    className: " ml-20 text-xl [text-shadow:4px_4px_7px_rgba(207,207,207,1)]",
    col: "left",
  },
  {
    type: "img",
    content: firma,
    className: "w-100 h-60 ml-35 mt-[-2.5vw] drop-shadow-[0_0_4px_rgba(255,255,255,1)]",
    col: "left",
  },
  {
    type: "img",
    content: "https://img.freepik.com/fotos-premium/gato-negro-gafas-sol-gato-negro-gafas-sol_732812-1122.jpg",
    className:
      "flex flex-col w-87 h-95 rounded-full shadow-lg transition-transform duration-500 hover:scale-105 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]",
    col: "right",
  }
];
