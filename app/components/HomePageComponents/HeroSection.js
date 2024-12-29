import Image from "next/image";
import Slideshow from "./Slideshow";
import { useState, useEffect } from "react";

const HeroSection = ({ title, description, location, visitors, lastUpdated, images }) => {

    const [heroData, setHeroData] = useState({
        title: "",
        description: "",
        location: "",
        visitors: "",
        lastUpdated: "",
        images: [],
    });

    useEffect(() => {
        const savedData = localStorage.getItem("heroData");
        if (savedData) {
            setHeroData(JSON.parse(savedData));
        }
    }, []);


    return (
        <>
            {heroData && (
                <div className="h-[100vh] w-full bg-blueBack flex justify-center ">
                    <div className="w-[90%] h-[100%] max-sm:items-center flex max-sm:flex-col items-start justify-center">
                        <div className="w-[60%] px-10 h-[100%] flex flex-col items-start justify-center max-sm:items-center max-sm:w-[100%]">
                            <h1 className="text-white text-[3rem] w-[80%] font-redhat font-[1.5rem] max-sm:text-center max-sm:w-full">
                                {heroData.title}
                            </h1>

                            <p className="text-white font-redhat text-[16px] w-[90%] max-sm:w-[95%] max-sm:text-center">
                                {heroData.description}
                            </p>

                            {heroData.location ? (
                                <>
                                    <div className="bg-[rgba(255,255,255,0.1)] p-4 w-[70%] mt-5 rounded-lg border-[1px] border-orangeBack max-sm:w-[95%]">
                                        <div className="flex gap-2 items-start">
                                            <div>
                                                <Image className="pt-1" src="/icons/location.png" width={12} height={12} alt="location" />
                                            </div>
                                            <div>
                                                <h2 className="text-[16px] font-semibold font-redhat">Location</h2>
                                                <p className="text-[14px] font-redhat">{heroData.location}</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-start items-center gap-3 mt-4">
                                            <div className="flex gap-2 items-start">
                                                <div>
                                                    <Image className="pt-1" src="/icons/User.png" width={22} height={22} alt="location" />
                                                </div>
                                                <div>
                                                    <h2 className="text-[16px] font-semibold font-redhat">Visitors</h2>
                                                    <p className="text-[14px] font-redhat">{heroData.visitors}</p>
                                                </div>
                                            </div>

                                            <div className="flex gap-2 items-start">
                                                <div>
                                                    <Image className="pt-1" src="/icons/User.png" width={22} height={22} alt="location" />
                                                </div>
                                                <div>
                                                    <h2 className="text-[16px] font-semibold font-redhat">Last Updated</h2>
                                                    <p className="text-[14px] font-redhat">{heroData.lastUpdated}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}
                        </div>



                        <div className="w-[40%] h-full flex items-center max-sm:items-center max-sm:max-h-[40%] max-sm:w-[80%] " >
                            <Slideshow images={heroData.images} />
                        </div>

                    </div>



                </div>
            )}
        </>
    )
}

export default HeroSection;