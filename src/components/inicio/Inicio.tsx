import type { JSX } from "react";
import { inicioItems } from "../../data/inicio/InicioItems";
import type { Item } from "../../interfaces/inicio/inicio";
import VantaBackground from "../birds/Birds";
import DescargarPDFBoton from "../boton/Boton";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Inicio = (): JSX.Element => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  const [refLeft, inViewLeft] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [refRight, inViewRight] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inViewLeft) {
      controlsLeft.start({ opacity: 1, x: 0 });
    } else {
      controlsLeft.start({ opacity: 0, x: -50 });
    }
  }, [controlsLeft, inViewLeft]);

  useEffect(() => {
    if (inViewRight) {
      controlsRight.start({ opacity: 1, x: 0 });
    } else {
      controlsRight.start({ opacity: 0, x: 50 });
    }
  }, [controlsRight, inViewRight]);

  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute inset-0 -z-10">
        <VantaBackground />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen text-white px-3 md:px-20 relative z-10 gap-y-20 md:gap-y-0 gap-x-0 md:gap-x-12">
        <motion.div
          ref={refLeft}
          animate={controlsLeft}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col space-y-10 justify-center text-center md:text-left mt-20 md:mt-0"
        >
          {inicioItems
            .filter((item) => item.col === "left")
            .map((item: Item, index: number) => {
              if (item.type === "h1") {
                return (
                  <motion.h1
                    key={index}
                    className={`${item.className} `}
                    dangerouslySetInnerHTML={{ __html: item.content || "" }}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
                  />
                );
              }
              if (item.type === "h2") {
                return (
                  <motion.h2
                    key={index}
                    className={`${item.className} `}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                  >
                    {item.content}
                  </motion.h2>
                );
              }
              if (item.type === "img") {
                return (
                  <motion.img
                    key={index}
                    src={item.content}
                    alt="Imagen portada"
                    className={`${item.className} w-56 sm:w-60 md:w-64 mx-auto mt-7`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
                  />
                );
              }
              return null;
            })}
        </motion.div>

        <motion.div
          ref={refRight}
          animate={controlsRight}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center justify-center mt-8 md:mt-0"
        >
          {inicioItems
            .filter((item) => item.col === "right")
            .map((item: Item, index: number) => (
              <motion.div
                key={index}
                className="flex flex-col justify-center items-center gap-7 bg-opacity-90 p-6 md:p-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              >
                <img
                  src={item.content}
                  alt="Imagen portada"
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover mx-auto shadow-[0_0_80px_5px_rgba(207,100,255,0.25)]"
                />
                <h2 className="text-3xl md:text-4xl font-bold [text-shadow:4px_4px_5px_rgba(207,207,207,0.5)] mt-7 md:mt-3">
                  Revisa mi CV
                </h2>
                <DescargarPDFBoton />
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Inicio;
