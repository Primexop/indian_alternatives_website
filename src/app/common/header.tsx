"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import SearchBar from "../components/searchBar";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinksData = [
        { title: "Categories", path: "/categories" },
        { title: "Alternatives", path: "/alternatives-to" },
        { title: "About", path: "/about" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-white/80 backdrop-blur-sm"}`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-4 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex-shrink-0">
                            <span className="sr-only">Homepage</span>
                            <div className="w-40 sm:w-48 relative">
                                <Image 
                                    src="/images/indian-alternatives-logo.svg"
                                    alt="Indian Alternatives logo"
                                    width={192}
                                    height={56}
                                    priority
                                    className="transition-transform hover:scale-105"
                                />
                            </div>
                        </Link>
                        
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinksData.map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.path}
                                    className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:block w-64 lg:w-96">
                            <SearchBar />
                        </div>

                        <button
                            className="lg:hidden text-2xl text-gray-600 hover:text-blue-600 transition-colors"
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <FaBars />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setIsMenuOpen(false)} />

            <div
                className={`fixed top-0 right-0 w-full sm:w-80 h-screen bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="p-6">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                            aria-label="Close menu"
                        >
                            <IoMdClose className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="mb-6 md:hidden">
                        <SearchBar />
                    </div>

                    <nav className="space-y-4">
                        {navLinksData.map((link, i) => (
                            <Link
                                key={i}
                                href={link.path}
                                className="block text-lg font-medium text-gray-600 hover:text-blue-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}
