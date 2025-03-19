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
            <section id="marketingM" className={`h-auto ${isSection ? "max-sm:mt-[2rem]" : "max-sm:mt-0"} mt-[2rem] max-sm:h-auto ${isSection ? 'w-[50%]' : 'w-full'} flex gap-4 px- font-redhat max-sm:flex-col `}>

                <div className={`bg-blueBack ${isComponent ? "py-[1rem]" : "p-[2rem]"}  w-[100%] h-[30rem] max-sm:w-auto flex flex-col justify-center items-center rounded-3xl `}>
                    {isComponent ? (
                        <></>
                    ) : (
                        <h3 className="font-redhat text-2xl font-semibold max-sm:text-center text-white">{heading}</h3>
                    )}
                    {isSection ? (<>
                        <div className="relative">
                            <RadialBarChart
                                width={w}
                                height={h}
                                innerRadius="60%"
                                outerRadius="90%"
                                barSize={15}
                                data={radialData}
                                startAngle={90}
                                endAngle={-270}
                            >
                                <PolarAngleAxis type="number" domain={[0, total]} tick={false} />
                                <RadialBar dataKey="value" cornerRadius={10} clockWise data={radialData} />
                            </RadialBarChart>

                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                <div className="bg-orangeBack rounded-full p-3">
                                    <Image
                                        src={Avatar}
                                        alt="User Icon"
                                        className="h-8 w-8"
                                        height={20}
                                        width={20}
                                    />
                                </div>
                            </div>
                        </div>
                    </>) : (<>

                        <iframe
                            src={zillowGraph}
                            className="w-full h-[1000px] rounded-2xl border-none mt-4"
                            allowFullScreen
                        ></iframe>

                    </>)}

                    <div className="text-white mt-4 text-center flex flex-col items-center">
                        {
                            isSection ? (<><div className="flex gap-2">
                                <p className={` ${isSection ? "text-[1.5rem]" : ""}`}>
                                    <span className={`text-orangeBack ${isSection ? "text-[2rem]" : ""} font-semibold`}>{views}</span> Views
                                </p>
                            </div></>) : (<></>)
                        }
                        {
                            isComponent ? (
                                <>
                                </>
                            ) : (
                                <><p className={`mt-2 font-bold text-white ${isSection ? "text-[1.5rem]" : ""}`}>
                                    {views} Views of {date}
                                </p></>
                            )
                        }
                    </div>
                </div>


            </section>

        </>
    )
}

export default GraphaSection;