"use client"
import { formatDateToDDMMYYYY } from "@/utils/formatDate";
import { useEffect, useState } from "react";

const Subscribers = () => {

    const [subscribers, setSubscibers] = useState([]);
    const [selectedSubscribers, setSelectedSubscribers] = useState([]);
    const [deletionSuccessMessage, setDeletionSuccessMessage] = useState('');


    async function fetchAllSubscribers() {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/fetch-all-subscribers`, {
                method: "GET",
            });
            const data = await response.json();
            console.log("[RESPONSE FOR SUBSCRIBER FETCHING]:", data);
            setSubscibers(data?.data);
        } catch (err) {
            console.log("[ERROR]:", err);
            return;
        }
    }

    useEffect(() => {
        fetchAllSubscribers()
    }, []);

    const handleCheckboxChange = (subscriptionId) => {
        if (selectedSubscribers.includes(subscriptionId)) {
            setSelectedSubscribers(selectedSubscribers.filter(id => id !== subscriptionId)); // Remove from selected
        } else {
            setSelectedSubscribers([...selectedSubscribers, subscriptionId]); // Add to selected
        }
    };

    const handleDeleteSelected = async () => {
        if (selectedSubscribers.length === 0) {
            alert("Please select at least one subscriber to delete.");
            return;
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/delete-subscriptions`, {
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
                // Refresh subscribers list after deletion
                fetchAllSubscribers();
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

                    <div className="flex justify-center items-center w-[50%] gap-4">
                        <button
                            onClick={handleDeleteSelected}
                            className="bg-red-500 text-white px-4 py-2 rounded mb-4"
                        >
                            Delete Selected Subscribers
                        </button>

                        <p className="text-black">{deletionSuccessMessage}</p>
                    </div>
                    <table className="table-auto border-collapse border border-gray-300 w-full">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2 text-left text-black">
                                    <input type="checkbox" onChange={(e) => { if (e.target.checked) { setSelectedSubscribers(subscribers.map((subscriber) => subscriber.subscription_id)); } else { setSelectedSubscribers([]); } }} />
                                </th>
                                <th className="border border-gray-300 px-4 py-2 text-left text-black">Subscriber ID</th>
                                <th className="border border-gray-300 px-4 py-2 text-left text-black">Email</th>
                                <th className="border border-gray-300 px-4 py-2 text-left text-black">Subscribed At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subscribers?.map((subscriber, index) => (
                                <tr key={index} className="even:bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-2 text-black">
                                        <input
                                            type="checkbox"
                                            checked={selectedSubscribers.includes(subscriber.subscription_id)}
                                            onChange={() => handleCheckboxChange(subscriber.subscription_id)}
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-black">{subscriber.subscription_id}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-black">{subscriber.email || "N/A"}</td>
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

export default Subscribers;