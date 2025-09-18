import type { JSX } from "react";
import { inicioItems, type Item } from "../../data/inicio/InicioItems";

const Inicio = (): JSX.Element => {
  return (
    <div className="grid grid-cols-2 min-h-screen text-white px-10">
      <div className="flex flex-col space-y-4">
        {inicioItems
          .filter((item) => item.col === "left")
          .map((item: Item, index: number) => {
            if (item.type === "h1") {
              return (
                <h1
                  key={index}
                  className={item.className}
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              );
            }
            if (item.type === "h2") {
              return (
                <h2 key={index} className={item.className}>
                  {item.content}
                </h2>
              );
            }
          })}
      </div>

      <div className="flex justify-center">
        {inicioItems
          .filter((item) => item.col === "right")
          .map((item: Item, index: number) => (
            <img
              key={index}
              src={item.content}
              alt="Imagen portada"
              className={item.className}
            />
          ))}
      </div>
    </div>
  );
};

export default Inicio;
