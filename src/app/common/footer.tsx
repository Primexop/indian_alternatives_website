"use client";
import { AiFillFacebook } from "react-icons/ai";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { LuCopyright } from "react-icons/lu";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { socialMedia } from "../constants";

export function Footer() {
    const router = useRouter();
    const digitalServices = [
        {
            title: "Cloud Services",
            href: "/services/cloud"
        },
        {
            title: "Enterprise Software",
            href: "/services/enterprise"
        },
        {
            title: "Digital Infrastructure",
            href: "/services/infrastructure"
        },
        {
            title: "Mobile Solutions",
            href: "/services/mobile"
        },
        {
            title: "AI & Analytics",
            href: "/services/analytics"
        },
        {
            title: "Security Solutions",
            href: "/services/security"
        }
    ];

    const otherLinks = [
        {
            title: "About Us",
            href: "/about"
        },
        {
            title: "Our Mission",
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
        <footer className="bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <Link href='/' className="inline-block">
                            <Image 
                                src="/images/indian-alternatives-logo.svg"
                                alt="Indian Alternatives logo"
                                width={160}
                                height={48}
                                className="transition-transform hover:scale-105"
                            />
                        </Link>
                        <p className="mt-4 text-gray-500 text-sm">
                            Empowering Indian innovation and self-reliance through curated alternatives.
                        </p>
                        <div className="mt-6 flex space-x-6 items-center">
                            <div className="flex items-center space-x-4 bg-gray-50 rounded-full px-6 py-2 transition-all hover:bg-gray-100">
                            <a
                                href={socialMedia.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-600 transition-colors"
                            >
                                <span className="sr-only">Facebook</span>
                                <AiFillFacebook className="h-6 w-6" />
                            </a>
                            <a
                                href={socialMedia.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-pink-600 transition-colors"
                            >
                                <span className="sr-only">Instagram</span>
                                <FaSquareInstagram className="h-6 w-6" />
                            </a>
                            <a
                                href={socialMedia.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                            >
                                <span className="sr-only">Twitter</span>
                                <FaXTwitter className="h-6 w-6" />
                            </a>
                        </div>
                            </div>
                    </div>

                                        <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                            Digital Services
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {digitalServices.map((service) => (
                                <li key={service.title}>
                                    <Link
                                        href={service.href}
                                        className="text-base text-gray-500 hover:text-blue-600 transition-colors"
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                            Company
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {otherLinks.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        className="text-base text-gray-500 hover:text-blue-600 transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                            Legal
                        </h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="text-base text-gray-500 hover:text-blue-600 transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms-and-conditions"
                                    className="text-base text-gray-500 hover:text-blue-600 transition-colors"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white rounded-t-3xl">
                    <p className="text-base text-gray-400">
                        <span className="flex items-center justify-center gap-2 text-gray-500 hover:text-gray-600 transition-colors">
                            <LuCopyright className="inline-block" /> 2024 Indian Alternatives. All rights reserved.
                        </span>
                        <span className="block mt-2 text-center">
                            Developed and maintained by{" "}
                            <a
                                href="https://primexop.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-500 transition-colors"
                            >
                                Primexop.com
                            </a>
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}