"use client"

import { useContext } from "react";
import { HeroContext } from "../context/HeroContxt";
import { useState, useEffect } from "react";

const AdminPage = () => {
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
        features: { beds: 0, baths: 0, square_fit: 0, address: "", pricing: "", discountPercentage: "", city: "" },
        socialCampaignsLinks: { fb: "", ig: "", email_blast: "" },
        contact_form_header: "",
        reviews: [{ name: "", rating: 0, comment: "" }],
        yt_link: "",
        address: "",
    });

    const handleReviewChange = (index, field, value) => {
        const updatedReviews = [...formData.reviews];
        updatedReviews[index][field] = value;
        setFormData((prev) => ({
            ...prev,
            reviews: updatedReviews,
        }));
    };

    const addReview = () => {
        setFormData((prev) => ({
            ...prev,
            reviews: [...prev.reviews, { name: "", rating: 0, comment: "" }],
        }));
    };

    const removeReview = (index) => {
        const updatedReviews = [...formData.reviews];
        updatedReviews.splice(index, 1);
        setFormData((prev) => ({
            ...prev,
            reviews: updatedReviews,
        }));
    };

    const [uploadedImages, setUploadedImages] = useState([]);

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
        const files = Array.from(e.target.files).slice(0, 5);
        setUploadedImages(files);
    };

    const handleSubmitImages = async () => {
        if (uploadedImages.length === 0) {
            console.error('No images selected for upload');
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('listing_id', listingId);

        uploadedImages.forEach((file, index) => {
            formDataToSend.append(`images[${index}]`, file);
        });

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post-listing-images`, {
                method: 'POST',
                body: formDataToSend,
            });

            const data = await response.json();
            console.log("[DATA FROM THE RESPONSE]:", data);

            if (response.ok) {
                alert('Images uploaded successfully!');
            } else {
                console.error("[ERROR IN RESPONSE]:", data.message);
            }
        } catch (err) {
            console.error("[ERROR]:", err);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/create-listing`, {
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
                setListingUrl(`https://dynamic-seller.vercel.app/home/${data?.listing?.listing_id}`);
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

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/upload-first-video`, {
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

    const handleSecondVideoUpload = async () => {

        const formDataToSend = new FormData();

        if (listingId) {
            formDataToSend.append('listing_id', listingId);
        }
        if (formData.uploaded_video_two) {
            formDataToSend.append('file', formData.uploaded_video_two);
        } else {
            console.error('No file selected for upload');
            return;
        }

        for (let [key, value] of formDataToSend.entries()) {
            console.log(`${key}: ${value}`);
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/upload-second-video`, {
            method: 'PUT',
            body: formDataToSend,
        });

        const data = await response.json();
        console.log("[DATA FROM THE RESPONSE]:", data);

        if (response.ok) {
            setThirdResponse(true);
        } else {
            console.error("[ERROR IN RESPONSE]:", data.message);
        }
        return;
    }

    useEffect(() => {
        console.log("[FORM DATA]:", formData);
        console.log("[FIRST RESPONSE RECEIVED]:", firstResponse);
    }, [formData, firstResponse]);


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

                    <h3 className="text-black font-semibold">Saves</h3>
                    <input
                        type="number"
                        name="saves"
                        placeholder="No of Saves"
                        value={formData.saves}
                        onChange={handleChange}
                        className="block w-full p-2 border rounded text-black"
                    />

                    <h3 className="text-black font-semibold">Youtube video url</h3>
                    <input
                        type="url"
                        name="yt_link"
                        placeholder="Youtube Video URL"
                        value={formData.yt_link}
                        onChange={handleChange}
                        className="block w-full p-2 border rounded text-black"
                    />

                    <h3 className="text-black font-semibold">Listing Engagements</h3>
                    <input
                        type="number"
                        name="listing_engagements"
                        placeholder="Listing Engagements"
                        value={formData.listing_engagements}
                        onChange={handleChange}
                        className="block w-full p-2 border rounded text-black"
                    />

                    <h3 className="text-black font-semibold">Interested Buyers</h3>
                    <input
                        type="number"
                        name="interested_buyers"
                        placeholder="Number of Interested buyers"
                        value={formData.interested_buyers}
                        onChange={handleChange}
                        className="block w-full p-2 border rounded text-black"
                    />

                    <h3 className="text-black font-semibold">Address of the listing</h3>
                    <input
                        type="text"
                        name="address"
                        placeholder="Enter the locality of the listing"
                        value={formData.address}
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

                        <h3 className="text-black font-semibold">City name</h3>
                        <input
                            type="text"
                            placeholder="City"
                            value={formData.features.city}
                            onChange={(e) => handleFeatureChange(e, "city")}
                            className="block w-full p-2 border rounded text-black"
                        />

                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold text-black">Reviews</h3>
                            {formData.reviews.map((review, index) => (
                                <div key={index} className="border p-4 rounded mb-4">
                                    <h4 className="text-md font-semibold text-black">
                                        Review {index + 1}
                                    </h4>
                                    <label className="text-black">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={review.name}
                                        onChange={(e) => handleReviewChange(index, "name", e.target.value)}
                                        className="block w-full p-2 border rounded text-black mb-2"
                                    />
                                    <label className="text-black">Rating</label>
                                    <input
                                        type="number"
                                        placeholder="Rating (1-5)"
                                        value={review.rating}
                                        min="1"
                                        max="5"
                                        onChange={(e) => handleReviewChange(index, "rating", e.target.value)}
                                        className="block w-full p-2 border rounded text-black mb-2"
                                    />
                                    <label className="text-black">Comment</label>
                                    <textarea
                                        placeholder="Comment"
                                        value={review.comment}
                                        onChange={(e) => handleReviewChange(index, "comment", e.target.value)}
                                        className="block w-full p-2 border rounded text-black mb-2"
                                    ></textarea>
                                    {formData.reviews.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeReview(index)}
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                        >
                                            Remove Review
                                        </button>
                                    )}
                                </div>
                            ))}

                            <button
                                type="button"
                                onClick={addReview}
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            >
                                Add Review
                            </button>
                        </div>

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

                    {secondResponse && listingUrl && (
                        <>
                            <h3 className="text-lg font-semibold">Second video upload</h3>
                            <input
                                type="file"
                                accept="video/*"
                                onChange={(e) => handleFileUpload(e, "uploaded_video_two")}
                                className="block w-full p-2 text-black"
                            />

                            <button className="text-black" onClick={handleSecondVideoUpload}>Submit Second Video</button>
                        </>
                    )}

                    {thirdResponse && (
                        <div>
                            <h3 className="text-lg font-semibold text-black">Upload Images (Max: 5)</h3>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleImageUpload}
                                className="block w-full p-2 border rounded text-black"
                            />
                            <button
                                type="button"
                                onClick={handleSubmitImages}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
                            >
                                Submit Images
                            </button>
                        </div>
                    )}


                    {/* File Uploads */}



                </form>
            </div>
        </div>
    );
};

export default AdminPage;
