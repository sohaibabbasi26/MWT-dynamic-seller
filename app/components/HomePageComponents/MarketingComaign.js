import FbIcon from "../../../public/fb.svg";
import IgIcon from "../../../public/ig.svg";
import EmailBlastIcon from "../../../public/emailBlast.svg";
import GoTo from "../../../public/icons/gotoIcon.svg"

import Image from "next/image";

const MarketingCompaign = () => {

    return (
        <>
            <div className="h-auto w-full bg-blueBack flex flex-col items-center my-4 py-[2rem] font-redhat">
                <div className="w-[90%] flex flex-col justify-center items-center gap-3">
                    <h2 className="text-[2rem]">
                        Marketing Campaigns
                    </h2>
                    <p className="max-sm: text-center">
                        Our approach includes the following campaigns that highlight your property's most impressive features.
                    </p>

                    <button className="bg-orangeBack px-6 py-2 rounded-md text-sm text-[#172243] max-sm:w-[100%] font-redhat">
                        Visit Zillow
                    </button>
                </div>

                <div className="w-[90%] h-full pt-[2rem] flex justify-between max-sm:flex-col max-sm:gap-6">
                    <div className="w-[30%] h-full max-sm:w-full rounded-2xl overflow-hidden relative">
                        <Image className="h-full w-full" src="/propertyTwo.jpeg" height={200} width={200} />

                        <div className="bg-blueBack px-3 py-1 rounded-full absolute bottom-2 left-2 flex gap-[0.5rem]">
                            <Image src={FbIcon} height={20} width={20}  />

                            <span className="text-sm">Facebook</span>

                            <Image src={GoTo} height={20} width={20} />
                        </div>
                    </div>

                    <div className="w-[30%] max-sm:w-full h-full rounded-2xl overflow-hidden relative ">
                        <Image className="h-full w-full" src="/propertyTwo.jpeg" height={200} width={200} />

                        <div className="bg-blueBack px-3 py-1 rounded-full absolute bottom-2 left-2 flex gap-[0.5rem]">
                            <Image src={IgIcon} height={20} width={20}  />

                            <span className="text-sm">Instagram</span>

                            <Image src={GoTo} height={20} width={20} />
                        </div>
                    </div>

                    <div className="w-[30%] h-full max-sm:w-full rounded-2xl overflow-hidden relative">
                        <Image className="h-full w-full" src="/propertyThree.jpeg" height={200} width={200} />

                        <div className="bg-blueBack px-3 py-1 rounded-full absolute bottom-2 left-2 flex gap-[0.5rem]">
                            <Image src={EmailBlastIcon} height={20} width={20}  />

                            <span className="text-sm">Email Blast</span>

                            <Image src={GoTo} height={20} width={20} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MarketingCompaign;