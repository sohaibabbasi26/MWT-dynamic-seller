import Image from "next/image";
import Slideshow from "./Slideshow";
import { useState, useEffect } from "react";
import Footer from "./Footer";

const HeroSection = ({ title, description, location, visitors, lastUpdated, images }) => {

    useEffect(() => {
        console.log(title, description, location, visitors, lastUpdated, images)
    },[title, description, location, visitors, lastUpdated, images])

    // const [heroData, setHeroData] = useState({
    //     title: "",
    //     description: "",
    //     location: "",
    //     visitors: "",
    //     lastUpdated: "",
    //     images: [],
    // });

    // useEffect(() => {
    //     const savedData = localStorage.getItem("heroData");
    //     if (savedData) {
    //         setHeroData(JSON.parse(savedData));
    //     }
    // }, []);


    return (
        <>
            {/* {heroData && ( */}
                <div className="h-auto pt-[4rem] max-sm:pt-[5rem] w-full bg-blueBack flex justify-center ">
                    <div className="w-[90%] h-[100%] max-sm:items-center flex flex-col items-center justify-center">
                        <div className="w-[60%] px-10 h-[100%] flex flex-col items-center justify-center max-sm:items-center max-sm:w-[100%]">
                            <h1 className="text-white text-center text-[3.5rem] w-[80%] font-redhat max-sm:text-[2rem] max-sm:text-center max-sm:w-full">
                                {title}
                            </h1>

                            <p className="text-white text-center font-redhat text-[16px] w-[90%] max-sm:w-[95%] max-sm:text-center">
                                {description}
                            </p>


                        </div>



                        <div className="w-[90%] mt-[2rem] h-full flex items-center max-sm:items-center max-sm:max-h-[40%] max-sm:w-[90%] " >
                            <Slideshow images={images} />
                        </div>


                        {/* {heroData.location ? ( */}
                            <>
                                <div className="bg-[rgba(255,255,255,0.1)] max-sm:flex-col flex justify-between p-4 w-[90%] my-[3rem] rounded-lg border-[1px] border-orangeBack max-sm:w-[95%]">
                                    <div className="flex gap-4 items-center max-sm:flex-col">
                                        <div>
                                            <Image className="pt-1" src="/icons/location.png" width={25} height={42} alt="location" />
                                        </div>
                                        <div>
                                            <h2 className="text-[16px] font-semibold font-redhat max-sm:text-center">Location</h2>
                                            <p className="text-[14px] font-redhat">{location}</p>
                                        </div>
                                    </div>

                                    {/* <div className="flex justify-start items-center gap-3 mt-4"> */}
                                    <div className="flex gap-2 items-center max-sm:flex-col">
                                        <div>
                                            <Image className="pt-1" src="/icons/User.png" width={42} height={42} alt="location" />
                                        </div>
                                        <div>
                                            <h2 className="text-[16px] font-semibold font-redhat max-sm:text-center">Visitors</h2>
                                            <p className="text-[14px] font-redhat">{visitors}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 items-center max-sm:flex-col">
                                        <div>
                                            <Image className="pt-1" src="/icons/History.png" width={42} height={42} alt="location" />
                                        </div>
                                        <div>
                                            <h2 className="text-[16px] font-semibold font-redhat max-sm:text-center">Last Updated</h2>
                                            <p className="text-[14px] font-redhat">{lastUpdated}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* </div> */}
                            </>
                        {/* ) : (
                            <></>
                        )} */}

                    </div>



                </div>
            {/* )} */}

            
        </>
    )
}

export default HeroSection;