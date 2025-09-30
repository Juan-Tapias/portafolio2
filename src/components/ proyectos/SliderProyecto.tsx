import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import styles from "../../components/ proyectos/Slider.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

interface Project {
  image: string;
  title: string;
  description: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const mainSwiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex justify-center h-screen items-center flex-col">
      <h2 className="text-5xl text-white [text-shadow:4px_4px_5px_rgba(207,207,207,0.6)] mb-4">Proyectos</h2>
      <div className={`${styles.sliderContainer2} relative w-5xl h-[82vh] bg-gray-900`}>  
        <Swiper
          modules={[Navigation, EffectFade]}
          onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
          navigation
          effect="fade"
          loop
          className="w-full h-full"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-full relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-24 left-12 text-white bg-black/40 p-4 rounded-lg max-w-lg z-20">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <p className="mt-2 text-sm">{project.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex absolute bottom-6 right-6 space-x-2 z-50 max-w-2xl">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`flex flex-shrink w-50 h-14 rounded-lg overflow-hidden cursor-pointer transition-all duration-500
                          ${activeIndex === idx ? "scale-110 brightness-100" : "scale-90 brightness-50 blur-sm"}`}
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
