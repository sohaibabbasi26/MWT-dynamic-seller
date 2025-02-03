import FbIcon from "../../../public/fb.svg";
import IgIcon from "../../../public/ig.svg";
import EmailBlastIcon from "../../../public/emailBlast.svg";
import GoTo from "../../../public/icons/gotoIcon.svg";

import Image from "next/image";
import SocialMediaPost from "./SocialMediaPost";
import { useEffect, useState } from "react";

const MarketingCompaign = ({ uploaded_images, socialCampaignsLinks }) => {
    const imagesToShow = uploaded_images?.slice(0, 3) || [];


    const [facebookListings, setFacebookListings] = useState([]);
    const [instagramListings, setInstagramListings] = useState([]);
    const [emailBlastListings, setEmailBlastListings] = useState([]);

    useEffect(() => {
        console.log("[SOCIAL CAMPAIGNS LINKS]:", socialCampaignsLinks);
        setFacebookListings(socialCampaignsLinks?.fb);
        setInstagramListings(socialCampaignsLinks?.ig);
        setEmailBlastListings(socialCampaignsLinks?.email_blast);


        if (facebookListings.length > 0 && instagramListings.length > 0 && emailBlastListings.length > 0) {
            console.log("[FACEBOOK LINKS]:", facebookListings);
            console.log("[INSTAGRAM LINKS]:", instagramListings);
            console.log("[EMAIL BLAST LINKS]:", emailBlastListings);
        }
    }, [facebookListings,instagramListings,emailBlastListings]);

    const getCircularImage = (index) => {
        if (uploaded_images?.length > 0) {
            return uploaded_images[index % uploaded_images.length]; 
        }
        return null;
    };

    const getRandomImage = () => {
        if (uploaded_images?.length > 0) {
            const randomIndex = Math.floor(Math.random() * uploaded_images.length);
            return uploaded_images[randomIndex];
        }
        return null;
    };

    const allListings = [
        ...facebookListings?.map((url, index) => ({ url, platform: "Facebook", icon: FbIcon, image: getRandomImage() })),
        ...instagramListings?.map((url, index) => ({ url, platform: "Instagram", icon: IgIcon, image: getRandomImage()})),
        ...emailBlastListings?.map((url, index) => ({ url, platform: "Email Blast", icon: EmailBlastIcon, image: getRandomImage() }))
    ];

    return (
        <div className="h-auto w-full bg-blueBack flex flex-col items-center my-4 py-[2rem] font-redhat">
            <div className="w-[90%] flex flex-col justify-center items-center gap-3">
                <h2 className="text-[2rem] text-white">Marketing Campaigns</h2>
                <p className="max-sm:text-center text-white">
                    Our approach includes the following campaigns that highlight your property's most impressive features.
                </p>

                {/* <button className="bg-orangeBack px-6 py-2 rounded-md text-sm text-[#172243] max-sm:w-[100%] font-redhat">
                    Visit Zillow
                </button> */}
            </div>

            <div className="w-[90%] h-full pt-[2rem] flex flex-wrap justify-center gap-6">
                {allListings.map((listing, index) => (
                    listing.image && (
                        <a key={index} href={listing.url} target="_blank" rel="noopener noreferrer"
                            className="w-[30%] max-sm:w-[100%] rounded-2xl overflow-hidden relative block">
                            <Image
                                className="h-[15rem] w-full object-cover"
                                src={listing.image}
                                alt={`${listing.platform} Ad`}
                                height={200}
                                width={300}
                            />

                            {/* Social Media Badge */}
                            <div className="bg-blueBack px-3 py-1 rounded-full absolute bottom-2 left-2 flex gap-[0.5rem]">
                                <Image src={listing.icon} alt={listing.platform} height={20} width={20} />
                                <span className="text-sm text-white">{listing.platform}</span>
                                <Image src={GoTo} alt="Go To Icon" height={20} width={20} />
                            </div>
                        </a>
                    )
                ))}
            </div>



            {/* <div className="w-[90%] h-full pt-[2rem] flex justify-between max-sm:flex-col max-sm:gap-6">
                {imagesToShow.map((image, index) => (
                    <div key={index} className="w-[30%] h-full max-sm:w-full rounded-2xl overflow-hidden relative">
                        <Image className="h-[15rem] w-[50rem]" src={image} alt={`Marketing Image ${index + 1}`} height={200} width={200} />

                        <div className="bg-blueBack px-3 py-1 rounded-full absolute bottom-2 left-2 flex gap-[0.5rem]">
                            {index === 0 && (
                                <>
                                    <Image src={FbIcon} alt="Facebook" height={20} width={20} />
                                    <span className="text-sm text-white">Facebook</span>
                                </>
                            )}
                            {index === 1 && (
                                <>
                                    <Image src={IgIcon} alt="Instagram" height={20} width={20} />
                                    <span className="text-sm text-white">Instagram</span>
                                </>
                            )}
                            {index === 2 && (
                                <>
                                    <Image src={EmailBlastIcon} alt="Email Blast" height={20} width={20} />
                                    <span className="text-sm text-white">Email Blast</span>
                                </>
                            )}

                            <Image src={GoTo} alt="Go To Icon" height={20} width={20} />
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default MarketingCompaign;
