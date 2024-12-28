"use client"

import { useContext } from "react";
import { HeroContext } from "../context/HeroContxt";
import { useState,useEffect } from "react";

const AdminPage = () => {

    const [heroData, setHeroData] = useState(() => {
        const savedData = localStorage.getItem("heroData");
        return savedData
            ? JSON.parse(savedData)
            : {
                  title: "Performance Overview",
                  description:
                      "Our company’s achievements in sales, client satisfaction, and market strategies, while also identifying areas for improvement and future opportunities.",
                  location: "3487 S UTAH ST S Arlington, VA 22206",
                  visitors: "5,296",
                  lastUpdated: "December 20, 2024",
                  images: ["/image1.png", "/image2.png", "/image3.png"],
              };
    });

    useEffect(() => {
        console.log("[HERO DATA]:",heroData);
        localStorage.setItem("heroData", JSON.stringify(heroData));
    }, [heroData]);

    // const { heroData, setHeroData } = useContext(HeroContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHeroData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (index, value) => {
        const updatedImages = [...heroData.images];
        updatedImages[index] = value;
        setHeroData((prev) => ({
            ...prev,
            images: updatedImages,
        }));
    };

    const addImageField = () => {
        if (heroData.images.length === 0 || heroData.images[heroData.images.length - 1] !== "") {
            setHeroData((prev) => ({
                ...prev,
                images: [...prev.images, ""],
            }));
        } else {
            alert("Please fill the last image field before adding a new one.");
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-black">Admin Panel - Hero Section</h1>
            <div className="space-y-4">
                <div>
                    <label className="block font-semibold text-black">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={heroData.title}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded text-black"
                    />
                </div>
                <div>
                    <label className="block font-semibold text-black">Description</label>
                    <textarea
                        name="description"
                        value={heroData.description}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded text-black"
                        rows={3}
                    />
                </div>
                <div>
                    <label className="block font-semibold text-black">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={heroData.location}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded text-black"
                    />
                </div>
                <div>
                    <label className="block font-semibold text-black">Visitors</label>
                    <input
                        type="text"
                        name="visitors"
                        value={heroData.visitors}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded text-black"
                    />
                </div>
                <div>
                    <label className="block font-semibold text-black">Last Updated</label>
                    <input
                        type="text"
                        name="lastUpdated"
                        value={heroData.lastUpdated}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded text-black"
                    />
                </div>
                <div>
                    <label className="block font-semibold text-black">Slideshow Images</label>
                    {heroData.images.map((image, index) => (
                        <div key={index} className="flex items-center space-x-2 mb-2">
                            <input
                                type="text"
                                value={image}
                                onChange={(e) => handleImageChange(index, e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder={`Image ${index + 1}`}
                            />
                        </div>
                    ))}
                    <button onClick={addImageField} className="px-4 py-2 bg-blue-500 text-white rounded">
                        Add Image
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
