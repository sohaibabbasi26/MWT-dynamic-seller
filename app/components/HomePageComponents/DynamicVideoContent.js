import Image from "next/image";


const DynamicVideoContent = ({ isLeftFlow }) => {

    return (
        <>
            <div className="flex justify-center items-center h-auto py-4 bg-white">
                <div className="w-[95%] h-[100%] flex gap-[1rem] items-center max-sm:flex-col">

                    {isLeftFlow ? (
                        <>
                            <div className="w-[45%] h-[70vh] flex flex-col gap-[0.5rem] justify-center py-3 px-6 max-sm:h-auto max-sm:w-full" >
                                <h2 className="text-blueBack font-redhat text-[3rem] font-semibold max-sm:text-center max-sm:w-full max-sm:text-[1.8rem]">
                                    Market Insights & Marketing Metrics
                                </h2>

                                <p className="text-blueBack font-redhat text-sm font-semibold max-sm:text-center">
                                    Access expert analysis, trends, sales data, and market insights through an informative video. We’re dedicated to maximizing the value of 3487 S Utah St S with a customized digital marketing strategy that reaches a broad network of potential buyers.
                                </p>

                                <div className="flex gap-2 justify-start items-center max-sm:justify-center">
                                    <div>
                                        <span className="text-orangeBack font-redhat font-semibold max-sm:text-center">
                                            Visit Properties
                                        </span>
                                    </div>

                                    <div>
                                        <Image className="h-[15px]" src="/icons/right-arrow.png" width={20} height={5} alt="right-arrow" />
                                    </div>
                                </div>

                                <p className="text-blueBack font-redhat text-sm font-semibold max-sm:text-center">
                                    Here are the results so far
                                </p>

                                <div className="w-full h-[30%] bg-blueBack rounded-2xl px-8 flex items-center justify-between max-sm:flex-col max-sm:h-full">
                                    <div className="py-4 h-full flex flex-col justify-between max-sm:items-center">
                                        <div className="flex items-center gap-[0.5rem] max-sm:flex-col max-sm:justify-center">
                                            <p className="font-redhat max-sm:text-xl max-sm:font-semibold">
                                                5,296
                                            </p>

                                            <Image src="/icons/eye.png" className="max-sm:h-[40px] max-sm:w-[40px]" height={20} width={20} />
                                        </div>

                                        <p className="font-redhat">
                                            Views
                                        </p>
                                    </div>

                                    <div className="py-4 h-full flex flex-col justify-between">
                                        <div className="flex items-center gap-[0.5rem] max-sm:flex-col max-sm:justify-center">
                                            <p className="font-redhat max-sm:text-xl max-sm:font-semibold">
                                                455
                                            </p>

                                            <Image src="/icons/group.png" className="max-sm:h-[40px] max-sm:w-[40px]" height={20} width={20} />
                                        </div>

                                        <p className="font-redhat">
                                            Listing Engagement
                                        </p>
                                    </div>


                                    <div className="py-4 h-full flex flex-col justify-between">
                                        <div className="flex items-center gap-[0.5rem] max-sm:flex-col max-sm:justify-center">
                                            <p className="font-redhat max-sm:text-xl max-sm:font-semibold">
                                                46
                                            </p>

                                            <Image src="/icons/two_users.png" className="max-sm:h-[40px] max-sm:w-[40px]" height={20} width={20} />
                                        </div>

                                        <p className="font-redhat">
                                            Interested Buyers
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[55%] h-[70vh] bg-black rounded-3xl max-sm:h-[30vh] max-sm:w-full">
                            </div>

                        </>
                    ) : (
                        <>
                            <div className="w-[55%] h-[70vh] bg-black rounded-3xl max-sm:h-[30vh] max-sm:w-full">
                            </div>

                            <div className="w-[45%] h-[70vh] flex flex-col gap-[0.5rem] justify-center py-3 px-6 max-sm:h-auto max-sm:w-full" >
                                <h2 className="text-blueBack font-redhat text-[3rem] font-semibold max-sm:text-center max-sm:w-full max-sm:text-[1.8rem]">
                                    Market Insights & Marketing Metrics
                                </h2>

                                <p className="text-blueBack font-redhat text-sm font-semibold max-sm:text-center">
                                    Access expert analysis, trends, sales data, and market insights through an informative video. We’re dedicated to maximizing the value of 3487 S Utah St S with a customized digital marketing strategy that reaches a broad network of potential buyers.
                                </p>

                                <div className="flex gap-2 justify-start items-center max-sm:justify-center">
                                    <div>
                                        <span className="text-orangeBack font-redhat font-semibold max-sm:text-center">
                                            Visit Properties
                                        </span>
                                    </div>

                                    <div>
                                        <Image className="h-[15px]" src="/icons/right-arrow.png" width={20} height={5} alt="right-arrow" />
                                    </div>
                                </div>

                                <p className="text-blueBack font-redhat text-sm font-semibold max-sm:text-center">
                                    Here are the results so far
                                </p>

                                <div className="w-full h-[30%] bg-blueBack rounded-2xl px-8 flex items-center justify-between max-sm:flex-col max-sm:h-full">
                                    <div className="py-4 h-full flex flex-col justify-between max-sm:items-center">
                                        <div className="flex items-center gap-[0.5rem] max-sm:flex-col max-sm:justify-center">
                                            <p className="font-redhat max-sm:text-xl max-sm:font-semibold">
                                                5,296
                                            </p>

                                            <Image src="/icons/eye.png" className="max-sm:h-[40px] max-sm:w-[40px]" height={20} width={20} />
                                        </div>

                                        <p className="font-redhat">
                                            Views
                                        </p>
                                    </div>

                                    <div className="py-4 h-full flex flex-col justify-between">
                                        <div className="flex items-center gap-[0.5rem] max-sm:flex-col max-sm:justify-center">
                                            <p className="font-redhat max-sm:text-xl max-sm:font-semibold">
                                                455
                                            </p>

                                            <Image src="/icons/group.png" className="max-sm:h-[40px] max-sm:w-[40px]" height={20} width={20} />
                                        </div>

                                        <p className="font-redhat">
                                            Listing Engagement
                                        </p>
                                    </div>


                                    <div className="py-4 h-full flex flex-col justify-between">
                                        <div className="flex items-center gap-[0.5rem] max-sm:flex-col max-sm:justify-center">
                                            <p className="font-redhat max-sm:text-xl max-sm:font-semibold">
                                                46
                                            </p>

                                            <Image src="/icons/two_users.png" className="max-sm:h-[40px] max-sm:w-[40px]" height={20} width={20} />
                                        </div>

                                        <p className="font-redhat">
                                            Interested Buyers
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}




                </div>
            </div>
        </>
    )
}

export default DynamicVideoContent;