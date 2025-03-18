"use client";
import { AiFillFacebook } from "react-icons/ai";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { LuCopyright } from "react-icons/lu";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { socialMedia } from "../constants";

export function Footer() {
    const router = useRouter();
    const games = [
        {
            title: "Ludo Adda",
            href: "/about"
        },
        {
            title: "Cricket Fantasy",
            href: "/about"
        },
        {
            title: "Rummy Adda",
            href: "/about"
        },
        {
            title: "Callbreak",
            href: "/about"
        },
        {
            title: "Battlegrounds India",
            href: "/about"
        },
        {
            title: "FreeFire Max",
            href: "/about"
        },
        {
            title: "Wordsearch",
            href: "/about"
        },
        {
            title: "Droid-O",
            href: "/about"
        },
    ];

    const otherLinks = [
        {
            title: "Cancellation Policy",
            href: "/about"
        },
        {
            title: "Responsible Gaming",
            href: "/about"
        },
        {
            title: "About Us",
            href: "/about"
        },
        {
            title: "FAQ's",
            href: "/faqs"
        },
        {
            title: "Contact Us",
            href: "/contactus"
        },
    ];

    return (
        <>
            <footer className="p-6 pb-2 text-center ">
                <div className="flex flex-col gap-8 sm:grid grid-cols-[2fr_1fr_1fr_1fr] sm:gap-5 pb-[25px] border-b-gray border-b border-solid">
                    <div>
                        <Link href='/'>
                            Logo here
                        </Link>
                        <ul className='flex justify-around text-[2.2rem] mt-4'>

                            <AiFillFacebook className='my-[2px] cursor-pointer hover:opacity-80 transition' onClick={() => router.push(socialMedia.facebook)} />
                            <FaSquareInstagram className='my-[2px] cursor-pointer hover:opacity-80 transition' onClick={() => router.push(socialMedia.instagram)} />
                            <FaXTwitter className='my-[2px] cursor-pointer hover:opacity-80 transition' onClick={() => router.push(socialMedia.twitter)} />
                        </ul>
                    </div>

                    <div className="text-start">
                        <h2 className="font-bold text-lg mb-2">Games</h2>
                        <ul >
                            {games.map((game) => (
                                <li key={game.title}><a href={game.href} className='my-[2px] cursor-pointer hover:opacity-80 transition'>{game.title}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="text-start">
                        <h2 className="font-bold text-lg mb-2">Other Links</h2>
                        <ul >
                            {otherLinks.map((game) => (
                                <li key={game.title}><a href={game.href} className='my-[2px] cursor-pointer hover:opacity-80 transition'>{game.title}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="text-start">
                        <h2 className="font-bold text-lg mb-2">Legal</h2>
                        <ul >
                            <li ><Link href='/privacy-policy' className='my-[2px] cursor-pointer hover:opacity-80 transition'>Privacy Policy</Link></li>
                            <li ><Link href='/terms-and-conditions' className='my-[2px] cursor-pointer hover:opacity-80 transition'>Terms And Conditions</Link></li>
                        </ul>
                    </div>
                </div>
                <h2 className="flex items-center font-semibold self-end w-full justify-center text-sm p-2">Copyright &nbsp; <LuCopyright className='pb-[2px]' />2024 Dummyx. All rights reserved.</h2>
            </footer>
        </>
    );
}