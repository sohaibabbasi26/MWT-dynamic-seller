"use client"
import { formatDateToDDMMYYYY } from "@/utils/formatDate";
import { useEffect, useState } from "react";

const Subscribers = () => {

    const [subscribers, setSubscibers] = useState([]);

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

    return (
        <>
            <div className="w-full h-auto py-[5rem] flex justify-center items-center">
                <div className="w-[95%] overflow-auto">
                    <table className="table-auto border-collapse border border-gray-300 w-full">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2 text-left text-black">Subscriber ID</th>
                                <th className="border border-gray-300 px-4 py-2 text-left text-black">Email</th>
                                <th className="border border-gray-300 px-4 py-2 text-left text-black">Subscribed At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subscribers?.map((subscriber, index) => (
                                <tr key={index} className="even:bg-gray-50">
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