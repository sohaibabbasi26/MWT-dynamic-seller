"use client"

import { createContext, useState } from "react";

// Create context
export const HeroContext = createContext();

// Provide context to the app
export const HeroProvider = ({ children }) => {
    const [heroData, setHeroData] = useState({
        title: "Performance Overview",
        description:
            "Our company’s achievements in sales, client satisfaction, and market strategies, while also identifying areas for improvement and future opportunities.",
        location: "3487 S UTAH ST S Arlington, VA 22206",
        visitors: "5,296",
        lastUpdated: "December 20, 2024",
        images: ["/image1.png", "/image2.png", "/image3.png"],
    });

    return (
        <HeroContext.Provider value={{ heroData, setHeroData }}>
            {children}
        </HeroContext.Provider>
    );
};
