"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Listings = () => {

    const router = useRouter();

    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchAllListings = async () => {
        setLoading(true)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/get-all-listings`, {
                method: "GET",
            });
            const data = await response.json();
            console.log("[data]:", data);
            if (data) {
                setListings(data?.listings);
                return
            }
        } catch (err) {
            console.log("[ERROR]:", err);
            return
        } finally {
            setLoading(false);
            return;
        }
    }

    useEffect(() => {
        fetchAllListings();
    }, []);

    const handleEdit = (listingId) => {
        console.log(`/listing/${listingId}`)
        router.push(`/listing/${listingId}`);
    };

    if (loading) return <p>Loading...</p>;
    if (!listings.length) return <p>No listings available.</p>;

    return (
        <>
            <div className="w-full h-auto py-[5rem] flex justify-center items-center">
                <div className="w-[95%] overflow-auto">
                    <table className="table-auto border-collapse border border-gray-300 w-full">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2 text-left text-black">Listing ID</th>
                                <th className="border border-gray-300 px-4 py-2 text-left text-black">Description</th>
                                <th className="border border-gray-300 px-4 py-2 text-left text-black">Location</th>
                                <th className="border border-gray-300 px-4 py-2 text-left text-black">Visitors</th>
                                <th className="border border-gray-300 px-4 py-2 text-left text-black">Features</th>
                                <th className="border border-gray-300 px-4 py-2 text-left text-black">Social Campaigns</th>
                                <th className="border border-gray-300 px-4 py-2 text-left text-black">Uploaded Images</th>
                                <th className="border border-gray-300 px-4 py-2 text-left text-black">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listings.map((listing, index) => (
                                <tr key={index} className="even:bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-2 text-black">{listing.listing_id}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-black">{listing.description || "N/A"}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-black">{listing.location || "N/A"}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-black">{listing.visitors || "N/A"}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-black">
                                        {listing.features ? (
                                            <>
                                                <div>Beds: {listing.features.beds || "N/A"}</div>
                                                <div>Baths: {listing.features.baths || "N/A"}</div>
                                                <div>Square Ft: {listing.features.square_fit || "N/A"}</div>
                                                <div>Pricing: {listing.features.pricing || "N/A"}</div>
                                                <div>Discount: {listing.features.discountPercentage || "N/A"}%</div>
                                            </>
                                        ) : (
                                            "N/A"
                                        )}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-black">
                                        {listing.socialCampaignsLinks ? (
                                            <>
                                                <div>
                                                    <a
                                                        href={listing.socialCampaignsLinks.fb}
                                                        className="text-blue-500 underline"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Facebook
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href={listing.socialCampaignsLinks.ig}
                                                        className="text-blue-500 underline"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Instagram
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href={listing.socialCampaignsLinks.email_blast}
                                                        className="text-blue-500 underline"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Email Blast
                                                    </a>
                                                </div>
                                            </>
                                        ) : (
                                            "N/A"
                                        )}
                                    </td>
                                    {/* <td className="border border-gray-300 px-4 py-2 text-sm">
                                        {listing.uploaded_images ? (
                                            <ul>
                                                {listing.uploaded_images.map((image, i) => (
                                                    <li key={i}>
                                                        <a
                                                            href={image}
                                                            className="text-blue-500 underline"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Image {i + 1}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            "No Images"
                                        )}
                                    </td> */}
                                    <td className="border border-gray-300 px-4 py-2 text-black">
                                        {listing.reviews && listing.reviews.length > 0 ? (
                                            <ul>
                                                {listing.reviews.map((review, i) => (
                                                    <li key={i}>
                                                        <strong>{review.name || "Anonymous"}:</strong>{" "}
                                                        {review.comment || "No comment"} ({review.rating}/5)
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            "No Reviews"
                                        )}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <button
                                            onClick={() => handleEdit(listing.listing_id)}
                                            className="text-blue-500 hover:text-blue-700 focus:outline-none"
                                            title="Edit Listing"
                                        >
                                            ✏️
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Listings;