"use client"
import { useState, useEffect } from "react";
import { formatDateToDDMMYYYY } from "@/utils/formatDate";

const InstantAccessSubscribers = () => {

    const [instantSubscribers, setInstantSubscribers] = useState([]);

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

    return (
        <>
            <div className="w-full h-auto py-[5rem] flex justify-center items-center">
                <div className="w-[95%] overflow-auto">
                    <table className="table-auto border-collapse border border-gray-300 w-full">
                        <thead>
                            <tr className="bg-gray-100">
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