import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWordpress, FaTwitter, FaYoutube } from "react-icons/fa";
import { useState } from "react";

const Footer = ({ location }) => {

    const [email, setEmail] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            console.log("Please enter a valid email.");
            return;
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                console.log("Thank you for subscribing!");
                setEmail("");
                return
            } else {
                console.log("Failed to subscribe. Please try again.");
                return
            }
        } catch (error) {
            console.log("Error submitting email:", error);
            return;
        }
    };

    return (
        <>
            <div className="flex flex-col items-center bg-blueBack">

                <div className="w-full h-[50vh] max-sm:h-[150vh]  flex justify-center items-center py-[2rem]">

                    <div className="w-[95%] h-full flex max-sm:flex-col justify-between gap-[2rem] ">
                        <div className="h-full w-[30%] flex flex-col max-sm:w-[100%] max-sm:items-center justify-between">
                            <Image src="/MWT_logo.png" className="max-sm:h-[120px] max-sm:w-[230px]" height={130} width={130} alt="Logo" />

                            <div className="flex gap-2 max-sm:flex-col max-sm:gap-4 pt-[1rem]">
                                <Image height={120} width={120} src="/logo2.png" alt="/logo2" />
                                <Image height={120} width={120} src="/logo3.png" alt="/logo3" />
                            </div>
                        </div>

                        <div className="h-full w-[30%] flex flex-col max-sm:w-[100%] justify-center font-redhat max-sm:items-center">
                            <h2 className="text-lg font-semibold text-white">
                                The Mike Webb Team
                            </h2>

                            <div className="w-full h-full flex gap- max-sm:flex-col max-sm:items-center">
                                <div className="w-[50%] ">
                                    <ul className="text-sm max-sm:text-center">
                                        <li className="py-1 cursor-pointer text-white"><Link href="https://mikeandclaudiawebb.com/RealtorWebPage">About</Link></li>
                                        <li className="py-1 cursor-pointer text-white"><Link href="https://mikeandclaudiawebb.com/Testimonials">Client Success Stories</Link></li>
                                        <li className="py-1 cursor-pointer text-white"><Link href="#">Search for Homes</Link></li>
                                        <li className="py-1 cursor-pointer text-white"><Link href="https://mikeandclaudiawebb.com/buyerexperience">Buyers</Link></li>
                                    </ul>
                                </div>

                                <div className="w-[50%]">
                                    <ul className="text-sm max-sm:text-center">
                                        <li className="py-1 cursor-pointer text-white"><Link href="https://mikeandclaudiawebb.com/sellerexperience">Sellers</Link></li>
                                        <li className="py-1 cursor-pointer text-white"><Link href="https://mikeandclaudiawebb.com/sellerexperience">Get Your Home's Value</Link></li>
                                        <li className="py-1 cursor-pointer text-white"><Link href="https://mikeandclaudiawebb.com/MarketAnalysis">Get Your Home’s Value</Link></li>
                                        <li className="py-1 cursor-pointer text-white">Schedule a Call: 703-350-3884</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="max-sm:bg-[rgba(255,255,255,0.1)] rounded-lg max-sm:border-[1px] max-sm:border-orangeBack flex gap-4 items-center w-full max-sm:w-[70%] max-sm:py-[1rem] max-sm:mt-[2rem] justify-center max-sm:flex-col">
                                <div>
                                    <Image className="pt-1 max-sm:h-[50px] max-sm:w-[30px]" src="/icons/location.png" width={25} height={42} alt="location" />
                                </div>
                                <div className="max-sm:w-[100%] max-sm:flex max-sm:justify-center">
                                    <h2 className="text-[16px] font-semibold font-redhat max-sm:w-[95%] max-sm:text-center text-white">{location}</h2>
                                </div>
                            </div>
                        </div>

                        <div className="h-full w-[30%] flex flex-col max-sm:w-[100%] max-sm:items-center">
                            <div className="flex items-start gap-2">
                                <input type="checkbox" className="mt-1" />
                                <span className="text-sm font-redhat text-white">
                                    I agree to be contacted by The Mike Webb Team via call, email, and text. To opt-out, you can reply ‘STOP’ at any time or click the unsubscribe link in the emails. Message and data rates may apply. Message frequency varies. For more information, see our{" "}
                                    <a href="/privacy-policy-and-terms-of-use" className="text-orangeBack">
                                        Privacy Policy
                                        &
                                        Terms of Use.
                                    </a>
                                </span>
                            </div>

                            <div className="bg-[rgba(255,255,255,0.1)] flex justify-between p-2 w-[90%] my-[3rem] rounded-lg border-[1px] border-orangeBack max-sm:w-[95%]">
                                <div className="flex gap-2 items-center">
                                    <Image src="/Letter.png" height={30} width={30} />

                                    <input
                                        value={email}
                                        onChange={handleEmailChange}
                                        type="email"
                                        placeholder="Enter your email"
                                        className="text-sm font-redhat text-white bg-transparent outline-none w-[75%] pl-2"
                                    />
                                </div>

                                <button onClick={handleSubmit} className="bg-orangeBack px-8 py-2 rounded-md text-sm text-[#172243] font-redhat">Subscribe</button>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="flex gap-4 mb-[1rem] max-sm:mt-[2rem]">
                    <a href="https://web.facebook.com/themikewebbteam/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com/themikewebbteam/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/mike-webb-278a83b/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://virginiahousingtrends.wordpress.com/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
                        <FaWordpress />
                    </a>
                    <a href="https://x.com/TheMikeWebbTea1" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
                        <FaTwitter />
                    </a>
                    <a href="https://www.youtube.com/channel/UCEokNcwc-U5-nNHx7BeMvLw" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer;