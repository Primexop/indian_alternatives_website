"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Contact Us
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Have an Indian product to showcase? Get in touch with us!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Submit Your Product
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            We're always looking for innovative Indian products to showcase. If you have a product that you'd like to feature on our platform, please reach out to us via WhatsApp.
                        </p>
                        <a
                            href="https://wa.me/919834877006"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors duration-300"
                        >
                            <FaWhatsapp className="mr-2 h-5 w-5" />
                            Contact on WhatsApp
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Contact Information
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <FaWhatsapp className="h-6 w-6 text-green-500" />
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">WhatsApp</p>
                                    <p className="text-lg font-medium text-gray-900 dark:text-white">+91 98348 77006</p>
                                </div>
                            </div>
                            <div className="pt-4">
                                <p className="text-gray-600 dark:text-gray-300">
                                    We typically respond within 24 hours. Please include the following information when contacting us:
                                </p>
                                <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>• Product name and description</li>
                                    <li>• Website URL (if available)</li>
                                    <li>• Target audience</li>
                                    <li>• Key features and benefits</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
