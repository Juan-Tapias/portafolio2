export type ItemType = "h1" | "h2" | "img";
export type ColType = "left" | "right";

export interface Item {
  type: ItemType;
  content: string;
  className?: string;
  col: ColType;
}

export const inicioItems: Item[] = [
  {
    type: "h1",
    content: "Desarrollador FullStack <br /> Junior",
    className: "text-5xl font-extrabold",
    col: "left",
  },
  {
    type: "h2",
    content: "“Desarrollando con café, pasión y buenas vibras”",
    className: "text-xl",
    col: "left",
  },
  {
    type: "img",
    content: "/ruta-a-tu-imagen.png",
    className:
      "w-80 h-80 object-cover rounded-full shadow-lg transition-transform duration-500 hover:scale-105",
    col: "right",
  },
];
