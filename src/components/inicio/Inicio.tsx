import type { JSX } from "react";
import { inicioItems} from "../../data/inicio/InicioItems";
import type {Item } from "../../interfaces/inicio/inicio"
import VantaBackground from "../birds/Birds";
import DescargarPDFBoton from "../boton/Boton";


const Inicio = (): JSX.Element => {
  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute inset-0 -z-10">
        <VantaBackground />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen text-white px-2 md:px-10 relative z-10 gap-y-16 md:gap-y-0 gap-x-0 md:gap-x-10">

        <div className="flex flex-col space-y-7 text-center mt-10 md:mt-35">
          {inicioItems
            .filter((item) => item.col === "left")
            .map((item: Item, index: number) => {
              if (item.type === "h1") {
                return (
                  <h1
                    key={index}
                    className={`${item.className} !ml-0 sm:!ml-20 text-3xl sm:text-[2.7rem]`}
                    dangerouslySetInnerHTML={{ __html: item.content || "" }}
                  />
                );
              }
              if (item.type === "h2") {
                return (
                  <h2
                    key={index}
                    className={`${item.className} !ml-0 sm:!ml-20 text-base sm:text-xl`}
                  >
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
                    className={`${item.className}`}
                  />
                );
              }
              return null;
            })}
          <div className="flex flex-wrap space-x-4 justify-center mt-8">
            {inicioItems
              .filter((item) => item.col === "icono" && item.type === "icono")
              .map((item, index) => {
                const Icon = item.Icon;
                if (Icon) {
                  return (
                    <Icon
                      key={index}
                      className={`${item.className} w-8 h-8 sm:w-12 sm:h-12`}
                    />
                  );
                }
                return null;
              })}
          </div>
        </div>

        <div className="flex justify-center items-center mt-16 md:mt-28">
          {inicioItems
            .filter((item) => item.col === "right")
            .map((item: Item, index: number) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-5 object-cover rounded-full bg-opacity-90 p-4 md:p-0"
              >
                <img
                  src={item.content}
                  alt="Imagen portada"
                  className={`w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mx-auto ${
                    item.className ?? ""
                  }`}
                />
                <h2 className="text-2xl md:text-3xl [text-shadow:4px_4px_5px_rgba(207,207,207,0.6)] mt-6 md:mt-0">Revisa mi CV</h2>
                <DescargarPDFBoton />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};


export default Inicio;
