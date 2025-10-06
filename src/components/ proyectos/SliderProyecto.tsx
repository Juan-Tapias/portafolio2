import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import styles from "../../components/ proyectos/Slider.module.css";
import "swiper/css";
import "swiper/css/navigation";
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

  return (
    <div className="flex justify-center h-screen items-center flex-col drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
      <h2 className="text-5xl text-white [text-shadow:4px_4px_5px_rgba(207,207,207,0.6)] mb-4">Proyectos</h2>
      <div className={`${styles.sliderContainer2} rounded-3xl relative w-[950px] h-[550px] bg-gray-900 mt-10`}>  
        <Swiper
          modules={[Navigation, EffectFade]}
          onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
          navigation
          effect="fade"
          loop
          className="w-full h-full rounded-3xl"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-full relative rounded-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute bottom-24 left-12 text-white bg-black/60 p-4 rounded-lg max-w-lg z-20">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <p className="mt-2 text-sm">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-4 py-2 bg-[#2C2C2C] hover:bg-blue-700 rounded-lg text-white text-sm font-semibold transition-colors"
                    >
                      Ver Proyecto
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex absolute bottom-6 right-6 space-x-2 z-50 max-w-2xl">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`
                          flex flex-shrink w-12 h-10 rounded-lg overflow-hidden cursor-pointer
                          transition-all duration-700 ease-in-out
                          ${activeIndex === idx 
                            ? "scale-105 brightness-100 blur-[0px] opacity-100"
                            : "scale-95 brightness-100 blur-[2.5px] opacity-100"
                          }
                        `}
              onClick={() => mainSwiperRef.current?.slideToLoop(idx)}
            >
              <img
                src={project.image}
                alt={`Miniatura ${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProjectCarousel;
