import type { JSX } from "react";
import { habilidadesData } from "../../data/habilidades/HabilidadesData";

const Habilidades = (): JSX.Element => {
  return (
    <section>
      <h1 className="text-white text-5xl font-bold mt-10 text-center [text-shadow:4px_4px_7px_rgba(207,207,207,0.3)]">Mis conocimientos</h1>
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
    </section>
  );
};



 export default Habilidades