"use client";
import { FaInstagram, FaTwitter, FaWhatsapp, FaGithub } from "react-icons/fa";
import { LuCopyright } from "react-icons/lu";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { socialMedia } from "../constants";
import { useTheme } from "next-themes";
import { BsSun, BsMoon } from "react-icons/bs";

export function Footer() {
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const digitalServices = [
        {
            title: "Categories",
            href: "/categories"
        },
        {
            title: "Alternatives",
            href: "/alternatives-to"
        },
        {
            title: "About Us",
            href: "/about"
        }
    ];

    const otherLinks = [
        {
            title: "About Us",
            href: "/about"
        },
        {
            title: "Contact Us",
            href: "/contactus"
        }
    ];

    return (
        <footer className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-black border-t border-gray-100 dark:border-gray-800">
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
                        <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">
                            Empowering Indian innovation and self-reliance through curated alternatives.
                        </p>
                        <div className="mt-6 flex space-x-6 items-center">
                            <div className="flex items-center space-x-4 bg-gray-50 dark:bg-gray-800 rounded-full px-6 py-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-700">
                                <a
                                    href={socialMedia.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-pink-600 transition-colors"
                                >
                                    <span className="sr-only">Instagram</span>
                                    <FaInstagram className="h-6 w-6" />
                                </a>
                                <a
                                    href={socialMedia.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    <span className="sr-only">Twitter</span>
                                    <FaTwitter className="h-6 w-6" />
                                </a>
                                <a
                                    href="https://wa.me/919834877006"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-green-600 transition-colors"
                                >
                                    <span className="sr-only">WhatsApp</span>
                                    <FaWhatsapp className="h-6 w-6" />
                                </a>
                                <a
                                    href="https://github.com/Primexop/indian_alternatives_website"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    title="Contribute on GitHub"
                                >
                                    <span className="sr-only">GitHub</span>
                                    <FaGithub className="h-6 w-6" />
                                </a>
                                <button
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    className="text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
                                    aria-label="Toggle theme"
                                >
                                    {theme === "dark" ? (
                                        <BsSun className="h-6 w-6" />
                                    ) : (
                                        <BsMoon className="h-6 w-6" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
                            Quick Links
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {digitalServices.map((service) => (
                                <li key={service.title}>
                                    <Link
                                        href={service.href}
                                        className="text-base text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
                            Company
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {otherLinks.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        className="text-base text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
                            Contact
                        </h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <a
                                    href="https://wa.me/919834877006"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center"
                                >
                                    <FaWhatsapp className="mr-2 h-4 w-4" />
                                    +91 98348 77006
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="text-base text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms-and-conditions"
                                    className="text-base text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-black rounded-t-3xl">
                    <p className="text-base text-gray-400 dark:text-gray-500">
                        <span className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                            <LuCopyright className="inline-block" /> {new Date().getFullYear()} Indian Alternatives. All rights reserved.
                        </span>
                        <span className="block mt-2 text-center">
                            Developed and maintained by{" "}
                            <a
                                href="https://primexop.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                            >
                                Primexop.com
                            </a>
                            {" "}•{" "}
                            <a
                                href="https://github.com/Primexop/indian_alternatives_website"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                            >
                                Contribute on GitHub
                            </a>
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
} 