import ParticlesBackground from "../particulas/Particulas";
import Slider from '../slider/Slider'
import foto2 from '../../assets/sobremi/foto1.jpeg'
import foto3 from '../../assets/sobremi/foto2.jpeg'
import foto4 from '../../assets/sobremi/foto3.jpeg'

import { SobreMiData } from "../../data/sobreMi/SobreMiItem";

const SobreMiSection = () => {
  const mockImagenes = [foto2, foto3, foto4];
  return (
    <section className="relative w-full min-h-screen px-2 md:px-0 pb-8">
      {SobreMiData.slice(0, 1).map((item, index) => (
        <h1 key={index} className={"text-3xl sm:text-4xl md:text-5xl mb-8 text-center " + item.className}>
          {item.content}
        </h1>
      ))}

      <div className="my-slider flex flex-col md:flex-row justify-evenly items-center gap-6 md:gap-0 mb-8">
        <div className="w-full md:w-auto flex justify-center mb-6 md:mb-0">
          <Slider imagenes={mockImagenes} />
        </div>
        <div className="text-white w-full max-w-xl md:w-[40vw] h-auto md:h-[22vw] flex flex-col items-center justify-center text-center bg-[#1118279f] rounded-xl hover:bg-[#111827] transition-transform duration-300 ease-in-out hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] p-5 md:p-0">
          {SobreMiData.slice(1, 3).map((item, index) => {
            if (item.type === "h2") return <h2 key={index} className={"text-xl sm:text-2xl md:text-3xl mt-4 mb-2 " + item.className}>{item.content}</h2>;
            if (item.type === "p") return <p key={index} className={"text-sm sm:text-base md:text-lg " + item.className}>{item.content}</p>;
          })}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-6 md:gap-0 w-full max-w-6xl mx-auto mt-6">
        {[3, 5, 7].map((startIndex, i) => (
          <div
            key={i}
            className="text-white rounded-xl h-auto md:h-[32vh] w-full max-w-xs md:w-[14vw] mt-2 md:mt-5 flex flex-col items-center justify-center 
            text-center bg-[#10052596] hover:bg-[#100525] transition-transform duration-300 ease-in-out hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] 
            p-5 md:p-0 mb-6 md:mb-0"
          >
            <h2 className={"text-lg sm:text-xl md:text-2xl mb-2 " + SobreMiData[startIndex].className}>{SobreMiData[startIndex].content}</h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg">{SobreMiData[startIndex + 1].content}</p>
          </div>
        ))}
      </div>

      <ParticlesBackground />
    </section>
  );
};




export default SobreMiSection;