"use client";

import { useSearchParams } from "next/navigation";
import { alternatives } from "../alternatives-to/page";
import Image from "next/image";
import SearchBar from "../components/searchBar";
import { motion } from "framer-motion";

export  function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const filteredAlternatives = alternatives.filter(category => {
    const matchesTitle = category.title.toLowerCase().includes(query);
    const matchesDescription = category.description.toLowerCase().includes(query);
    const matchesAlternatives = category.alternatives.some(alt =>
      alt.name.toLowerCase().includes(query) ||
      alt.description.toLowerCase().includes(query)
    );
    return matchesTitle || matchesDescription || matchesAlternatives;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-gray-100/[0.02] bg-[size:20px_20px] pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 dark:opacity-20">
        <Image
          src="/images/hero-illustration.svg"
          alt="Background pattern"
          width={800}
          height={600}
          className="w-full max-w-4xl"
          priority
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Search Results for "{query}"
          </h1>
          <div className="max-w-2xl mx-auto">
            <SearchBar />
          </div>
        </motion.div>
        
        {filteredAlternatives.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center py-12"
          >
            <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-6 mx-auto w-24 h-24 flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">No results found</p>
            <p className="text-gray-600 dark:text-gray-400">Try searching for different terms or browse our categories</p>
          </motion.div>
        ) : (
          <div className="space-y-8">
            {filteredAlternatives.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl bg-blue-50 dark:bg-gray-700 p-3 rounded-xl">{category.icon}</span>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                  {category.description}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.alternatives.map((alt) => (
                    <motion.div
                      key={alt.name}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg"
                    >
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{alt.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 min-h-[3rem]">
                        {alt.description}
                      </p>
                      <a
                        href={alt.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                      >
                        Visit Website
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 