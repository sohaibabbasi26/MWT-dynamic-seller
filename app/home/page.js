"use client"

import DynamicVideoContent from "../components/HomePageComponents/DynamicVideoContent";
import HeroSection from "../components/HomePageComponents/HeroSection";
import Navbar from "../components/Navbar";
import { HeroContext } from "../context/HeroContxt";
import { useContext } from "react";
import Footer from "../components/HomePageComponents/Footer";
import Zillow from "../components/HomePageComponents/Zillow";


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

            <DynamicVideoContent isLeftFlow={false} />

            <Zillow />

            <DynamicVideoContent isLeftFlow={true} />

            <Footer />
        </>
    )
}


export default HomePage;