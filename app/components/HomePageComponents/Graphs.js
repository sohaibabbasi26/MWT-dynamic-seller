import { BarChart, Bar, XAxis, YAxis, Tooltip, RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import Avatar from "../../../public/avatar.svg";
import Image from "next/image";
import { formatDateToDDMMYYYY } from "@/utils/formatDate";
import { useEffect, useState } from "react";
import Link from "next/link";

const data = [
    { name: "Mon", value: 20 },
    { name: "Tue", value: 40 },
    { name: "Wed", value: 60 },
    { name: "Thu", value: 70 },
    { name: "Fri", value: 50 },
    { name: "Sat", value: 40 },
    { name: "Sun", value: 30 },
];



const GraphaSection = ({ isZillow, visitZillow, zillowGraph, isSection, views, saves, displayBtn, isComponent, heading, h, w }) => {

    console.log("[display button STATE]:", isComponent);

    const total = views + saves;
    const [date, setDate] = useState();

    useEffect(() => {
        const date = new Date();
        console.log("[DATE]:", date);
        const newFormattedDate = formatDateToDDMMYYYY(date);
        setDate(newFormattedDate);
    }, []);


    const radialData = [
        { name: "Views", value: views, fill: "#F68323" },
    ];

    console.log("[Visit zillow link]:", heading === "Zillow Views");

    return (
        <>
            <section id="marketingM" className={`h-auto ${isSection ? "max-sm:mt-[2rem]" : "max-sm:mt-0"} mt-[2rem] max-sm:h-auto w-full flex gap-4 px- font-redhat max-sm:flex-col `}>

                <div className={`bg-blueBack ${isComponent ? "py-[1rem]" : "p-[2rem]"}  w-[100%] h-[50rem] max-sm:w-auto flex flex-col justify-center items-center rounded-3xl `}>
                    <h3 className="font-redhat text-2xl font-semibold max-sm:text-center text-white">{heading}</h3>
                    { visitZillow && isZillow  ? (
                        <>
                            <div className="w-[100%] max-sm:w-[90%] max-sm:mb-[1rem] flex justify-center mt-[1rem]">
                                <Link target="_blank" href={visitZillow} className="py-3 px-6 text-center w-[40%] bg-orangeBack text-blueBack rounded-xl font-redhat max-sm:w-[100%]">Visit Zillow</Link>
                            </div>
                        </>
                    ) : (<></>)}
                    <iframe
                        src={zillowGraph}
                        className="w-full h-[1000px] rounded-2xl border-none mt-4"
                        allowFullScreen
                    ></iframe>

                    <div className="text-white mt-4 text-center flex flex-col items-center">
                        <div className="flex gap-2">
                            <p className={` ${isSection ? "text-[1.5rem]" : ""}`}>
                                <span className={`text-orangeBack ${isSection ? "text-[2rem]" : ""} font-semibold`}>{views}</span> Views
                            </p>
                        </div>
                        <p className={`mt-2 font-bold text-white ${isSection ? "text-[1.5rem]" : ""}`}>
                            {views} Views of {date}
                        </p>
                    </div>


                </div>


            </section>

        </>
    )
}

export default GraphaSection;