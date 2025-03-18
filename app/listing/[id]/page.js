"use client"

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { formatDateToDDMMYYYY } from "@/utils/formatDate";

const IndividualListing = () => {

    const [listingUrl, setListingUrl] = useState('');
    const [firstResponse, setFirstResponse] = useState(false);
    const [secondResponse, setSecondResponse] = useState(false);
    const [thirdResponse, setThirdResponse] = useState(false);
    const [fourthResponse, setFourthResponse] = useState(false);
    const [fifthResponse, setFifthResponse] = useState(false);
    const [igPosts, setIgPosts] = useState(null);
    const [fbPosts, setFbPosts] = useState(false);
    const [selectedPostIds, setSelectedPostIds] = useState([]);
    const [selectedFbPostIds, setSelectedFbPostIds] = useState([]);
    const [formData, setFormData] = useState({
        location: "",
        description: "",
        visitors: 0,
        visitZillowLink: "",
        graphSectionEmbeddedLink: "",
        zillowGraphSectionEmbeddedLink: "",
        brightMLSgraphSectionEmbeddedLink: "",
        zillowViews: 0,
        mlsViews: 0,
        homesDotComViews: 0,
        listing_engagements: 0,
        interested_buyers: 0,
        saves: 0,
        brochure: "",
        features: {
            beds: 0,
            baths: 0,
            square_fit: 0,
            address: "",
            pricing: "",
            discountPercentage: "",
            city: "",
        },
        socialCampaignsLinks: { fb: [], ig: [], email_blast: [] },
        contact_form_header: "",
        reviews: [{ name: "", rating: 0, comment: "" }],
        yt_link: "",
        address: "",
        additionalPages: [{ heading: "", canvaLink: "" }]

    });


    // const [formData, setFormData] = useState({
    //     location: "",
    //     description: "",
    //     visitors: 0,
    //     zillowViews: 0,
    //     mlsViews: 0,
    //     homesDotComViews: 0,
    //     listing_engagements: 0,
    //     interested_buyers: 0,
    //     saves: 0,
    //     features: { beds: 0, baths: 0, square_fit: 0, address: "", pricing: "", discountPercentage: "", city: "" },
    //     socialCampaignsLinks: { fb: [], ig: [], email_blast: [] },
    //     contact_form_header: "",
    //     reviews: [{ name: "", rating: 0, comment: "" }],
    //     yt_link: "",
    //     address: "",
    // });
    const { id } = useParams();


    const [originalData, setOriginalData] = useState([]);

    useEffect(() => {
        const fetchListingData = async () => {
            try {

                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/get-listing/${id}`, {
                    method: "GET",
                });
                const data = await response.json();
                console.log("[fetched data]:", data);
                setFormData(data?.data);
                setOriginalData(data?.data);
            } catch (err) {
                console.error("[ERROR FETCHING LISTING DATA]:", err);
            }
        };

        fetchListingData();
    }, []);

    useEffect(() => {
        console.log("[ORIGINAL DATA]:", originalData);
        console.log("[FORM DATA]:", formData);
    }, [originalData, formData])

    // const { id } = useParams();



    const handleReviewChange = (index, field, value) => {
        const updatedReviews = [...formData.reviews];
        updatedReviews[index][field] = value;
        setFormData((prev) => ({
            ...prev,
            reviews: updatedReviews,
        }));
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files).slice(0, 5);
        setUploadedImages(files);
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

    const handleSubmit = async (e) => {
        const bodyData = {
            data: formData,
            listing_id: id
        }
        e.preventDefault();
        try {
            const totalViews = parseInt(formData.zillowViews) + parseInt(formData.homesDotComViews) + parseInt(formData.mlsViews);
            const totalVisitors = parseInt(formData.zillowViews) + parseInt(formData.homesDotComViews) + parseInt(formData.mlsViews) + parseInt(formData.listing_engagements) + parseInt(formData.interested_buyers) + parseInt(formData.saves);

            console.log("[Total Views]:", totalViews);
            const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/edit-listing`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        listing_id: id,
                        data: {
                            ...formData,
                            views: totalViews,
                            visitors: totalVisitors
                        }
                    }
                )
            });

            const data = await result.json();
            console.log("[DATA FROM THE SERVER]:", data);
            if (data?.status === 200) {
                setFirstResponse(true);
                setListingUrl(`https://www.bestnovahomefinder.com/home/${id}`);
            }
            return;
        } catch (err) {
            console.log("[ERROR]:", err);
            return err;
        }
    };

    const handleSubmitImages = async () => {
        if (uploadedImages.length === 0) {
            console.error('No images selected for upload');
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('listing_id', id);

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
                setFourthResponse(true);
            } else {
                console.error("[ERROR IN RESPONSE]:", data.message);
            }
        } catch (err) {
            console.error("[ERROR]:", err);
        }
    };


    const handleFirstVideoUpload = async () => {

        const formDataToSend = new FormData();

        if (id) {
            formDataToSend.append('listing_id', id);
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

        if (id) {
            formDataToSend.append('listing_id', id);
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


    const addSocialLink = (platform) => {
        setFormData((prev) => ({
            ...prev,
            socialCampaignsLinks: {
                ...prev.socialCampaignsLinks,
                [platform]: [...prev.socialCampaignsLinks[platform], ""],
            },
        }));
    };

    const handleSocialLinkChange = (platform, index, value) => {
        setFormData((prev) => {
            const updatedLinks = [...prev.socialCampaignsLinks[platform]];
            updatedLinks[index] = value;

            return {
                ...prev,
                socialCampaignsLinks: {
                    ...prev.socialCampaignsLinks,
                    [platform]: updatedLinks,
                },
            };
        });
    };

    // Function to remove a social link input field
    const removeSocialLink = (platform, index) => {
        setFormData((prev) => {
            const updatedLinks = [...prev.socialCampaignsLinks[platform]];
            updatedLinks.splice(index, 1);

            return {
                ...prev,
                socialCampaignsLinks: {
                    ...prev.socialCampaignsLinks,
                    [platform]: updatedLinks,
                },
            };
        });
    };

    const fetchIGPosts = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/get-all-insta-posts`, {
                method: "GET"
            });
            const data = await response.json();
            console.log("[DATA]:", data);
            if (data?.status === 200) {
                setIgPosts(data?.data);
                return
            } else {
                return
            }
        } catch (err) {
            console.log("[ERROR]:", err);
            return;
        }
    }

    const fetchFBPosts = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/get-all-facebook-posts`, {
                method: "GET"
            });
            const data = await response.json();
            console.log("[DATA FOR FB POSTS]:", data);
            if (data?.status === 200) {
                setFbPosts(data?.posts);
                return
            } else {
                return
            }
        } catch (err) {
            console.log("[ERROR]:", err);
            return;
        }
    }

    useEffect(() => {
        fetchIGPosts();
        fetchFBPosts();
    }, []);

    const togglePostSelection = (postId) => {
        setSelectedPostIds((prevSelected) =>
            prevSelected.includes(postId)
                ? prevSelected.filter((id) => id !== postId)
                : [...prevSelected, postId]
        );
    };

    const toggleFbPostSelection = (post) => {
        console.log("[POST]:", post)
        setSelectedFbPostIds((prevSelected) => {
            const isSelected = prevSelected.some((selectedPost) => selectedPost.id === post.id);
            console.log("[is selected condition]:", isSelected);

            if (isSelected) {
                return prevSelected.filter((selectedPost) => selectedPost.id !== post.id);
            } else {
                // setSelectedFbPostIds()
                return [...prevSelected, post];
            }
        });
    };

    const submitInstaPostsForAutoGenerationOfViews = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/update-automatic-views`, {
                method: "POST",
                body: JSON.stringify({
                    mediaIds: selectedPostIds,
                    facebookPosts: selectedFbPostIds,
                    listing_id: id
                }),
                headers: {
                    "content-type": "application/json"
                }
            });
            const data = await response.json();

            console.log("[DATA FROM SERVER]:", data);
            if (data?.status === 200) {
                setFifthResponse(true);
                return;
            } else {
                alert("Ther was some error at the server side");
                return;
            }
            return;
        } catch (err) {
            console.log("[ERR]:", err);
            return
        }
    }

    const removeAdditionalPage = (index) => {
        const updatedAdditionalPages = [...formData.additionalPages];
        updatedAdditionalPages.splice(index, 1);
        setFormData((prev) => ({
            ...prev,
            additionalPages: updatedAdditionalPages
        }))
    }

    const addAdditionalPage = () => {
        setFormData((prev) => ({
            ...prev,
            additionalPages: [...prev.additionalPages, { heading: "", canvaLink: "" }]
        }))
    }

    const handleAdditionalPageChange = (index, field, value) => {
        const updatedAdditionalPages = [...formData.additionalPages];
        updatedAdditionalPages[index][field] = value;
        setFormData((prev) => ({
            ...prev,
            additionalPages: updatedAdditionalPages
        }))
    }

    return (
        <>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4 text-black">Listing Edit Page</h1>

                <div className="w-full h-[20%] flex justify-center items-center mt-[2rem]">
                    <div className="border-2 rounded-2xl border-black p-5">
                        <h1 className="text-black text-[1rem] font-bold pb-2">STEPS TO FILL OUT THE FORM:</h1>
                        <ul className="text-black">
                            <li>
                                <span className="font-bold">STEP 1:</span> Fill the textual information about the listing page, then suibmit and wait for second step to get enabled.
                            </li>
                            <li>
                                <span className="font-bold">STEP 2:</span> Upload the video (not more than 10mb) that should reflect on "Marketing Insights section", then submit and wait for third step to get enabled.
                            </li>
                            <li>
                                <span className="font-bold">STEP 3:</span> Upload the video (not more than 10mb) that should reflect on "Bright MLS", then submit and wait for fourth step to get enabled.
                            </li>
                            <li>
                                <span className="font-bold">STEP 4:</span> Upload the pictures (not more than 10mb each and maximum 5) and wait for the popup to display the success of upload.
                            </li>
                            <li>
                                <span className="font-bold">STEP 5:</span> Select the insta and fb posts you want to use for this one listing, and submit. (For automatic generation of listing engagement, enterested buyers and social media views values.)
                            </li>
                        </ul>

                        <p className="text-black pt-2 text-sm"><span className="font-bold">NOTE:</span> One step will be visible before the next one, complete one step and then wait for the next one.</p>
                    </div>
                </div>


                <div className="p-8 bg-gray-100">
                    <h1 className="text-3xl font-bold mb-4 text-black">STEP 1:</h1>

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

<h3 className="text-black font-semibold">Cumulative graph canva Link</h3>
                    <input
                        type="text"
                        name="graphSectionEmbeddedLink"
                        placeholder="Cumulative graph canva link"
                        value={formData.graphSectionEmbeddedLink}
                        onChange={handleChange}
                        className="block w-full p-2 border rounded text-black"
                    />

                    <h3 className="text-black font-semibold">Zillow graph canva Link</h3>
                    <input
                        type="text"
                        name="zillowGraphSectionEmbeddedLink"
                        placeholder="Zillow graph canva link"
                        value={formData.zillowGraphSectionEmbeddedLink}
                        onChange={handleChange}
                        className="block w-full p-2 border rounded text-black"
                    />

                    <h3 className="text-black font-semibold">BrightMLS graph canva Link</h3>
                    <input
                        type="text"
                        name="brightMLSgraphSectionEmbeddedLink"
                        placeholder="BrightMLS graph canva link"
                        value={formData.brightMLSgraphSectionEmbeddedLink}
                        onChange={handleChange}
                        className="block w-full p-2 border rounded text-black"
                    />

                    <h3 className="text-black font-semibold">"Visit Zillow" link</h3>
                    <input
                        type="text"
                        name="visitZillowLink"
                        placeholder="Visit Zillow Link"
                        value={formData.visitZillowLink}
                        onChange={handleChange}
                        className="block w-full p-2 border rounded text-black"
                    />


                        <h3 className="text-black font-semibold">Brochure Canva Link</h3>
                        <input
                            type="text"
                            name="brochure"
                            placeholder="Brochure canva link"
                            value={formData.brochure}
                            onChange={handleChange}
                            className="block w-full p-2 border rounded text-black"
                        />

                        {/* <h3 className="text-black font-semibold">Visitors</h3>
                        <input
                            type="number"
                            name="visitors"
                            placeholder="Visitors"
                            value={formData.visitors}
                            onChange={handleChange}
                            className="block w-full p-2 border rounded text-black"
                        /> */}

                        <h3 className="text-black font-semibold">Zillow Views</h3>
                        <input
                            type="number"
                            name="zillowViews"
                            placeholder="Zillow Views"
                            value={formData.zillowViews}
                            onChange={handleChange}
                            className="block w-full p-2 border rounded text-black"
                        />

                        <h3 className="text-black font-semibold">Bright MLS Views</h3>
                        <input
                            type="number"
                            name="mlsViews"
                            placeholder="Bright MLS Views"
                            value={formData.mlsViews}
                            onChange={handleChange}
                            className="block w-full p-2 border rounded text-black"
                        />

                        <h3 className="text-black font-semibold">Homes.com Views</h3>
                        <input
                            type="number"
                            name="homesDotComViews"
                            placeholder="Homes.com Views"
                            value={formData.homesDotComViews}
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



                        {/* Features */}
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold text-black">Features</h3>

                            <h3 className="text-black font-semibold">Beds</h3>
                            <input
                                type="number"
                                placeholder="Beds"
                                value={formData?.features?.beds}
                                onChange={(e) => handleFeatureChange(e, "beds")}
                                className="block w-full p-2 border rounded text-black"
                            />

                            <h3 className="text-black font-semibold">Baths</h3>
                            <input
                                type="number"
                                placeholder="Baths"
                                value={formData?.features?.baths}
                                onChange={(e) => handleFeatureChange(e, "baths")}
                                className="block w-full p-2 border rounded text-black"
                            />
                            <h3 className="text-black font-semibold">Square fit</h3>
                            <input
                                type="number"
                                placeholder="Square Feet"
                                value={formData?.features?.square_fit}
                                onChange={(e) => handleFeatureChange(e, "square_fit")}
                                className="block w-full p-2 border rounded text-black"
                            />
                            <h3 className="text-black font-semibold">Pricing</h3>
                            <input
                                type="number"
                                placeholder="Pricing"
                                value={formData?.features?.pricing}
                                onChange={(e) => handleFeatureChange(e, "pricing")}
                                className="block w-full p-2 border rounded text-black"
                            />
                            <h3 className="text-black font-semibold">Discount (in Percentage)</h3>
                            <input
                                type="number"
                                placeholder="Pricing"
                                value={formData?.features?.discountPercentage}
                                onChange={(e) => handleFeatureChange(e, "discountPercentage")}
                                className="block w-full p-2 border rounded text-black"
                            />

                            <h3 className="text-black font-semibold">City name</h3>
                            <input
                                type="text"
                                placeholder="City"
                                value={formData?.features?.city}
                                onChange={(e) => handleFeatureChange(e, "city")}
                                className="block w-full p-2 border rounded text-black"
                            />

                            <h3 className="text-black font-semibold">Address of the listing</h3>
                            <input
                                type="text"
                                placeholder="address of the listing"
                                value={formData.features.address}
                                onChange={(e) => handleFeatureChange(e, "address")}
                                className="block w-full p-2 border rounded text-black"
                            />

<div className="space-y-3">
                            <h3 className="text-lg font-semibold text-black">Additional Pages</h3>

                            {formData.additionalPages.map((page, index) => (
                                <div key={index} className="border p-4 rounded mb-4">
                                    <h4 className="text-md font-semibold text-black">Page {index + 1}</h4>

                                    <label className="text-black">Heading</label>
                                    <input
                                        type="text"
                                        placeholder="Enter heading"
                                        value={page.heading}
                                        onChange={(e) => handleAdditionalPageChange(index, "heading", e.target.value)}
                                        className="block w-full p-2 border rounded text-black mb-2"
                                    />

                                    <label className="text-black">Canva Link</label>
                                    <input
                                        type="url"
                                        placeholder="Enter Canva Link"
                                        value={page.canvaLink}
                                        onChange={(e) => handleAdditionalPageChange(index, "canvaLink", e.target.value)}
                                        className="block w-full p-2 border rounded text-black mb-2"
                                    />

                                    {formData.additionalPages.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeAdditionalPage(index)}
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                        >
                                            Remove Page
                                        </button>
                                    )}
                                </div>
                            ))}

                            <button
                                type="button"
                                onClick={addAdditionalPage}
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            >
                                Add Page
                            </button>
                        </div>


                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold text-black">Reviews</h3>
                                {formData?.reviews?.map((review, index) => (
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

                            {/* Facebook Links */}
                            <h3 className="text-black font-semibold">Facebook Links</h3>
                            {formData.socialCampaignsLinks.fb.map((link, index) => (
                                <div key={index} className="flex gap-2 mb-2">
                                    <input
                                        type="url"
                                        placeholder="Facebook Link"
                                        value={link}
                                        onChange={(e) => handleSocialLinkChange("fb", index, e.target.value)}
                                        className="block w-full p-2 border rounded text-black"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeSocialLink("fb", index)}
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() => addSocialLink("fb")}
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            >
                                Add Facebook Link
                            </button>

                            {/* Instagram Links */}
                            <h3 className="text-black font-semibold">Instagram Links</h3>
                            {formData.socialCampaignsLinks.ig.map((link, index) => (
                                <div key={index} className="flex gap-2 mb-2">
                                    <input
                                        type="url"
                                        placeholder="Instagram Link"
                                        value={link}
                                        onChange={(e) => handleSocialLinkChange("ig", index, e.target.value)}
                                        className="block w-full p-2 border rounded text-black"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeSocialLink("ig", index)}
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() => addSocialLink("ig")}
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            >
                                Add Instagram Link
                            </button>

                            {/* Email Blast Links */}
                            <h3 className="text-black font-semibold">Email Blast Links</h3>
                            {formData.socialCampaignsLinks.email_blast.map((link, index) => (
                                <div key={index} className="flex gap-2 mb-2">
                                    <input
                                        type="url"
                                        placeholder="Email Blast Link"
                                        value={link}
                                        onChange={(e) => handleSocialLinkChange("email_blast", index, e.target.value)}
                                        className="block w-full p-2 border rounded text-black"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeSocialLink("email_blast", index)}
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() => addSocialLink("email_blast")}
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            >
                                Add Email Blast Link
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Update Listing Info
                        </button>

                        {/* {firstResponse && (
                            <>
                                <p className="text-center text-green-900">
                                    Successfully created a listing, now you can move forward to add media, don't refresh the page before adding the media.
                                </p>
                            </>
                        )} */}



                        {firstResponse && listingUrl && (
                            <>
                                <h1 className="text-3xl font-bold mb-4 text-black">STEP 2:</h1>


                                <h3 className="text-lg font-semibold text-black">First video upload (will be reflected on Market Insights and Marketing Metrics)</h3>
                                <input
                                    type="file"
                                    accept="video/*"
                                    onChange={(e) => handleFileUpload(e, "uploaded_video_one")}
                                    className="block w-full p-2 text-black"
                                />

                                <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    onClick={handleFirstVideoUpload}>Submit First Video</button>
                            </>
                        )}

                        {secondResponse && listingUrl && (
                            <>
                                <h1 className="text-3xl font-bold mb-4 text-black">STEP 3:</h1>

                                <h3 className="text-lg font-semibold text-black">Second video upload (will be reflected on Market Insights and Marketing Metrics)</h3>
                                <input
                                    type="file"
                                    accept="video/*"
                                    onChange={(e) => handleFileUpload(e, "uploaded_video_two")}
                                    className="block w-full p-2 text-black"
                                />

                                <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    onClick={handleSecondVideoUpload}>Submit Second Video</button>
                            </>
                        )}

                        {thirdResponse && (
                            <div>
                                <h1 className="text-3xl font-bold mb-4 text-black">STEP 4:</h1>

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


                        {fourthResponse && (
                            <>
                                <h3 className="text-black font-semibold">Make sure to copy this link before refreshing.</h3>

                                <p className="text-black text-center">
                                    {listingUrl}
                                </p>
                            </>
                        )}


                        {/* File Uploads */}
                        {fourthResponse && (
                            <>
                                <div className=" flex flex-wrap gap-4">
                                    <h1 className="text-3xl font-bold mb-4 text-black">STEP 5:</h1>

                                    <h1 className="text-3xl font-bold mb-4 text-black">SELECT INSTAGRAM POSTS:</h1>
                                    {igPosts?.length > 0 && (
                                        <>
                                            {igPosts.map((post, index) => (
                                                <div onClick={() => togglePostSelection(post.id)} key={index} className={`max-sm:w-[100%] p-4 border-2 min-h-[20vh] w-[30%] rounded-2xl cursor-pointer transition-all
                                    ${selectedPostIds.includes(post.id) ? "border-blue-500 bg-blue-100" : "border-black"}
                                `}>
                                                    <div className="mb-[1rem]">
                                                        <span className="text-black font-xl font-bold ">POSTED ON:</span>
                                                        <span className="text-black font-xl">{formatDateToDDMMYYYY(post?.timestamp)}</span>
                                                    </div>
                                                    <p className="text-sm text-black line-clamp-3">{post?.caption}</p>
                                                </div>
                                            ))}
                                        </>
                                    )}


                                </div>


                                <div className=" flex flex-wrap gap-4">
                                    <h1 className="text-3xl font-bold mb-4 text-black">SELECT FACEBOOK POSTS:</h1>
                                    {fbPosts?.length > 0 && (
                                        <>
                                             {fbPosts?.map((post, index) => (
                                            <div onClick={() => toggleFbPostSelection(post)} key={index} className={`max-sm:w-[100%] p-4 border-2 min-h-[20vh] w-[30%] rounded-2xl cursor-pointer transition-all
                                                ${selectedFbPostIds.some((selectedPost) => selectedPost.id === post.id) ? "border-blue-500 bg-blue-100" : "border-black"}`}>
                                                <div className="mb-[1rem]">
                                                    <span className="text-black font-xl font-bold ">POSTED ON:</span>
                                                    <span className="text-black font-xl">{formatDateToDDMMYYYY(post?.created_time)}</span>
                                                </div>
                                                <p className="text-sm text-black line-clamp-3">{post?.message}</p>
                                            </div>
                                        ))}
                                        </>
                                    )}


                                </div>

                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
                                    onClick={submitInstaPostsForAutoGenerationOfViews}>Submit</button>



                            </>
                        )}


                        {fifthResponse && (
                            <>
                                <h3 className="text-black font-semibold">Make sure to copy thus link before refreshing.</h3>

                                <p className="text-black text-center">
                                    {listingUrl}
                                </p>
                            </>
                        )}


                    </form>
                </div>
            </div>
        </>
    )
}

export default IndividualListing;