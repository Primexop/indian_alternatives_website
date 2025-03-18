"use client";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";

export function Header() {
    const [isHamOpen, setIsHamOpen] = useState(false);

    const navLinksData = [
        { title: "Home", path: "/" },
        { title: "About Us", path: "/aboutus" },
        { title: "Contact Us", path: "/contactus" },
    ];

    return (
        <>
            <nav className="flex justify-between items-center px-6 py-4">
                <div className="font-bold text-lg">Logo Here</div>

                <div className="hidden sm:flex gap-4">
                    {navLinksData.map((link, i) => (
                        <Link
                            key={i}
                            href={link.path}
                            className="font-semibold transition-colors duration-200 hover:text-blue-500"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>

                <button
                    className="sm:hidden text-2xl"
                    onClick={() => setIsHamOpen(true)}
                >
                    <FaBars />
                </button>
            </nav>

            <div
                className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-start p-8 gap-2 text-xl z-50 transition-transform duration-300 ease-in-out ${isHamOpen ? "translate-y-0" : "-translate-y-full "
                    }`}
            >
                <IoMdClose
                    className="self-end p-1 text-[35px] bg-gray-200 rounded-full hover:bg-gray-300 transition"
                    onClick={() => setIsHamOpen(false)}
                />

                {navLinksData.map((link, i) => (
                    <Link
                        key={i}
                        href={link.path}
                        className="font-semibold transition-colors duration-200 hover:text-blue-500"
                        onClick={() => setIsHamOpen(false)}
                    >
                        {link.title}
                    </Link>
                ))}
            </div>
        </>
    );
}
