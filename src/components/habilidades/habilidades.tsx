import type { JSX } from "react";
import { habilidadesData } from "../../data/habilidades/HabilidadesData";
import { habilidadesBlandasData } from "../../data/habilidades/HabilidadesData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Habilidades = (): JSX.Element => {
  const { ref: refTech, inView: inViewTech } = useInView({ triggerOnce: false });
  const { ref: refBlandas, inView: inViewBlandas } = useInView({ triggerOnce: false });

  return (
    <section className="px-4 sm:px-8 md:px-16">
      <h1 className="text-white text-4xl sm:text-5xl font-bold mb-6 sm:mb-10 text-center [text-shadow:4px_4px_7px_rgba(207,207,207,0.3)]">
        Habilidades Técnicas
      </h1>
      <div ref={refTech} className="flex flex-wrap gap-6 sm:gap-10 justify-center">
        {habilidadesData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inViewTech ? 1 : 0, y: inViewTech ? 0 : 20 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="text-white rounded-xl h-[15vh] sm:h-[20vh] w-[40vw] sm:w-[12vw] mt-5 flex flex-col items-center justify-center text-center bg-[#10052596] hover:bg-[#100525] transition-transform duration-300 ease-in-out hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
          >
            <img src={item.image} alt={item.title} className={item.classname} />
            <p className="mt-2 text-sm sm:text-base">{item.title}</p>
          </motion.div>
        ))}
      </div>

      <h1 className="text-white text-4xl sm:text-5xl font-bold mb-6 sm:mb-10 mt-12 text-center [text-shadow:4px_4px_7px_rgba(207,207,207,0.3)]">
        Habilidades Blandas
      </h1>
      <div ref={refBlandas} className="flex flex-wrap gap-6 sm:gap-10 justify-center">
        {habilidadesBlandasData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inViewBlandas ? 1 : 0, y: inViewBlandas ? 0 : 20 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="text-white rounded-xl h-auto sm:h-[25vh] w-[80vw] sm:w-[20vw] mt-5 flex flex-col items-center justify-center text-center bg-[#1118279f] hover:bg-[#100525] transition-transform duration-300 ease-in-out hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] p-4"
          >
            {item.icon && <item.icon size={25} className={item.classname} />}
            <p className="mt-2 text-lg sm:text-xl">{item.title}</p>
            <p className="text-xs sm:text-sm mt-2 text-gray-400">{item.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;
