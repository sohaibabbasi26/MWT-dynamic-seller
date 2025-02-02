

const getYouTubeVideoId = (url) => {
    const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
};


const DynamicVideoContent = ({ isLeftFlow, header, content, videoUrl, isYoutube, location }) => {

    return (
        <>
            <div className="flex justify-center items-center h-auto py-4 bg-white">
                <div className="w-[95%] max-sm:w-[92%] h-[100%] flex gap-[1rem] items-center max-sm:flex-col">

                    {isLeftFlow ? (
                        <>
                            <div className="w-[45%] h-auto flex flex-col gap-[0.5rem] justify-center py-3 px-6 max-sm:px-0 max-sm:h-auto max-sm:w-full" >
                                <h2 className="text-blueBack font-redhat text-[3rem] font-semibold max-sm:text-center max-sm:w-full max-sm:text-[1.8rem]">
                                    {header}
                                </h2>

                                <>
                                    {content}
                                </>
                            </div>

                            <div className="w-[55%] h-[70vh] bg-black rounded-3xl flex justify-center items-center max-sm:h-[30vh] max-sm:w-full">
                                {videoUrl ? (
                                    isYoutube ? (
                                        // Render YouTube video
                                        <iframe
                                            className="w-full h-full rounded-3xl"
                                            src={`https://www.youtube.com/embed/${getYouTubeVideoId(videoUrl)}`}
                                            frameBorder="0"
                                            allow="autoplay; encrypted-media"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        // Render uploaded video
                                        <video
                                            className="w-full h-full rounded-3xl"
                                            controls
                                            src={videoUrl}
                                        ></video>
                                    )
                                ) : (
                                    <div className="text-white text-center">No video available</div>
                                )}
                            </div>

                        </>
                    ) : (
                        <>
                            <div className="w-[55%] h-[70vh] bg-black rounded-3xl flex justify-center items-center max-sm:h-[30vh] max-sm:w-full">
                                {videoUrl ? (
                                    isYoutube ? (
                                        // Render YouTube video
                                        <iframe
                                            className="w-full h-full rounded-3xl"
                                            src={`https://www.youtube.com/embed/${getYouTubeVideoId(videoUrl)}`}
                                            frameBorder="0"
                                            allow="autoplay; encrypted-media"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        // Render uploaded video
                                        <video
                                            className="w-full h-full rounded-3xl"
                                            controls
                                            src={videoUrl}
                                        ></video>
                                    )
                                ) : (
                                    <div className="text-white text-center">No video available</div>
                                )}
                            </div>

                            <div className="w-[45%] h-[70vh] flex flex-col gap-[0.5rem] justify-center py-3 px-6 max-sm:px-0  max-sm:h-auto max-sm:w-full" >
                                <h2 className="text-blueBack font-redhat text-[3rem] font-semibold max-sm:text-center max-sm:w-full max-sm:text-[1.8rem]">
                                    {header}
                                </h2>

                                <>
                                    {content}
                                </>
                            </div>
                        </>
                    )}




                </div>
            </div>
        </>
    )
}

export default DynamicVideoContent;