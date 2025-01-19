import { useState } from "react";
import Image from "next/image";
import Map from "../../../public/Map.png";

const ContactForm = () => {

    const [formData, setFormData] = useState({
        f_name: '',
        l_name: '',
        email: '',
        phone_no: ''
    })

    return (
        <>
            <div className="h-[90vh] max-sm:h-auto max-sm:py-4 max-sm:px-5 w-full bg-blueBack p-16 flex justify-between font-redhat max-sm:flex-col max-sm:items-center">

                <div className="h-full w-[50%] max-sm:w-[100%] flex flex-col gap-[1rem]">
                    <h2 className="text-3xl max-sm:text-center text-white">
                        Charming 2 Bedroom Cottage with Lush Garden in Arlington, VA
                    </h2>

                    <p className="max-sm:text-center text-white">
                        Enter your details for exclusive information on this listing
                    </p>

                    <div className="flex justify-between w-[90%] gap-[1rem] max-sm:flex-col max-sm:w-full">
                        <div className="flex w-full flex-col text-white">
                            <label className="text-xs text-white">First Name</label>
                            <input className="px-3 py-2 w-[100%] rounded-lg border-orangeBack border-2 bg-[rgba(255,255,255,0.1)] text-white" value={formData.f_name} />
                        </div>

                        <div className="flex w-full flex-col">
                            <label className="text-xs text-white">Last Name</label>
                            <input className="px-3 py-2 w-[100%] rounded-lg border-orangeBack border-2 bg-[rgba(255,255,255,0.1)] text-white" value={formData.l_name} />
                        </div>
                    </div>

                    <div className="flex  justify-between w-[90%] gap-[1rem] max-sm:flex-col max-sm:w-full">
                        <div className="flex w-full flex-col text-white">
                            <label className="text-xs text-white">Email</label>
                            <input className="px-3 py-2 w-[100%] rounded-lg border-orangeBack border-2 bg-[rgba(255,255,255,0.1)] text-white" value={formData.email} />
                        </div>

                        <div className="flex w-full flex-col text-white">
                            <label className="text-xs text-white">Phone Number</label>
                            <input className="px-3 py-2 w-[100%] rounded-lg border-orangeBack border-2 bg-[rgba(255,255,255,0.1)] text-white" value={formData.phone_no} />
                        </div>

                    </div>

                    <p className="text-sm font-redhat flex gap-[0.3rem] max-sm:justify-center max-sm:w-[100%] text-white">
                        I agree to the
                        <a href="/privacy-policy-and-terms-of-use" className="text-orangeBack">
                            Privacy Policy
                            and
                            Terms of Use.
                        </a>
                    </p>

                    <p className="text-sm max-sm:text-center text-white">
                        By submitting this form, I agree to be contacted by The Mike Webb Team via call, email, and text. To opt-out, you can reply ‘STOP’ at any time or click the unsubscribe link in the emails. Message and data rates may apply. Message frequency varies.
                    </p>

                    <div>
                        <button className="bg-orangeBack px-4 py-2 rounded-md text-sm text-[#172243] font-redhat max-sm:w-[100%]">Get Instant Access</button>
                    </div>

                </div>

                <div className="h-full w-[40%] max-sm:w-full max-sm:mt-[1rem] flex flex-col gap-3">
                    <h2 className="text-3xl max-sm:text-center text-white">
                        THE MIKE WEBB TEAM
                    </h2>

                    <p className="text-sm max-sm:text-center text-white">
                        The Mike Webb Team offers a comprehensive and expert approach to real estate listings. Whether you're selling your first home or managing multiple properties, our team provides tailored strategies to ensure maximum visibility and engagement for your listings. We combine market insights, professional photography, and innovative marketing techniques to attract the right buyers and achieve optimal sale prices. Trust The Mike Webb Team to guide you through a seamless and successful listing experience.
                    </p>

                    <div className="w-full h-[80%] rounded-2xl overflow-hidden">
                        <Image className="w-full h-full" src={Map} width={200} height={2-0} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContactForm;