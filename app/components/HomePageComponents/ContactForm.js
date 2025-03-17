import { useEffect, useState } from "react";
import Image from "next/image";
import Map from "../../../public/Map.png";
import Link from "next/link";

const ContactForm = () => {

    const [formData, setFormData] = useState({
        f_name: '',
        l_name: '',
        email: '',
        phone_no: ''
    });
    const [responseMessage, setResponseMessage] = useState("");
    const [isSubmitClick, setIsSubmitClicked] = useState(false);
    const isFormValid = formData.f_name && formData.l_name && formData.email && formData.phone_no;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    useEffect(() => {
        console.log("[FORM DATA]:", formData);
    }, [formData]);




    const handleFormSubmit = async () => {
        try {
            setIsSubmitClicked(true);
            

            if (isFormValid) {
                
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/subscribe-to-instant-access`, {
                    method: "POST",
                    body: JSON.stringify({
                        firstName: formData?.f_name,
                        lastName: formData?.l_name,
                        email: formData?.email,
                        phoneNumber: formData?.phone_no
                    })
                });

                const data = await response.json();
                if (data?.status === 200) {
                    setResponseMessage(data?.message);
                    return;
                }
                return;
            } else {
                return;
            }
        } catch (err) {
            console.log("[ERROR]:", err);
            return;
        }
    }

    return (
        <>
            <div className="h-[90vh] max-sm:h-auto max-sm:py-4 max-sm:px-5 w-full bg-blueBack p-16 flex justify-between font-redhat max-sm:flex-col max-sm:items-center">

                <div className="h-full w-[50%] max-sm:w-[100%] flex flex-col gap-[1rem]">
                    <h2 className="text-3xl max-sm:text-center text-white">
                        Are you looking for a place to call HOME?
                    </h2>

                    <p className="max-sm:text-center text-white">
                        Enter your details for exclusive information of the listings
                    </p>

                    <div className="flex justify-between w-[90%] gap-[1rem] max-sm:flex-col max-sm:w-full">
                        <div className="flex w-full flex-col text-white">
                            <label className="text-xs text-white">First Name</label>
                            <input name="f_name" onChange={handleInputChange} className="px-3 py-2 w-[100%] rounded-lg border-orangeBack border-2 bg-[rgba(255,255,255,0.1)] text-white" value={formData.f_name} />
                        </div>

                        <div className="flex w-full flex-col">
                            <label className="text-xs text-white">Last Name</label>
                            <input name="l_name" onChange={handleInputChange} className="px-3 py-2 w-[100%] rounded-lg border-orangeBack border-2 bg-[rgba(255,255,255,0.1)] text-white" value={formData.l_name} />
                        </div>
                    </div>

                    <div className="flex  justify-between w-[90%] gap-[1rem] max-sm:flex-col max-sm:w-full">
                        <div className="flex w-full flex-col text-white">
                            <label className="text-xs text-white">Email</label>
                            <input name="email" onChange={handleInputChange} className="px-3 py-2 w-[100%] rounded-lg border-orangeBack border-2 bg-[rgba(255,255,255,0.1)] text-white" value={formData.email} />
                        </div>

                        <div className="flex w-full flex-col text-white">
                            <label className="text-xs text-white">Phone Number</label>
                            <input name="phone_no" onChange={handleInputChange} className="px-3 py-2 w-[100%] rounded-lg border-orangeBack border-2 bg-[rgba(255,255,255,0.1)] text-white" value={formData.phone_no} />
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
                        <button onClick={handleFormSubmit} className="bg-orangeBack px-4 py-2 rounded-md text-sm text-[#172243] font-redhat max-sm:w-[100%]">Get Instant Access</button>
                    </div>

                    {isSubmitClick && !isFormValid ? (
                        <p className="text-white">
                            Please fill in all the fields to subscribe.
                        </p>
                    ) : <></>}

                    {responseMessage ? (
                        <p className="text-white">
                            Submitted the form successfully!
                        </p>
                    ) : (
                        <></>
                    )}

                </div>

                <div className="h-full w-[40%] max-sm:w-full max-sm:mt-[1rem] flex flex-col gap-3">
                    <h2 className="text-3xl max-sm:text-center text-white">
                        THE MIKE WEBB TEAM
                    </h2>

                    <p className="text-sm max-sm:text-center w-[90%] text-white">
                        The Mike Webb Team offers a comprehensive and expert approach to real estate listings. Whether you're selling your first home or managing multiple properties, our team provides tailored strategies to ensure maximum visibility and engagement for your listings. We combine market insights, professional photography, and innovative marketing techniques to attract the right buyers and achieve optimal sale prices. Trust The Mike Webb Team to guide you through a seamless and successful listing experience.
                    </p>
                    
                    <div className="w-[80%] h-[80%] rounded-2xl overflow-hidden">
                        <Link target="_blank" href="https://www.google.com/maps/place/The+Mike+Webb+Team,+LLC+%7C+Mike+and+Claudia+Webb,+REALTORS+%7C+RE%2FMAX+Allegiance+%7C+VA,+MD,+DC/@38.846222,-77.1237549,15.98z/data=!3m1!5s0x89b7b41daf2f508f:0x508faa029328b837!4m6!3m5!1s0x89b7b39aca50d80d:0x1c21b9c2277b7b38!8m2!3d38.845551!4d-77.115142!16s%2Fg%2F11f5p5qqyk?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"><Image className="w-full h-full" src={Map} width={3000} height={3000} /></Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContactForm;