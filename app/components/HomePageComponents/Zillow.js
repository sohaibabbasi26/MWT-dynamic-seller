

const Zillow = () => {
    return (
        <>
            <div className="w-full h-[50vh] my-4 flex flex-col gap-[1rem] justify-center items-center max-sm:h-auto">
                <h2 className="text-blueBack font-redhat text-[2.5rem] uppercase font-semibold">Zillow</h2>

                <p className="text-blueBack text-center w-[80%] font-redhat font-semibold">
                    Zillow is a leading online real estate marketplace that provides users with tools to buy, sell, and rent properties. It offers comprehensive data on property values, neighborhood information, and market trends, making it easier for consumers to make informed real estate decisions. Zillow's platform includes a vast database of homes, along with features like Zestimate, which estimates property values, and mortgage calculators to assist with financial planning
                    <span className="text-orangeBack"> Zillow-3487 S Utah St S </span> by The Mike Webb Team
                </p>

                <button className="py-3 px-6 bg-blueBack rounded-xl font-redhat max-sm:w-[90%]">Visit Zillow</button>
            </div>
        </>
    )
}

export default Zillow;