"use client";

import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import ReviewCard from "./ReviewCard";


const Testimonials = ({data}) => {

    const reviewsDummyArray = [
        {
            role: 'Finance Manager',
            name: "Michelle",
            description: " The Mike Webb Team offers a seamless, user-friendly experience with intuitive navigation, detailed listings, and excellent customer support—highly recommended for all real estate needs!",
            rating: 4
        },
        {
            role: 'General Manager',
            name: "Chris",
            description: " The Mike Webb Team offers a seamless, user-friendly experience with intuitive navigation, detailed listings, and excellent customer support—highly recommended for all real estate needs!",
            rating: 5
        },
    ]

    return (
        <>
            <div className="h-[50vh] max-sm:h-auto max-sm:py-5 w-full flex justify-center font-redhat">

                <div className="flex w-[90%] h-full my-[1rem] max-sm:mt-0 justify-center items-center max-sm:flex-col">
                    <div className="w-[50%] max-sm:w-[100%] h-full flex items-center max-sm:p-0 pl-10 max-sm:mb-2">
                        <h2 className="text-4xl max-sm:text-2xl font-redhat font-semibold text-blueBack w-[100%] max-sm:text-center">See what our clients has to say about us</h2>
                    </div>

                    <Swiper
                        pagination={{ clickable: true }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper rounded-2xl w-[40%] flex justify-center max-sm:w-[100%]"
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        speed={800}
                        loopFillGroupWithBlank={true}   
                    >
                        {data?.reviews?.map((src, index) => (
                            <SwiperSlide key={index} className="flex justify-center w-full overflow-hidden items-center rounded-2xl">
                                <ReviewCard rating={src.rating} name={src.name} description={src.comment} role={src.role} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>



            </div>
        </>
    )
}

export default Testimonials;