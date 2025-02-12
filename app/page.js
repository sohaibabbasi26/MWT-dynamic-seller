import Image from "next/image";
import StyledBox from "./components/StyledBox";
export default function Home() {
  return (
    <>
      <div className="w-[100%] h-[100vh] flex items-center justify-center pt-[4rem] overflow-hidden">
        <StyledBox content={<><p className="text-black">working</p></>} />
      </div> 
    </>
  );
}
