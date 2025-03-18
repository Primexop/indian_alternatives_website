"use client";

import { heroSection } from "../data";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 pt-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {heroSection.title}
        </h1>
        <h2 className="text-xl md:text-2xl font-medium mb-8">
          {heroSection.subtitle}
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
          {heroSection.description}
        </p>
        <div className="mt-10">
          <a
            href="#impact-areas"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
          >
            Explore Initiatives
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-black opacity-20"></div>
    </section>
  );
};