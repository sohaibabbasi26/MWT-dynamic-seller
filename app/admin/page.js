"use client"

import { useContext } from "react";
import { HeroContext } from "../context/HeroContxt";
import { useState, useEffect } from "react";

const AdminPage = () => {

    // const [submitPressed, setSubmitPressed] = useState(false);
    // const [heroData, setHeroData] = useState({
    //     title: "Performance Overview",
    //     description:
    //         "Our company’s achievements in sales, client satisfaction, and market strategies, while also identifying areas for improvement and future opportunities.",
    //     location: "3487 S UTAH ST S Arlington, VA 22206",
    //     visitors: "5,296",
    //     lastUpdated: "December 20, 2024",
    //     images: ["/image1.png", "/image2.png", "/image3.png"],
    // });
    const [listingUrl, setListingUrl] = useState('');
    const [firstResponse, setFirstResponse] = useState(false);
    const [secondResponse, setSecondResponse] = useState(false);
    const [thirdResponse, setThirdResponse] = useState(false);
    const [listingId, setListingId] = useState(false);

    const [formData, setFormData] = useState({
        location: "",
        description: "",
        visitors: 0,
        views: 0,
        listing_engagements: 0,
        interested_buyers: 0,
        saves: 0,
        features: { beds: 0, baths: 0, square_fit: 0, address: "", pricing: "", discountPercentage: "" },
        socialCampaignsLinks: { fb: "", ig: "", email_blast: "" },
        contact_form_header: "",
        reviews: [{ name: "", rating: 0, comment: "" }],

        // uploaded_video_one: null,
        // uploaded_video_two: null,
        // uploaded_images: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFeatureChange = (e, field) => {
        const { value } = e.target;
        setFormData((prev) => ({
            ...prev,
            features: {
                ...prev.features,
                [field]: value,
            },
        }));
    };

    const handleFileUpload = (e, key) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({
                ...prev,
                [key]: file,
            }));
        }
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setFormData((prev) => ({
            ...prev,
            uploaded_images: [...prev.uploaded_images, ...files],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await fetch(`http://localhost:4000/create-listing`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            const data = await result.json();
            console.log("[DATA FROM THE SERVER]:", data);
            if (data?.status === 200) {
                setFirstResponse(true);
                console.log("[data?.listing?.listing_id]:", data?.listing?.listing_id);
                setListingUrl(`http://localhost:3000/home/${data?.listing?.listing_id}`);
                setListingId(data?.listing?.listing_id);
            }
            return;
        } catch (err) {
            console.log("[ERROR]:", err);
            return err;
        }
    };

    const handleFirstVideoUpload = async () => {

        const formDataToSend = new FormData();

        if (listingId) {
            formDataToSend.append('listing_id', listingId); 
        }
        if (formData.uploaded_video_one) {
            formDataToSend.append('file', formData.uploaded_video_one); 
        } else {
            console.error('No file selected for upload');
            return; 
        }

        for (let [key, value] of formDataToSend.entries()) {
            console.log(`${key}: ${value}`);
        }

        const response = await fetch(`http://localhost:4000/upload-first-video`, {
            method: 'PUT', 
            body: formDataToSend,
        });

        const data = await response.json();
        console.log("[DATA FROM THE RESPONSE]:", data);

        if (response.ok) {
            setSecondResponse(true);
        } else {
            console.error("[ERROR IN RESPONSE]:", data.message);
        }
        return;
    }




    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         const savedData = localStorage.getItem("heroData");
    //         if (savedData) {
    //             setHeroData(JSON.parse(savedData));
    //             console.log("[saved data]:", JSON.parse(savedData));
    //         }
    //     }
    // }, []);

    useEffect(() => {
        console.log("[FORM DATA]:", formData);
        console.log("[FIRST RESPONSE RECEIVED]:", firstResponse);
    }, [formData, firstResponse]);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setHeroData((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }));
    // };

    // const handleImageChange = (index, value) => {
    //     const updatedImages = [...heroData.images];
    //     updatedImages[index] = value;
    //     setHeroData((prev) => ({
    //         ...prev,
    //         images: updatedImages,
    //     }));
    // };

    // const addImageField = () => {
    //     if (heroData.images.length === 0 || heroData.images[heroData.images.length - 1] !== "") {
    //         setHeroData((prev) => ({
    //             ...prev,
    //             images: [...prev.images, ""],
    //         }));
    //     } else {
    //         alert("Please fill the last image field before adding a new one.");
    //     }
    // };

    // const handleSubmit = () => {
    //     if (typeof window !== "undefined") {
    //         localStorage.setItem("heroData", JSON.stringify(heroData));
    //         console.log("Data saved to localStorage:", heroData);
    //     }
    // };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-black">Admin Panel - Hero Section</h1>
            <div className="p-8 bg-gray-100">
                <h1 className="text-2xl font-bold mb-4 text-black">Create New Listing</h1>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <h3 className="text-black font-semibold">Location</h3>
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange}
                        className="block w-full p-2 border rounded text-black"
                    />

                    <h3 className="text-black font-semibold">Description</h3>
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="block w-full p-2 border rounded text-black"
                    />

                    <h3 className="text-black font-semibold">Visitors</h3>
                    <input
                        type="number"
                        name="visitors"
                        placeholder="Visitors"
                        value={formData.visitors}
                        onChange={handleChange}
                        className="block w-full p-2 border rounded text-black"
                    />

                    <h3 className="text-black font-semibold">Views</h3>
                    <input
                        type="number"
                        name="views"
                        placeholder="Views"
                        value={formData.views}
                        onChange={handleChange}
                        className="block w-full p-2 border rounded text-black"
                    />

                    {/* Features */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-black">Features</h3>

                        <h3 className="text-black font-semibold">Beds</h3>
                        <input
                            type="number"
                            placeholder="Beds"
                            value={formData.features.beds}
                            onChange={(e) => handleFeatureChange(e, "beds")}
                            className="block w-full p-2 border rounded text-black"
                        />

                        <h3 className="text-black font-semibold">Baths</h3>
                        <input
                            type="number"
                            placeholder="Baths"
                            value={formData.features.baths}
                            onChange={(e) => handleFeatureChange(e, "baths")}
                            className="block w-full p-2 border rounded text-black"
                        />
                        <h3 className="text-black font-semibold">Square fit</h3>
                        <input
                            type="number"
                            placeholder="Square Feet"
                            value={formData.features.square_fit}
                            onChange={(e) => handleFeatureChange(e, "square_fit")}
                            className="block w-full p-2 border rounded text-black"
                        />
                        <h3 className="text-black font-semibold">Pricing</h3>
                        <input
                            type="number"
                            placeholder="Pricing"
                            value={formData.features.pricing}
                            onChange={(e) => handleFeatureChange(e, "pricing")}
                            className="block w-full p-2 border rounded text-black"
                        />
                        <h3 className="text-black font-semibold">Discount (in Percentage)</h3>
                        <input
                            type="number"
                            placeholder="Pricing"
                            value={formData.features.discountPercentage}
                            onChange={(e) => handleFeatureChange(e, "discountPercentage")}
                            className="block w-full p-2 border rounded text-black"
                        />
                    </div>

                    {/* Social Campaigns */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-black">Social Campaign Links</h3>

                        <h3 className="text-black font-semibold">Facebook</h3>

                        <input
                            type="url"
                            name="fb"
                            placeholder="Facebook Link"
                            value={formData.socialCampaignsLinks.fb}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    socialCampaignsLinks: { ...prev.socialCampaignsLinks, fb: e.target.value },
                                }))
                            }
                            className="block w-full p-2 border rounded text-black"
                        />

                        <h3 className="text-black font-semibold">Instagram</h3>

                        <input
                            type="url"
                            name="ig"
                            placeholder="Instagram Link"
                            value={formData.socialCampaignsLinks.ig}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    socialCampaignsLinks: { ...prev.socialCampaignsLinks, ig: e.target.value },
                                }))
                            }
                            className="block w-full p-2 border rounded text-black"
                        />

                        <h3 className="text-black font-semibold">Email Blast</h3>

                        <input
                            type="url"
                            name="email blast"
                            placeholder="Email Blast Link"
                            value={formData.socialCampaignsLinks.email_blast}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    socialCampaignsLinks: { ...prev.socialCampaignsLinks, email_blast: e.target.value },
                                }))
                            }
                            className="block w-full p-2 border rounded text-black"
                        />

                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Submit Listing Info
                    </button>

                    {firstResponse && (
                        <>
                            <p className="text-center text-green-900">
                                Successfully created a listing, now you can move forward to add media, don't refresh the page before adding the media.
                            </p>
                        </>
                    )}

                    {listingUrl && (
                        <>
                            <h3 className="text-black font-semibold">Make sure to copy thus link before refreshing.</h3>

                            <p className="text-black text-center">
                                {listingUrl}
                            </p>
                        </>
                    )}

                    {firstResponse && listingUrl && (
                        <>
                            <h3 className="text-lg font-semibold text-black">First video upload</h3>
                            <input
                                type="file"
                                accept="video/*"
                                onChange={(e) => handleFileUpload(e, "uploaded_video_one")}
                                className="block w-full p-2 text-black"
                            />

                            <button className="text-black" onClick={handleFirstVideoUpload}>Submit First Video</button>
                        </>
                    )}

                    {secondResponse && listingUrl   && (
                        <>
                            <h3 className="text-lg font-semibold">Second video upload</h3>
                            <input
                                type="file"
                                accept="video/*"
                                onChange={(e) => handleFileUpload(e, "uploaded_video_two")}
                                className="block w-full p-2 text-black"
                            />

                            <button onClick={handleFirstVideoUpload}>Submit First Video</button>
                        </>
                    )}

                    {/* File Uploads */}
                    {/* <div>
                        <h3 className="text-lg font-semibold">Videos</h3>
                        <input
                            type="file"
                            accept="video/*"
                            onChange={(e) => handleFileUpload(e, "uploaded_video_one")}
                            className="block w-full p-2 text-black"
                        />
                        <input
                            type="file"
                            accept="video/*"
                            onChange={(e) => handleFileUpload(e, "uploaded_video_two")}
                            className="block w-full p-2 text-black"
                        />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-black">Images</h3>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageUpload}
                            className="block w-full p-2 text-black"
                        />
                    </div> */}


                </form>
            </div>
        </div>
    );
};

export default AdminPage;
