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

// const HomePage = () => {
//     // const router = useRouter();
//     const { id }= useParams();


//     // console.log('[router.query]:',router.params);

//     async function fetchListingInfo() {
//         try {
//             const result = await fetch(`http://localhost:4000/get-listing/${id}`, {
//                 method: "GET",
//             });
//             const data = await result.json();
//             console.log("[RESULT ABOUT THE LISTING]:", data);
//             return;
//         } catch (err) {
//             console.log("[ERROR]:", err);
//             return;
//         }
//     }

//     useEffect(() => {
//         if (router.isReady && id) {
//             console.log("[ID]:", id);
//             fetchListingInfo();
//           }
//     }, [id]);


//     const { heroData } = useContext(HeroContext);

//     const firstVidSectionContent = <>
//         <p className="text-blueBack font-redhat text-sm font-semibold max-sm:text-center">
//             Access expert analysis, trends, sales data, and market insights through an informative video. We’re dedicated to maximizing the value of 3487 S Utah St S with a customized digital marketing strategy that reaches a broad network of potential buyers.
//         </p>

//         <div className="flex gap-2 justify-start items-center max-sm:justify-center">
//             <div>
//                 <span className="text-orangeBack font-redhat font-semibold max-sm:text-center">
//                     Visit Properties
//                 </span>
//             </div>

//             <div>
//                 <Image className="h-[15px]" src="/icons/right-arrow.png" width={20} height={5} alt="right-arrow" />
//             </div>
//         </div>

//         <p className="text-blueBack font-redhat text-sm font-semibold max-sm:text-center">
//             Here are the results so far
//         </p>

//         <div className="w-full h-[30%] bg-blueBack rounded-2xl px-8 flex items-center justify-between max-sm:flex-col max-sm:h-full">
//             <div className="py-4 h-full flex flex-col justify-between max-sm:items-center">
//                 <div className="flex items-center gap-[0.5rem] max-sm:flex-col max-sm:justify-center">
//                     <p className="font-redhat max-sm:text-xl max-sm:font-semibold">
//                         5,296
//                     </p>

//                     <Image src="/icons/eye.png" className="max-sm:h-[40px] max-sm:w-[40px]" height={20} width={20} />
//                 </div>

//                 <p className="font-redhat">
//                     Views
//                 </p>
//             </div>

//             <div className="py-4 h-full flex flex-col justify-between">
//                 <div className="flex items-center gap-[0.5rem] max-sm:flex-col max-sm:justify-center">
//                     <p className="font-redhat max-sm:text-xl max-sm:font-semibold">
//                         455
//                     </p>

//                     <Image src="/icons/group.png" className="max-sm:h-[40px] max-sm:w-[40px]" height={20} width={20} />
//                 </div>

//                 <p className="font-redhat">
//                     Listing Engagement
//                 </p>
//             </div>


//             <div className="py-4 h-full flex flex-col justify-between">
//                 <div className="flex items-center gap-[0.5rem] max-sm:flex-col max-sm:justify-center">
//                     <p className="font-redhat max-sm:text-xl max-sm:font-semibold">
//                         46
//                     </p>

//                     <Image src="/icons/two_users.png" className="max-sm:h-[40px] max-sm:w-[40px]" height={20} width={20} />
//                 </div>

//                 <p className="font-redhat">
//                     Interested Buyers
//                 </p>
//             </div>
//         </div>
//     </>

//     const secondVidSectionContent = <>
//         <p className="text-blueBack font-redhat text-sm font-semibold max-sm:text-center">
//             BrightMLS provides a centralized platform where we list properties, access extensive property data, and collaborate with other agents to streamline buying and selling processes. It offers tools and resources to improve property marketing, ensure accurate listings, and enhance client service, ultimately making real estate transactions more efficient and transparent.
//         </p>
//     </>

//     const thirdVideoSectionContent = <>
//         <p className="text-blueBack font-redhat text-sm font-semibold max-sm:text-center">
//             To provide an immersive experience of your property to potential buyers, we created a YouTube tour for 3487 S Utah St S. Click below to have a look at what we've put together and explore the unique features and highlights of your listing. This video tour allows potential buyers to get a detailed view of your property from the comfort of their own homes.
//         </p>

//         <div className="max-sm:flex max-sm:justify-center">
//             <button className="bg-blueBack px-6 py-2 rounded-md text-sm text-white font-redhat max-sm:w-full">Visit Channel</button>
//         </div>
//     </>

//     const views = 1111;
//     const saves = 500;

//     return (
//         <>
//             <HeroSection
//                 title={heroData.title}
//                 description={heroData.description}
//                 location={heroData.location}
//                 visitors={heroData.visitors}
//                 lastUpdated={heroData.lastUpdated}
//                 images={heroData.images}
//             />

//             <DynamicVideoContent
//                 isLeftFlow={false}
//                 content={firstVidSectionContent}
//                 header="Market Insights & Marketing Metrics"
//             />

//             <GraphaSection views={views} saves={saves} />

//             <Zillow />

