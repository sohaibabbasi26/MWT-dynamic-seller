"use client"
import { useState, useEffect } from "react";
import { formatDateToDDMMYYYY } from "@/utils/formatDate";

const InstantAccessSubscribers = () => {

    const [instantSubscribers, setInstantSubscribers] = useState([]);
    const [selectedSubscribers, setSelectedSubscribers] = useState([]);
    const [deletionSuccessMessage, setDeletionSuccessMessage] = useState("");

    async function fetchAllInstantAccessSubscribers() {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/fetch-instant-access-subscribers`, {
                method: "GET",
            });
            const data = await response.json();
            console.log("[RESPONSE FOR INSTANT ACCESS SUBSCRIBER FETCHING]:", data);
            setInstantSubscribers(data?.data);
        } catch (err) {
            console.log("[ERROR]:", err);
            return;
        }
    }

    useEffect(() => {
        fetchAllInstantAccessSubscribers();
    }, []);

    const handleCheckboxChange = (accessId) => {
        if (selectedSubscribers.includes(accessId)) {
            setSelectedSubscribers(selectedSubscribers.filter((id) => id !== accessId)); // Remove from selected
        } else {
            setSelectedSubscribers([...selectedSubscribers, accessId]); // Add to selected
        }
    };

    const handleSelectAllChange = (e) => {
        if (e.target.checked) {
            setSelectedSubscribers(instantSubscribers.map((subscriber) => subscriber.access_id)); // Select all
        } else {
            setSelectedSubscribers([]); // Deselect all
        }
    };

    const handleDeleteSelected = async () => {
        if (selectedSubscribers.length === 0) {
            alert("Please select at least one subscriber to delete.");
            return;
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/delete-instant-subscribers`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    subscriber_ids: selectedSubscribers,
                }),
            });

            const data = await response.json();
            if (data.status === 200) {
                setDeletionSuccessMessage("Selected subscribers deleted successfully.");
                fetchAllInstantAccessSubscribers();
            } else {
                setDeletionSuccessMessage("Failed to delete selected subscribers.");
            }
        } catch (err) {
            console.log("[ERROR]:", err);
            setDeletionSuccessMessage("An error occurred while deleting the subscribers.");
        }
    };

    return (
        <>
            <div className="w-full h-auto py-[5rem] flex justify-center items-center">
                <div className="w-[95%] overflow-auto">
                    <div className="flex justify-center items-center w-[50%] gap-4 mb-4">
                        <button
                            onClick={handleDeleteSelected}
                            className="bg-red-500 text-white px-4 py-2 rounded"
                        >
                            Delete Selected Subscribers
                        </button>

                        <p className="text-black">{deletionSuccessMessage}</p>
                    </div>
                    <table className="table-auto border-collapse border border-gray-300 w-full">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2 text-left text-black">
                                    <input
                                        type="checkbox"
                                        onChange={handleSelectAllChange}
                                        checked={selectedSubscribers.length === instantSubscribers.length} // Select all if all are selected
                                    />
                                </th>
                                <th className="border border-gray-300 px-4 py-2 text-left text-black">Instant Subscriber ID</th>
                                <th className="border border-gray-300 px-4 py-2 text-left text-black">Email</th>
                                <th className="border border-gray-300 px-4 py-2 text-left text-black">First Name</th>
                                <th className="border border-gray-300 px-4 py-2 text-left text-black">Last Name</th>
                                <th className="border border-gray-300 px-4 py-2 text-left text-black">Phone Number</th>
                                <th className="border border-gray-300 px-4 py-2 text-left text-black">Subscribed At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {instantSubscribers?.map((subscriber, index) => (
                                <tr key={index} className="even:bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-2 text-black">
                                        <input
                                            type="checkbox"
                                            checked={selectedSubscribers.includes(subscriber.access_id)}
                                            onChange={() => handleCheckboxChange(subscriber.access_id)}
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-black">{subscriber.access_id}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-black">{subscriber.email || "N/A"}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-black">{subscriber.firstName}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-black">{subscriber.lastName}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-black">{subscriber.phoneNumber}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-black">{formatDateToDDMMYYYY(subscriber.updatedAt) || "N/A"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}


export default InstantAccessSubscribers;