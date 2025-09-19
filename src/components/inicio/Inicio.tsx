import type { JSX } from "react";
import { inicioItems} from "../../data/inicio/InicioItems";
import type {Item } from "../../interfaces/inicio/inicio"
import VantaBackground from "../birds/Birds";

const Inicio = (): JSX.Element => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 -z-10">
        <VantaBackground />
      </div>
      <div className="grid grid-cols-2 min-h-screen text-white px-10 relative z-10">
        <div className="flex flex-col space-y-10 text-center mt-45">
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
              if (item.type === "img") {
                return (
                  <img
                    key={index}
                    src={item.content}
                    alt="Imagen portada"
                    className={item.className}
                  />
                );
              }
            })}
        </div>

        <div className="flex justify-center mt-30">
          {inicioItems
            .filter((item) => item.col === "right")
            .map((item: Item, index: number) => (
              <div key={index} className="object-cover rounded-full">
                <img
                  src={item.content}
                  alt="Imagen portada"
                  className={item.className}
                />
                <h2 className="mt-5 ml-22 text-3xl">Revisa mi CV</h2>
                <button className="mt-4 ml-28 text-md border w-30 h-8 ">
                  Descargar
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
