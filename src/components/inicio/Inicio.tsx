import type { JSX } from "react";
import { inicioItems} from "../../data/inicio/InicioItems";
import type {Item } from "../../interfaces/inicio/inicio"
import VantaBackground from "../birds/Birds";
import DescargarPDFBoton from "../boton/Boton";
import { div } from "three/tsl";

const Inicio = (): JSX.Element => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 -z-10">
        <VantaBackground />
      </div>
      <div className="grid grid-cols-2 min-h-screen text-white px-10 relative z-10">
        <div className="flex flex-col space-y-7 text-center mt-35">
          {inicioItems
            .filter((item) => item.col === "left")
            .map((item: Item, index: number) => {
              const Icon = item.Icon
              if (item.type === "h1") {
                return (
                  <h1
                    key={index}
                    className={item.className}
                    dangerouslySetInnerHTML={{ __html: item.content || "" }}
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
              }              if (item.type === "icono") {
                const Icon = item.Icon;
                if (Icon) {
                  return (
                    <Icon
                      key={index} 
                      className={item.className}
                    />
                  );
                }
                return null;
              }
              return null;
            })}
        </div>

        <div className="flex justify-center items-center mt-28">
          {inicioItems
            .filter((item) => item.col === "right")
            .map((item: Item, index: number) => (
              <div key={index} className="flex flex-col justify-center items-center gap-5 object-cover rounded-full ">
                <img
                  src={item.content}
                  alt="Imagen portada"
                  className={item.className}
                />
                <h2 className="text-3xl  [text-shadow:4px_4px_5px_rgba(207,207,207,0.6)]">Revisa mi CV</h2>
                <DescargarPDFBoton />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