//             <DynamicVideoContent
//                 isLeftFlow={true}
//                 content={secondVidSectionContent}
//                 header="Bright MLS"
//             />

//             <ListingDetails />

//             <MarketingCompaign />

//             <DynamicVideoContent
//                 isLeftFlow={false}
//                 content={thirdVideoSectionContent}
//                 header="Youtube Video Tour"
//                 videoUrl="https://www.youtube.com/watch?v=9sekgEXGm-E&list=RDGMEM916WJxafRUGgOvd6dVJkeQ&index=2"
//                 isYoutube={true}
//             />

//             <ContactForm />

//             <Testimonials />

//             <Footer />
//         </>
//     )
// }


// export default HomePage;
// "use client";

// import DynamicVideoContent from "../../components/HomePageComponents/DynamicVideoContent";
// import HeroSection from "../../components/HomePageComponents/HeroSection";
// import Footer from "../../components/HomePageComponents/Footer";
// import Zillow from "../../components/HomePageComponents/Zillow";
// import Testimonials from "../../components/HomePageComponents/Testimonials";
// import ListingDetails from "../../components/HomePageComponents/ListingDetails";
// import MarketingCompaign from "../../components/HomePageComponents/MarketingComaign";
// import GraphaSection from "../../components/HomePageComponents/Graphs";
// import ContactForm from "../../components/HomePageComponents/ContactForm";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setListing } from "@/app/redux/slices/listingSlice";

const HomePage = () => {
    const { id } = useParams();
    const [listingData, setListingData] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    const { data } = useSelector((state) =>
        state.listing
    );

    useEffect(() => {
        console.log("[DATA]:", data);
    }, [data]);

    const fetchListingInfo = async () => {
        try {
            const response = await fetch(`https://mwt-backend.onrender.com//get-listing/${id}`, {
                method: "GET",
            });
            const data = await response.json();
            console.log("[LISTING DATA]:", data);
            // setListingData(data);
            dispatch(setListing(data));
            if (listingData) {
                console.log("[LISTING DATA in state]:", listingData);
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
            Access expert analysis, trends, sales data, and market insights through an informative video. We’re dedicated to maximizing the value of 3487 S Utah St S with a customized digital marketing strategy that reaches a broad network of potential buyers.
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
                    <p className="font-redhat max-sm:text-xl max-sm:font-semibold">
                        {data?.visitors}
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
                        {data?.listing_engagements}
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
                        {data?.interested_buyers}
                    </p>

                    <Image src="/icons/two_users.png" className="max-sm:h-[40px] max-sm:w-[40px]" height={20} width={20} />
                </div>

                <p className="font-redhat">
                    Interested Buyers
                </p>
            </div>
        </div>
    </>

    const secondVidSectionContent = <>
        <p className="text-blueBack font-redhat text-sm font-semibold max-sm:text-center">
            BrightMLS provides a centralized platform where we list properties, access extensive property data, and collaborate with other agents to streamline buying and selling processes. It offers tools and resources to improve property marketing, ensure accurate listings, and enhance client service, ultimately making real estate transactions more efficient and transparent.
        </p>
    </>

    const thirdVideoSectionContent = <>
        <p className="text-blueBack font-redhat text-sm font-semibold max-sm:text-center">
            To provide an immersive experience of your property to potential buyers, we created a YouTube tour for 3487 S Utah St S. Click below to have a look at what we've put together and explore the unique features and highlights of your listing. This video tour allows potential buyers to get a detailed view of your property from the comfort of their own homes.
        </p>

        <div className="max-sm:flex max-sm:justify-center">
            <button className="bg-blueBack px-6 py-2 rounded-md text-sm text-white font-redhat max-sm:w-full">Visit Channel</button>
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

            {/* <DynamicVideoContent
                isLeftFlow={false}
                content={<p>Dynamic video content goes here.</p>}
                header="Market Insights & Marketing Metrics"
            />  */}

            {/* <GraphaSection views={data?.visitors || 0} saves={data?.saves || 0} /> */}

            <Zillow />

            <DynamicVideoContent
                isLeftFlow={false}
                content={firstVidSectionContent}
                header="Market Insights & Marketing Metrics"
                isYoutube={false}
                videoUrl={data?.uploaded_video_one}
            /> 

            {/* <GraphaSection views={data?.visitors} saves={data?.saves} /> */}

             {/* <Zillow /> */}

            <DynamicVideoContent
                isLeftFlow={true}
                content={secondVidSectionContent}
                header="Bright MLS"
                isYoutube={false}
                videoUrl={data?.uploaded_video_two}
            />

            <ListingDetails features={data?.features} contactFormHeader={data?.contact_form_header} /> 

            <MarketingCompaign uploaded_images={data?.uploaded_images} />

            <DynamicVideoContent
                isLeftFlow={false}
                content={thirdVideoSectionContent}
                header="Youtube Video Tour"
                videoUrl={data?.yt_link}
                isYoutube={true}
            />

            <ContactForm />

            <Testimonials data={data} />

             <Footer /> 
        </>
    );
};

export default HomePage;
