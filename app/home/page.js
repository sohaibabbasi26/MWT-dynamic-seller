"use client"

import HeroSection from "../components/HomePageComponents/HeroSection";
import Navbar from "../components/Navbar";
import { HeroContext } from "../context/HeroContxt";
import { useContext } from "react";


const HomePage = () => {

    const { heroData } = useContext(HeroContext);

    return (
        <>
             <HeroSection
                title={heroData.title}
                description={heroData.description}
                location={heroData.location}
                visitors={heroData.visitors}
                lastUpdated={heroData.lastUpdated}
                images={heroData.images}
            />
        </>
    )
}


export default HomePage;