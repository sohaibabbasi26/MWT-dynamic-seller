import Image from "next/image";

const Navbar = () => {

    return (
        <>
            <div className="h-[12vh] bg-[#172243] w-full  flex items-center justify-around">
                <Image src="/MWT_logo.png" height={130} width={130} alt="Logo" />

                <div className="max-sm:hidden">
                    <ul className=" flex gap-6">
                        <li className="text-sm">Home</li>
                        <li className="text-sm">Menu</li>
                        <li className="text-sm">Marketing Metrics</li>
                        <li className="text-sm">Marketing Campaigns</li>
                    </ul>
                </div>

                <button className="bg-[#F68323] px-6 py-2 rounded-md text-sm text-[#172243] max-sm:hidden">Contact</button>
            </div>
        </>
    )
}

export default Navbar;