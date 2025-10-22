import type { JSX } from "react";
import { habilidadesData } from "../../data/habilidades/HabilidadesData";
import { habilidadesBlandasData } from "../../data/habilidades/HabilidadesData";

const Habilidades = (): JSX.Element => {
  return (
    <section className="px-4 sm:px-8 md:px-16">
      <h1 className="text-white text-4xl sm:text-5xl font-bold mb-6 sm:mb-10 text-center [text-shadow:4px_4px_7px_rgba(207,207,207,0.3)]">
        Habilidades Técnicas
      </h1>
      <div className="flex flex-wrap gap-6 sm:gap-10 justify-center">
        {habilidadesData.map((item, index) => {
          return (
            <div
              key={index}
              className="text-white rounded-xl h-[15vh] sm:h-[20vh] w-[40vw] sm:w-[12vw] mt-5 flex flex-col items-center justify-center text-center bg-[#10052596] hover:bg-[#100525] transition-transform duration-300 ease-in-out hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            >
              <img src={item.image} alt={item.title} className={item.classname} />
              <p className="mt-2 text-sm sm:text-base">{item.title}</p>
            </div>
          );
        })}
      </div>

      <h1 className="text-white text-4xl sm:text-5xl font-bold mb-6 sm:mb-10 mt-12 text-center [text-shadow:4px_4px_7px_rgba(207,207,207,0.3)]">
        Habilidades Blandas
      </h1>
      <div className="flex flex-wrap gap-6 sm:gap-10 justify-center">
        {habilidadesBlandasData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="text-white rounded-xl h-auto sm:h-[25vh] w-[80vw] sm:w-[20vw] mt-5 flex flex-col items-center justify-center text-center bg-[#1118279f] hover:bg-[#100525] transition-transform duration-300 ease-in-out hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] p-4"
            >
              {Icon && <Icon size={25} className={item.classname} />}
              <p className="mt-2 text-lg sm:text-xl">{item.title}</p>
              <p className="text-xs sm:text-sm mt-2 text-gray-400">{item.descripcion}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};




 export default Habilidades