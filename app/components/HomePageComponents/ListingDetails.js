import Bed from "../../../public/Bed.svg";
import Area from "../../../public/Area.svg";
import Bath from "../../../public/Bath.svg";
import Location from "../../../public/location.svg";
import DemoHouseImage from "../../../public/youtube.png"
import Image from "next/image";
import { useEffect, useState } from "react";
// import { Link } from "facebook-nodejs-business-sdk";
import Link from "next/link";



const ListingDetails = ({ features, contactFormHeader }) => {
    const [discountedPrice, setDiscountedPrice] = useState(null);

    useEffect(() => {
        async function fetch() {
            console.log("[fetaures]:", features);
            const discount = await calculateDiscount();
            setDiscountedPrice(discount);
        }
        fetch();
    }, [features]);

    const calculateDiscount = async () => {
        try {
            const discountExp = features?.discountPercentage / 100;
            console.log("[DISCOUNT PERCENTAGE]:", discountExp);
            const discountAmount = features?.pricing * discountExp;
            console.log("[DISCOUNT AMOUNT]:", discountAmount);
            const finalAmount = features?.pricing - discountAmount;
            console.log("[FINAL AMOUNT]:", finalAmount);
            return finalAmount;
        } catch (err) {
            console.log("[ERROR]:", err);
            return;
        }
    }

    return (
        <>
            <div className="h-[80vh] max-sm:h-auto w-full flex justify-center">
                <div className="my-5 w-[95%] bg-blueBack rounded-3xl flex max-sm:flex-col justify-between overflow-hidden font-redhat">
                    <div className="w-[50%] max-sm:w-[100%] max-sm:px-[2rem] py-[4rem] max-sm:py-[2rem] px-[4rem] flex flex-col justify-between">
                        <h2 className="text-[2rem] font-redhat max-sm:text-center max-sm:pb-3 max-sm:text-[1.5rem] text-white">
                            Discover your dream home in the heart of {features?.city}
                        </h2>

                        <div className="flex w-full gap-3 max-sm:flex-col">
                            <div className="flex items-center gap-3 max-sm:flex-col max-sm:items-center">
                                <Image src={Area} width={30} height={30} />

                                <p className="max-sm:font-semibold text-white">{features.beds} Beds</p>
                            </div>
                            <div className="flex items-center gap-3 max-sm:flex-col max-sm:items-center">
                                <Image src={Bath} width={30} height={30} />

                                <p className="max-sm:font-semibold text-white">{features.baths} Baths</p>
                            </div>
                            <div className="flex items-center gap-3 max-sm:flex-col max-sm:items-center">
                                <Image src={Bed} width={30} height={30} />

                                <p className="max-sm:font-semibold text-white">{features.square_fit} SqFt</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 mt-[1rem] max-sm:flex-col max-sm:items-center">
                            <Image src={Location} width={30} height={30} />

                            <p className="max-sm:text-center max-sm:font-semibold text-white">{features?.address || "default address"}</p>
                        </div>

                        <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-4 max-sm:pt-2">
                            {parseInt(features?.discountPercentage) > 0 && (
                                <>
                                    <div className="flex gap-4 items-center">
                                        <h3 className="text-2xl text-orangeBack font-semibold">$ {discountedPrice}</h3>
                                        <span className="text-orangeBack line-through">$ {features?.pricing}</span>
                                    </div>
                                </>
                            )}

                            {parseInt(features?.discountPercentage) === 0 && (
                                <>
                                    <div className="flex gap-4 items-center">
                                        <h3 className="text-2xl text-orangeBack font-semibold">$ {features?.pricing}</h3>
                                    </div>
                                </>
                            )}

                            <Link href="https://www.zillow.com/profile/Mike-Webb6" className="bg-orangeBack px-6 py-2 rounded-md text-sm text-[#172243] font-redhat max-sm:w-[100%]">
                                See more
                            </Link>
                        </div>
                    </div>

                    <div className="w-[50%] p-[2rem] h-full max-sm:w-[100%] max-sm:pt-0">
                        <div className=" h-full ">
                            <Image className="h-full w-full" src={DemoHouseImage} height={200} width={200} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListingDetails;