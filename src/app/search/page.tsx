"use client";

import { Suspense } from "react";
import { SearchResults } from "./searchResults";

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="h-12 w-64 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mx-auto mb-6"></div>
            <div className="h-10 w-96 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mx-auto"></div>
          </div>
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
                  <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                </div>
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mb-8"></div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[1, 2].map((j) => (
                    <div key={j} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-xl p-6">
                      <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mb-3"></div>
                      <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mb-4"></div>
                      <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}