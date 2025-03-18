"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-64 pointer-events-none">
        <Image
          src="/images/about-wave.svg"
          alt="Background wave"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            About Indian Alternatives
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Empowering Indian innovation and self-reliance through curated alternatives
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="px-6 py-8">
                <div className="text-center">
                  <h3 className="text-xl font-medium text-gray-900">Our Mission</h3>
                  <p className="mt-4 text-gray-500">
                    To promote and support Indian alternatives to foreign products and services, fostering economic independence and innovation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="px-6 py-8">
                <div className="text-center">
                  <h3 className="text-xl font-medium text-gray-900">Our Vision</h3>
                  <p className="mt-4 text-gray-500">
                    Creating a self-reliant India by connecting users with high-quality local alternatives across various sectors.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="px-6 py-8">
                <div className="text-center">
                  <h3 className="text-xl font-medium text-gray-900">Our Values</h3>
                  <p className="mt-4 text-gray-500">
                    Quality, Innovation, Transparency, and Commitment to Indian entrepreneurship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Why Choose Indian Alternatives?
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Support Local Innovation</h3>
                <p className="mt-2 text-gray-500">
                  By choosing Indian alternatives, you support local entrepreneurs and contribute to the growth of the Indian economy.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Quality Assurance</h3>
                <p className="mt-2 text-gray-500">
                  We carefully curate and verify all alternatives to ensure they meet high-quality standards.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Economic Growth</h3>
                <p className="mt-2 text-gray-500">
                  Supporting Indian alternatives helps create jobs and promotes economic self-reliance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Customer Support</h3>
                <p className="mt-2 text-gray-500">
                  Access to local customer support and better after-sales service.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            Developed and maintained by{" "}
            <a href="https://primexop.com" className="text-blue-600 hover:text-blue-500">
              Primexop.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}