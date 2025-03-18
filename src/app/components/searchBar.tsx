"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { alternatives } from "../alternatives-to/page";

interface SearchResult {
  title: string;
  description: string;
  category: string;
  url: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const searchResults: SearchResult[] = [];
    alternatives.forEach(category => {
      // Search in category title and description
      if (category.title.toLowerCase().includes(query.toLowerCase()) ||
          category.description.toLowerCase().includes(query.toLowerCase())) {
        searchResults.push({
          title: category.title,
          description: category.description,
          category: "Category",
          url: `/categories/${category.id}`
        });
      }

      // Search in alternatives
      category.alternatives.forEach(alt => {
        if (alt.name.toLowerCase().includes(query.toLowerCase()) ||
            alt.description.toLowerCase().includes(query.toLowerCase())) {
          searchResults.push({
            title: alt.name,
            description: alt.description,
            category: category.title,
            url: alt.website
          });
        }
      });
    });

    setResults(searchResults.slice(0, 5)); // Limit to 5 results
    setIsOpen(true);
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setIsOpen(false);
    }
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for alternatives..."
          className="w-full px-4 py-3 pl-12 text-lg rounded-xl border border-gray-200 dark:border-gray-700 
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                   shadow-sm hover:shadow-md transition-all duration-200"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </form>

      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
          <div className="py-2">
            {results.map((result, index) => (
              <a
                key={index}
                href={result.url}
                target={result.url.startsWith("http") ? "_blank" : undefined}
                rel={result.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">{result.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{result.description}</p>
                  </div>
                  <span className="text-xs text-gray-400 dark:text-gray-500">{result.category}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 