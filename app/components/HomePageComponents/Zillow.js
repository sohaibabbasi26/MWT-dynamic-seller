import Image from "next/image";

const Zillow = ({ saves, location, zillowViews }) => {
    return (
        <>
            <div className="w-full h-[50vh] my-4 flex flex-col gap-[1rem] justify-center items-center max-sm:h-auto">
                <h2 className="text-blueBack font-redhat text-[2.5rem] uppercase font-semibold">Zillow</h2>

                <p className="text-blueBack text-center w-[80%] font-redhat font-semibold">
                    Zillow is a leading online real estate marketplace that provides users with tools to buy, sell, and rent properties. It offers comprehensive data on property values, neighborhood information, and market trends, making it easier for consumers to make informed real estate decisions. Zillow's platform includes a vast database of homes, along with features like Zestimate, which estimates property values, and mortgage calculators to assist with financial planning
                    <span className="text-orangeBack"> {location} </span> by The Mike Webb Team
                </p>

                <div className="flex justify-between max-sm:items-center items-center w-[50%] max-sm:w-[90%] max-sm:flex-col">
                    <div className="w-[30%] max-sm:w-[100%] max-sm:mb-[1rem]">
                        <button className="py-3 px-6 w-[90%] bg-blueBack rounded-xl font-redhat max-sm:w-[100%]">Visit Zillow</button>
                    </div>

                    <div className="w-[50%] h-[100%] max-sm:w-[100%]  bg-blueBack rounded-2xl px-8 flex items-center justify-between max-sm:flex-col max-sm:h-full">
                        <div className="py-4 h-full flex flex-col justify-between max-sm:items-center">
                            <div className="flex items-center gap-[0.5rem] max-sm:flex-col max-sm:justify-center">
                                <p className="font-redhat max-sm:text-xl max-sm:font-semibold text-white">
                                    {/* {data?.views} */}
                                    {zillowViews}
                                </p>

                                <Image src="/icons/eye.png" className="max-sm:h-[40px] max-sm:w-[40px]" height={20} width={20} />
                            </div>

                            <p className="font-redhat text-white">
                                Views
                            </p>
                        </div>

                        <div className="py-4 h-full flex flex-col justify-between">
                            <div className="flex items-center gap-[0.5rem] max-sm:flex-col max-sm:justify-center">
                                <p className="font-redhat max-sm:text-xl max-sm:font-semibold text-white">
                                    {/* {data?.listing_engagements} */}
                                    {saves}
                                </p>

                                <Image src="/icons/group.png" className="max-sm:h-[40px] max-sm:w-[40px]" height={20} width={20} />
                            </div>

                            <p className="font-redhat text-white">
                                Saves
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Zillow;