import React, { useRef } from "react";
import { type SliderProps } from "../../interfaces/slider/SliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import styles from "./Slider.module.css";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./Slider.module.css";

const Slider: React.FC<SliderProps> = ({ imagenes }) => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <div className={`${styles.sliderContainer} w-lg max-w-5xl mt-2 aspect-[16/9]`}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        effect="fade"
        className="rounded-xl overflow-hidden shadow-2xl bg-transparent"
      >
        {imagenes.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default Slider;
