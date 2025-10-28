import type { JSX } from "react";
import { ContactoData } from "../../data/contacto/ContactoData";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const Contacto = (): JSX.Element => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, scale: 1 });
    } else {
      controls.start({ opacity: 0, y: 20, scale: 0.95 });
    }
  }, [controls, inView]);

  return (
    <section className="relative py-12">
      <h1 className="text-white text-5xl font-bold mb-12 text-center [text-shadow:4px_4px_7px_rgba(207,207,207,0.3)]">
        Contacto
      </h1>
      <div ref={ref} className="flex flex-wrap gap-10 justify-center">
        {ContactoData.map((item, index) => {
          const Icon = item.Icon;
          return (
            <motion.div
              key={index}
              animate={controls}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="backdrop-blur-md bg-[#10052596] border border-white/20 rounded-xl shadow-lg p-8 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300 w-56"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4"
                aria-label={`Abrir contacto ${item.title}`}
              >
                <Icon className="text-5xl text-gray-200 transition-colors duration-300 hover:text-white" />
              </a>
              <p className="text-gray-200 font-semibold text-lg text-center">{item.title}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
