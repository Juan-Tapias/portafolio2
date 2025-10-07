import type { JSX } from "react";
import { habilidadesData } from "../../data/habilidades/HabilidadesData";
import { habilidadesBlandasData } from "../../data/habilidades/HabilidadesData";

const Habilidades = (): JSX.Element => {
  return (
    <section>
      <h1 className="text-white text-5xl font-bold mt-10 text-center [text-shadow:4px_4px_7px_rgba(207,207,207,0.3)]">Habilidades Técnicas</h1>
      <div className="flex flex-row flex-wrap gap-10 justify-center">
        {habilidadesData.map((item, index) => {
          return (
            <div key={index} className='text-white rounded-xl h-[20vh] w-[12vw] mt-5 flex flex-col items-center justify-center text-center bg-[#10052596] hover:bg-[#100525] transition-transform duration-300 ease-in-out hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]'>
                <img src={item.image} alt={item.title} className={item.classname}/>
              <p className="mt-2">{item.title}</p>
            </div>
          );
        })}
      </div>
      <h1 className="text-white text-5xl font-bold mt-10 text-center [text-shadow:4px_4px_7px_rgba(207,207,207,0.3)]">Habilidades Blandas</h1>
      <div className="flex flex-row flex-wrap gap-10 justify-center">
        {habilidadesBlandasData.map((item,index) => {
          const Icon = item.icon
          return(
            <div key={index} className="text-white rounded-xl h-[25vh] w-[20vw] mt-5 flex flex-col items-center justify-center text-center bg-[#1118279f] hover:bg-[#100525] transition-transform duration-300 ease-in-out hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              {Icon && <Icon size={25} className={item.classname} />}
              <p className="mt-2 text-xl">{item.title}</p>
              <p className="text-xs mt-2 text-gray-400">{item.descripcion}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};



 export default Habilidades