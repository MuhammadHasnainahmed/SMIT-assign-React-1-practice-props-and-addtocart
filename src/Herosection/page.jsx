import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../Herosection/hero.css'

export default function Herosection() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      slidesPerView={1}   // full width ek image ek time
      className="w-full h-[700px] mb-8"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1600&q=80"
          alt="Headphones"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80"
          alt="Watch"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1600&q=80"
          alt="T-shirt"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
}
