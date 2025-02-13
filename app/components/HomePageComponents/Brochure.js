import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const BrochureSlider = ({ canvaLink}) => {
  const videoRef = useRef(null);

  return (
    <div className='w-full flex flex-col items-center'>

      <h2 className='font-redhat text-[2rem] mt-[2rem] font-bold text-black'>
        Property Brochure
      </h2>

      <div className="w-[90%] relative mt-[2rem] h-full justify-center flex items-center max-sm:items-center max-sm:max-h-[40%] max-sm:w-[90%]">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          loop
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={false}
          className="mySwiper rounded-2xl"
          // onSlideChange={(swiper) => {
          //   if (swiper.activeIndex === images.length && videoRef.current) {
          //     videoRef.current.play();
          //   } else if (videoRef.current) {
          //     videoRef.current.pause();
          //     videoRef.current.currentTime = 0;
          //   }
          // }} 
        >
          {/* {images?.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center overflow-hidden items-center rounded-2xl">
            <div className="w-full max-sm:h-[200px] h-[450px] relative">
              <img
                src={src?.image}
                alt={`Slide ${index}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-4">
                <p>{src?.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {video && (
          <SwiperSlide className="flex justify-center overflow-hidden items-center rounded-2xl">
            <div className="w-full max-sm:h-[200px] h-[450px] relative">
              <video
                ref={videoRef}
                src={video}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                muted 
                playsInline 
              />
            </div>
          </SwiperSlide>
        )} */}
          <SwiperSlide className="flex justify-center overflow-hidden items-center rounded-2xl">
            <div className="w-full max-sm:h-[200px] h-[450px] relative">
              <iframe
                src={canvaLink}
                className="w-full h-full rounded-2xl border-none"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev text-white absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"></div>
        <div className="swiper-button-next text-white absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"></div>
      </div>
    </div>
  );
};

export default BrochureSlider;
