import React from "react";

const AdditionalPagesSection = ({ page }) => {
    return (
        <section className="mt-8 px-6 py-4 bg-gray-100">
            <div className="flex flex-col gap-6">
                    <div  className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-[2rem] font-redhat text-black font-semibold text-center mb-4">{page.heading}</h3>
                        <iframe
                            src={page.canvaLink}
                            className="w-full h-[1000px] rounded-lg border-none"
                            allowFullScreen
                        ></iframe>
                    </div>
            </div>
        </section>
    );
};

export default AdditionalPagesSection;
