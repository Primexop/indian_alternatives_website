"use client";

import { useSearchParams } from "next/navigation";
import { alternatives } from "../alternatives-to/page";

export default function SearchPage() {
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Search Results for "{query}"
        </h1>
        
        {filteredAlternatives.length === 0 ? (
          <div className="text-center py-12">
            <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-6 mx-auto w-24 h-24 flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">No results found</p>
            <p className="text-gray-600 dark:text-gray-400">Try searching for different terms or browse our categories</p>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredAlternatives.map((category) => (
              <div 
                key={category.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
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
                    <div 
                      key={alt.name}
                      className="border border-gray-100 dark:border-gray-700 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
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
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}