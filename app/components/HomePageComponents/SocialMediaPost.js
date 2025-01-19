const SocialMediaPost = ({ platform, url }) => {
    return (
        <div className="bg-white border rounded-lg p-4 shadow-md">
            <h4 className="text-lg font-bold text-black">{platform} Post</h4>
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-words">
                {url}
            </a>
        </div>
    );
};

export default SocialMediaPost;