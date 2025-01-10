"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";

const Slideshow = ({images}) => {

    return (
        <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper rounded-2xl"
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}w
            loop={true}
            speed={800}
            loopFillGroupWithBlank={true} 
        >
            {images?.map((src, index) => (
                <SwiperSlide key={index} className="flex justify-center overflow-hidden items-center rounded-2xl">
                    <div className="w-full max-sm:h-[200px] h-[450px] relative">
                        <img
                            className=""
                            src={src}
                            alt={`Slide ${index}`}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slideshow;
