import Image from "next/image";
import GraphaSection from "./Graphs";
import Link from "next/link";

const Zillow = ({ visitZillow, zillowGraph, saves, location, zillowViews }) => {

    const radialData = [
        { name: "Views", value: zillowViews, fill: "#F68323" },
    ];


    return (
        <>
            <div className="w-full h-auto max-sm:my-[0.5rem] my-[2rem] flex flex-col gap-[1rem] justify-center items-center max-sm:h-auto">
                <h2 className="text-blueBack font-redhat text-[2.5rem] uppercase font-semibold">Zillow</h2>

                <p className="text-blueBack text-center w-[80%] font-redhat font-semibold">
                    Zillow is a premier online real estate marketplace that equips users with essential tools for buying, selling and renting properties. The platform provides extensive data on property values, neighborhood, insights and market trends, enabing customers to make well-informed estate decisions. With a comprehensive database of homes, Zillow features tools such as the Zestimate for property value estimates and mortgage calculators to support financial planning.
                </p>

                {visitZillow ? (
                    <>
                        <div className="w-[100%] max-sm:w-[90%] max-sm:mb-[1rem] flex justify-center mt-[1rem]">
                            <Link target="_blank" href={visitZillow} className="py-3 px-6 text-center w-[10%] bg-orangeBack text-blueBack rounded-xl font-redhat max-sm:w-[100%]">Visit Zillow</Link>
                        </div>
                    </>
                ) : (<></>)}

                <div className="flex justify-center gap-[3rem] w-[90%] max-sm:flex-col">
                    <div className="flex flex-col max-sm:gap-[0rem] gap-[1rem] max-sm:items-center items-center w-[20%] max-sm:w-[100%] max-sm:flex-col">

                        <div className="w-[100%] mt-[2rem] h-full max-sm:w-[100%]  bg-blueBack rounded-3xl px-8 flex flex-col items-center justify-between max-sm:flex-col max-sm:h-full">
                            <div className="py-8 h-[50%] flex flex-col  max-sm:items-center">
                                <div className="flex flex-col items-center gap-[0.5rem] max-sm:flex-col max-sm:justify-center">
                                    <p className="font-redhat text-3xl max-sm:text-xl max-sm:font-semibold text-white">
                                        {zillowViews}
                                    </p>

                                    <Image src="/eye.png" className="h-[50px] w-[50px] max-sm:h-[40px] max-sm:w-[40px]" height={10} width={10} />
                                </div>

                                <p className="font-redhat text-white text-2xl">
                                    Views
                                </p>
                            </div>

                            <div className="py-8 h-[50%] flex flex-col max-sm:items-center">
                                <div className="flex flex-col items-center gap-[0.5rem] max-sm:flex-col max-sm:justify-center">
                                    <p className="font-redhat text-3xl max-sm:text-xl max-sm:font-semibold text-white">
                                        {saves}
                                    </p>

                                    <Image src="/Group.png" className="h-[50px] w-[50px] max-sm:h-[40px] max-sm:w-[40px]" height={20} width={20} />
                                </div>

                                <p className="font-redhat text-white text-2xl">
                                    Saves
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[1rem] max-sm:items-center items-center w-[50%] max-sm:w-[100%] max-sm:flex-col">
                        <GraphaSection visitZillow={visitZillow} isZillow={true} h={200} w={400} heading="Zillow Views" isComponent={true} zillowGraph={zillowGraph} views={zillowViews} displayBtn={true} saves={saves} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Zillow;