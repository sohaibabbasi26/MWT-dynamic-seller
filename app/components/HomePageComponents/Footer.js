import Image from "next/image";


const Footer = () => {
    return (
        <>
            <div className="w-full h-[50vh] max-sm:h-[150vh] bg-blueBack flex justify-center items-center py-[2rem]">
                <div className="w-[95%] h-full flex max-sm:flex-col justify-between gap-[2rem] ">
                    <div className="h-full w-[30%] flex flex-col max-sm:w-[100%] max-sm:items-center justify-between">
                        <Image src="/MWT_logo.png" className="max-sm:h-[120px] max-sm:w-[230px]" height={130} width={130} alt="Logo" />

                        <div className="flex gap-2 max-sm:flex-col max-sm:gap-4 pt-[1rem]">
                            <Image height={120} width={120} src="/logo1.png" alt="/logo1" />
                            <Image height={120} width={120} src="/logo2.png" alt="/logo2" />
                            <Image height={120} width={120} src="/logo3.png" alt="/logo3" />
                        </div>
                    </div>

                    <div className="h-full w-[30%] flex flex-col max-sm:w-[100%] justify-center font-redhat max-sm:items-center">
                        <h2 className="text-lg font-semibold">
                            The Mike Webb Team
                        </h2>

                        <div className="w-full h-full flex gap- max-sm:flex-col max-sm:items-center">
                            <div className="w-[50%] ">
                                <ul className="text-sm max-sm:text-center">
                                    <li className="py-1 cursor-pointer">About</li>
                                    <li className="py-1 cursor-pointer">Client Success Stories</li>
                                    <li className="py-1 cursor-pointer">Search for Homes</li>
                                    <li className="py-1 cursor-pointer">Buyers</li>
                                </ul>
                            </div>

                            <div className="w-[50%]">
                                <ul className="text-sm max-sm:text-center">
                                    <li className="py-1 cursor-pointer">Sellers</li>
                                    <li className="py-1 cursor-pointer">Get Your Home's Value</li>
                                    <li className="py-1 cursor-pointer">Schedule a Call</li>
                                    <li className="py-1 cursor-pointer">Schedule a Call</li>
                                </ul>
                            </div>
                        </div>
 
                        <div className="max-sm:bg-[rgba(255,255,255,0.1)] rounded-lg max-sm:border-[1px] max-sm:border-orangeBack flex gap-4 items-center w-full max-sm:w-[70%] max-sm:py-[1rem] max-sm:mt-[2    rem] justify-center max-sm:flex-col">
                            <div>
                                <Image className="pt-1 max-sm:h-[50px] max-sm:w-[30px]" src="/icons/location.png" width={25} height={42} alt="location" />
                            </div>
                            <div className="max-sm:w-[100%] max-sm:flex max-sm:justify-center">
                                <h2 className="text-[16px] font-semibold font-redhat max-sm:w-[95%] max-sm:text-center">5100 Leesburg Pike Suite #200, Alexandria, VA 22302</h2>
                            </div>
                        </div>
                    </div>

                    <div className="h-full w-[30%] flex flex-col max-sm:w-[100%] max-sm:items-center">
                        <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <span className="text-sm font-redhat">
                                I agree to be contacted by The Mike Webb Team via call, email, and text. To opt-out, you can reply ‘STOP’ at any time or click the unsubscribe link in the emails. Message and data rates may apply. Message frequency varies. For more information, see our{" "}
                                <a href="/privacy-policy-and-terms-of-use" className="text-orangeBack">
                                    Privacy Policy
                                    &
                                    Terms of Use.
                                </a>
                            </span>
                        </div>

                        <div className="bg-[rgba(255,255,255,0.1)] flex justify-between p-2 w-[90%] my-[3rem] rounded-lg border-[1px] border-orangeBack max-sm:w-[95%] ">
                            <div className="flex gap-2 items-center">
                                <Image src="/Letter.png" height={30} width={30} />

                                <p className="text-sm font-redhat">
                                    Enter your email
                                </p>
                            </div>

                            <button className="bg-orangeBack px-8 py-2 rounded-md text-sm text-[#172243]  font-redhat">Subscribe</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;