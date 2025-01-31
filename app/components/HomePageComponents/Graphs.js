import { BarChart, Bar, XAxis, YAxis, Tooltip, RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import Avatar from "../../../public/avatar.svg";
import Image from "next/image";
import { formatDateToDDMMYYYY } from "@/utils/formatDate";
import { useEffect, useState } from "react";

const data = [
    { name: "Mon", value: 20 },
    { name: "Tue", value: 40 },
    { name: "Wed", value: 60 },
    { name: "Thu", value: 70 },
    { name: "Fri", value: 50 },
    { name: "Sat", value: 40 },
    { name: "Sun", value: 30 },
];



const GraphaSection = ({ views, saves }) => {

    const total = views + saves;
    const [date, setDate] = useState();

    useEffect(() => {
        const date = new Date();
        console.log("[DATE]:", date);
        const newFormattedDate = formatDateToDDMMYYYY(date);
        setDate(newFormattedDate);
    },[]);

    // const remainingViews = totalViews - views;

    const radialData = [
        { name: "Views", value: views, fill: "#F68323" },
        { name: "Saves", value: saves, fill: "#FFE0C5" },
    ];

    return (
        <>
            <div className="h-[80vh] mt-[1rem] max-sm:h-auto w-full flex gap-4 px-10 font-redhat max-sm:flex-col  ">
                {/* <div className="bg-blueBack w-[60%] max-sm:w-auto gap-[2rem] flex flex-col justify-center items-center rounded-3xl p-8">
                    <h3 className="font-redhat text-3xl font-semibold max-sm:text-center max-sm:text-lg">Daily Views on 3487 S Utah St S</h3>

                    <BarChart className="h-full w-full max-sm:mr-6" width={280} height={300} data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#F68323" style={{ borderRadius: 30 }} />
                    </BarChart>
                </div> */}

                <div className="bg-blueBack  w-[100%] max-sm:w-auto flex flex-col justify-center items-center rounded-3xl p-[2rem]">
                    <h3 className="font-redhat text-3xl font-semibold max-sm:text-center">Overall Property Views</h3>
                    <div className="relative">
                        <RadialBarChart
                            width={400}
                            height={200}
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

                    <div className="text-white mt-4 text-center flex flex-col items-center">
                        <div className="flex gap-2">
                            <p>
                                <span className="text-[#FFE0C5] font-semibold">{saves}</span> Saves
                            </p>
                            <p>
                                <span className="text-orangeBack font-semibold">{views}</span> Views
                            </p>
                        </div>
                        <p className="mt-2 font-bold">
                            {views} Views of {date}
                        </p>
                    </div>
                </div>


            </div>

        </>
    )
}

export default GraphaSection;