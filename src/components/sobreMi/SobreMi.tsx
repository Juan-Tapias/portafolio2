import ParticlesBackground from "../particulas/Particulas";
import Slider from '../slider/Slider'
import foto1 from '../../assets/gato1.jpg'
import foto2 from '../../assets/foto1.jpeg'
import foto3 from '../../assets/foto2.jpeg'
import foto4 from '../../assets/foto3.jpeg'

import { SobreMiData } from "../../data/sobreMi/SobreMiItem";

const SobreMiSection = () => {
  const mockImagenes = [foto1, foto2, foto3, foto4];
  return (
    <section className="relative w-full h-screen">
      {SobreMiData.slice(0, 1).map((item, index) => (
        <h1 key={index} className={item.className}>
          {item.content}
        </h1>
      ))}

      <div className="my-slider flex justify-evenly items-center">
        <Slider imagenes={mockImagenes} />
        <div className="text-white w-[40vw] h-[22vw] flex flex-col items-center justify-center text-center bg-[#1118279f] rounded-xl hover:bg-[#111827] transition-transform duration-300 ease-in-out hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
          {SobreMiData.slice(1, 3).map((item, index) => {
            if (item.type === "h2") return <h2 key={index} className={item.className}>{item.content}</h2>;
            if (item.type === "p") return <p key={index} className={item.className}>{item.content}</p>;
          })}
        </div>
      </div>

      <div className="flex items-center justify-evenly mx-auto w-6xl">
        {[3, 5, 7].map((startIndex, i) => (
          <div key={i} className="text-white rounded-xl h-[32vh] w-[14vw] mt-5 flex flex-col items-center justify-center text-center bg-[#10052596] hover:bg-[#100525] transition-transform duration-300 ease-in-out hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
            <h2 className={SobreMiData[startIndex].className}>{SobreMiData[startIndex].content}</h2>
            <p className="mt-2">{SobreMiData[startIndex + 1].content}</p>
          </div>
        ))}
      </div>

      <ParticlesBackground />
    </section>
  );
};

export default SobreMiSection;