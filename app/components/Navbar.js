"use client"

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const router = useRouter();

    return (
        <>
            <div className="h-[12vh] bg-[#172243] w-full flex items-center justify-around fixed z-50 ">
                <Image src="/MWT_logo.png" height={130} width={130} alt="Logo" />

                <div className="max-sm:hidden ">
                    <ul className=" flex gap-6 max-lg:gap-4">
                        <li className="text-sm max-lg:text-xs font-redhat cursor-pointer text-white"><Link href="#marketingM">Marketing Metrics</Link></li>
                        <li className="text-sm max-lg:text-xs font-redhat cursor-pointer text-white"><Link href="#marketingC">Marketing Campaigns</Link></li>
                    </ul>
                </div>

                <button onClick={() => {router.replace("https://mikeandclaudiawebb.com/")}} className="bg-orangeBack px-6 py-2 rounded-md text-sm text-[#172243] max-sm:hidden font-redhat">Contact</button>

                <div
                    className="sm:hidden flex items-center cursor-pointer"
                    onClick={toggleMenu}
                >
                    <div className="space-y-1">
                        <span className="block w-5 h-0.5 bg-white rounded-full"></span>
                        <span className="block w-5 h-0.5 bg-white rounded-full"></span>
                        <span className="block w-5 h-0.5 bg-white rounded-full"></span>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="bg-blueBack text-white md:hidden w-full">
                    <ul className="flex flex-col gap-4 p-4 items-center">
                        <li className="cursor-pointer font-redhat text-white">Marketing Metrics</li>
                        <li className="cursor-pointer font-redhat text-white">Marketing Campaigns</li>
                        <li>
                            <button onClick={() => {router.replace("https://mikeandclaudiawebb.com/")}} className="bg-orangeBack px-6 py-2 rounded-md text-sm text-[#172243] w-full font-redhat">
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
            )}
            {/* </div> */}
        </>
    )
}

export default Navbar;