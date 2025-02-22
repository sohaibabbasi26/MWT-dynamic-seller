"use client"

import DynamicVideoContent from "../../components/HomePageComponents/DynamicVideoContent";
import HeroSection from "../../components/HomePageComponents/HeroSection";
import Navbar from "../../components/Navbar";
import { HeroContext } from "../../context/HeroContxt";
import { useContext, useEffect, useReducer, useState } from "react";
import Footer from "../../components/HomePageComponents/Footer";
import Zillow from "../../components/HomePageComponents/Zillow";
import Testimonials from "../../components/HomePageComponents/Testimonials";
import ListingDetails from "../../components/HomePageComponents/ListingDetails";
import Image from "next/image";
import MarketingCompaign from "../../components/HomePageComponents/MarketingComaign";
import GraphaSection from "../../components/HomePageComponents/Graphs";
import ContactForm from "../../components/HomePageComponents/ContactForm";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setListing } from "@/app/redux/slices/listingSlice";
import Link from "next/link";
import Brochure from "@/app/components/HomePageComponents/Brochure";
import BrochureSlider from "@/app/components/HomePageComponents/Brochure";
// import PropertyBrochure from "@/app/components/HomePageComponents/Brochure";

const HomePage = () => {
    const { id } = useParams();
    const [listingData, setListingData] = useState(null);
    const [brochureData, setBrochureData] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const isSection = true;

    const { data } = useSelector((state) =>
        state.listing
    );

    useEffect(() => {
        console.log("[DATA]:", data);
    }, [data]);

    const mergeImagesAndText = (data) => {
        console.log("[DATA IN MERGING METHOD]:", data);
        const { images, imagesText } = data;
        const mergedArray = images.map((image, index) => ({
            image,
            text: imagesText[index] || ""
        }));
        return mergedArray;
    };

    const fetchListingInfo = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/get-listing/${id}`, {
                method: "GET",
            });
            const data = await response.json();
            console.log("[LISTING DATA]:", data);

            // setListingData(data);
            dispatch(setListing(data));
            // const mergedData = mergeImagesAndText(data?.data?.brochure);
            // console.log("[MERGED DATA]:",mergedData);
            // const brochureUpdatedDataObject = {
            //     imagesData: mergedData,
            //     video: data?.data?.brochure?.video
            // }
            // setBrochureData(brochureUpdatedDataObject);

            // console.log("[BROCHURE DATA]:",brochureUpdatedDataObject);

            if (listingData) {
                console.log("[LISTING DATA in state]:", listingData);
                // const mergedData = mergeImagesAndText(listingData?.data?.brochure);
                // console.log("[MERGED DATA]:",mergedData);

            }
            setLoading(false);
        } catch (err) {
            console.error("[ERROR FETCHING LISTING]:", err);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchListingInfo();
        }
    }, [id]);


    if (loading) {
        return <p>Loading...</p>;
    }

    if (!data) {
        return <p>Error loading the listing. Please try again.</p>;
    }

    const firstVidSectionContent = <>
        <p className="text-blueBack font-redhat text-sm font-semibold max-sm:text-center">
            Access expert analysis, trends, sales data, and market insights through an informative video. We’re dedicated to maximizing the value of {data?.location} with a customized digital marketing strategy that reaches a broad network of potential buyers.
        </p>

        <div className="flex gap-2 justify-start items-center max-sm:justify-center">
            <div>
                <span className="text-orangeBack font-redhat font-semibold max-sm:text-center">
                    Visit Properties
                </span>
            </div>

            <div>
                <Image className="h-[15px   ]" src="/icons/right-arrow.png" width={20} height={5} alt="right-arrow" />
            </div>
        </div>

        <p className="text-blueBack font-redhat text-sm font-semibold max-sm:text-center">
            Here are the results so far
        </p>

        <div className="w-full h-[30%] bg-blueBack rounded-2xl px-8 flex items-center justify-between max-sm:flex-col max-sm:h-full">
            <div className="py-4 h-full flex flex-col justify-between max-sm:items-center">
                <div className="flex items-center gap-[0.5rem] max-sm:flex-col max-sm:justify-center">
                    <p className="font-redhat max-sm:text-xl max-sm:font-semibold text-white">
                        {data?.views}
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
                        {data?.listing_engagements}
                    </p>

                    <Image src="/icons/Group.png" className="max-sm:h-[40px] max-sm:w-[40px]" height={20} width={20} />
                </div>

                <p className="font-redhat text-white">
                    Listing Engagement
                </p>
            </div>


            <div className="py-4 h-full flex flex-col justify-between">
                <div className="flex items-center gap-[0.5rem] max-sm:flex-col max-sm:justify-center">
                    <p className="font-redhat max-sm:text-xl max-sm:font-semibold text-white">
                        {data?.interested_buyers}
                    </p>

                    <Image src="/icons/two_users.png" className="max-sm:h-[40px] max-sm:w-[40px]" height={20} width={20} />
                </div>

                <p className="font-redhat text-white">
                    Interested Buyers
                </p>
            </div>
        </div>
    </>

    const secondVidSectionContent = <>
        <p className="text-blueBack font-redhat max-sm:text-[16px] text-sm font-semibold max-sm:text-center mb-[1rem]">
            BrightMLS provides a centralized platform where we list properties, access extensive property data, and collaborate with other agents to streamline buying and selling processes. It offers tools and resources to improve property marketing, ensure accurate listings, and enhance client service, ultimately making real estate transactions more efficient and transparent.
        </p>

        <div className="flex justify-start w-full h-full gap-[1rem]">
            <div className="flex flex-col gap-[1rem] max-sm:items-center items-start w-[100%] max-sm:w-[100%] max-sm:flex-col">
                <GraphaSection displayBtn={false} h={150} w={300} heading="Bright MLS Views" isComponent={true} views={data?.mlsViews} saves={2} />
            </div>
        </div>

    </>

    const thirdVideoSectionContent = <>
        <p className="text-blueBack font-redhat text-sm font-semibold max-sm:text-center">
            To provide an immersive experience of your property to potential buyers, we created a YouTube tour for {data?.location}. Click below to have a look at what we've put together and explore the unique features and highlights of your listing. This video tour allows potential buyers to get a detailed view of your property from the comfort of their own homes.
        </p>

        <div className="max-sm:flex max-sm:justify-center">
            <Link href="https://www.youtube.com/@themikewebbteam4847" className="bg-blueBack text-center px-6 py-2 rounded-md text-sm text-white font-redhat max-sm:w-full">Visit Channel</Link>
        </div>
    </>




    return (
        <>
            <HeroSection
                title={data?.location || "Default Title"}
                description={data?.description || "Default Description"}
                location={data?.location || "Default Location"}
                visitors={data?.visitors || 0}
                lastUpdated={data?.createdAt || "N/A"}
                images={data?.uploaded_images || []}
            />

            <div className="w-full flex justify-center">
                <div className="w-[95%]">
                    <GraphaSection isSection={true} h={200} w={400} isComponent={false} heading="Over All Views" views={data?.views || 0} saves={data?.saves || 0} displayBtn={false} />
                </div>
            </div>

            <DynamicVideoContent
                isLeftFlow={false}
                content={firstVidSectionContent}
                header="Market Insights & Marketing Metrics"
                isYoutube={false}
                videoUrl={data?.uploaded_video_one}
                location={data?.location}
            />

            <Zillow zillowViews={data?.zillowViews} saves={data?.saves} location={data?.location} />

            <DynamicVideoContent
                isLeftFlow={true}
                content={secondVidSectionContent}
                header="Bright MLS"
                isYoutube={false}
                videoUrl={data?.uploaded_video_two}
            />

            <BrochureSlider canvaLink={data?.brochure} />

            <ListingDetails features={data?.features} uploaded_image={data?.uploaded_images[0]} contactFormHeader={data?.contact_form_header} />

            <MarketingCompaign socialCampaignsLinks={data?.socialCampaignsLinks} uploaded_images={data?.uploaded_images} />

            <DynamicVideoContent
                isLeftFlow={false}
                content={thirdVideoSectionContent}
                header="Youtube Video Tour"
                videoUrl={data?.yt_link}
                isYoutube={true}
            />

            <ContactForm />

            <Testimonials data={data} />

            <Footer location={data?.location} />
        </>
    );
};

export default HomePage;
