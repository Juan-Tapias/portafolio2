import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import styles from "../../components/ proyectos/Slider.module.css";
import "swiper/css/effect-fade";

export interface Project {
  image: string;
  title: string;
  description: string;
  link: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const mainSwiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center min-h-[600px] md:h-screen items-center flex-col drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] px-4 py-10 md:py-0"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl text-white [text-shadow:4px_4px_5px_rgba(207,207,207,0.6)] mt-4 mb-6 md:mb-10 select-none"
      >
        Proyectos
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 20, scale: 0.95 }
        }
        transition={{ duration: 1, ease: "easeOut" }}
        className={`${styles.sliderContainer2} rounded-3xl relative w-full max-w-[900px] xl:max-w-[1100px] h-[400px] md:h-[525px] xl:h-[600px] bg-gray-900 mt-5 md:mt-10 overflow-hidden`}
      >
        <Swiper
          modules={[Navigation, EffectFade, Autoplay]}
          onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
          navigation
          effect="fade"
          loop
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="w-full h-full rounded-3xl"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-full relative rounded-3xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/40 md:bg-transparent z-10" />
                <div className="absolute bottom-16 md:bottom-24 left-6 md:left-12 text-white bg-black/70 md:bg-black/60 p-4 md:p-6 rounded-lg max-w-[85%] md:max-w-lg z-20 transition-all">
                  <h2 className="text-xl md:text-2xl font-bold">{project.title}</h2>
                  <p className="mt-2 text-xs md:text-sm line-clamp-3 md:line-clamp-none">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 md:mt-4 px-4 py-2 bg-[#2C2C2C] rounded-lg text-white text-xs md:text-sm font-semibold transition-colors hover:bg-[#444]"
                    >
                      Ver Proyecto
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex absolute bottom-4 md:bottom-6 right-4 md:right-6 space-x-1 md:space-x-2 z-50 max-w-[60%] md:max-w-2xl overflow-x-auto scrollbar-hide pb-2">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`
                flex-shrink-0 w-8 h-7 md:w-12 md:h-10 rounded-lg overflow-hidden cursor-pointer
                transition-all duration-700 ease-in-out
                ${
                  activeIndex === idx
                    ? "scale-105 brightness-100 blur-[0px] opacity-100 ring-2 ring-purple-500"
                    : "scale-95 brightness-75 blur-[1px] opacity-70"
                }
              `}
              onClick={() => mainSwiperRef.current?.slideToLoop(idx)}
              aria-label={`Miniatura del proyecto ${project.title}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  mainSwiperRef.current?.slideToLoop(idx);
                }
              }}
            >
              <img
                src={project.image}
                alt={`Miniatura ${project.title}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectCarousel;
