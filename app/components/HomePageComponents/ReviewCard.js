import Image from "next/image";
import DemoDp from "../../../public/demoDp.svg";
import Qoutes from "../../../public/qoutes.svg";
import StarRating from "./StarRating";
import Avatar from "../../../public/avatar.png"


const ReviewCard = ({ role, name, description, rating }) => {

    return (
        <>
            <div className="w-[100%] h-full bg-blueBack rounded-2xl p-6 flex  flex-col justify-between">
                <div className="h-[20%] w-full flex items-center gap-2 justify-between">
                    <div className="flex gap-2">
                        <div className="h-[50px] w-[50px] rounded-full">
                            <Image className="h-full w-full rounded-full bg-orangeBack" src={Avatar} height={30} width={30} />
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold text-white">{name}</p>
                            <span className="text-sm text-white">
                                {role || "Client"}
                            </span>
                        </div>
                    </div>

                    <Image src={Qoutes} height={30} width={30} />
                </div>

                <p className="text-sm mt-[1rem] text-white">{description}</p>

                <div className="w-[100%] flex justify-end gap-2 mt-2">
                    <span className="text-white">{rating}</span>
                    <StarRating rating={rating} />
                </div>  
            </div>
        </>
    )
}

export default ReviewCard;