"use client";

import Link from "next/link";
import { Search } from "lucide-react";

export default function MobileSearch({
  searchQuery,
  setSearchQuery,
  searchResults,
  searchLoading,
}) {
  return (
    <div className="md:hidden px-4 pb-6">
      <div className="relative group">

        {/* INPUT */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search for products, brands, categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="
              w-full bg-gray-50
              border-transparent
              focus:bg-white
              focus:ring-2 focus:ring-black/5
              focus:border-gray-300
              rounded-2xl
              py-3 pl-12 pr-4
              text-sm
              transition-all duration-300
              placeholder:text-gray-400
              outline-none shadow-sm
            "
          />

          {/* SEARCH ICON */}
          <div className="absolute left-4 pointer-events-none">
            <Search
              size={18}
              className="text-gray-400 group-focus-within:text-black transition-colors"
            />
          </div>

          {/* CLEAR */}
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 text-gray-400 hover:text-black"
            >
              <span className="text-xs underline uppercase tracking-widest font-bold">
                Clear
              </span>
            </button>
          )}
        </div>

        {/* RESULTS */}
        {searchQuery && !searchLoading && (
          <div
            className="
              absolute z-50 left-0 right-0
              bg-white/95 backdrop-blur-md
              rounded-2xl mt-3
              max-h-[60vh] overflow-y-auto
              shadow-2xl border border-gray-100
              animate-in fade-in slide-in-from-top-2
              duration-200
            "
          >
            {searchResults.length === 0 ? (
              <div className="px-6 py-10 text-center">
                <p className="text-sm text-gray-500">
                  No products match your search.
                </p>
              </div>
            ) : (
              <div className="p-2">
                <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Top Results
                </p>

                {searchResults.map((item) => (
                  <Link
                    key={item.id}
                    href={`/products/${item.id}`}
                    onClick={() => setSearchQuery("")}
                    className="
                      flex items-center gap-4
                      p-3 rounded-xl
                      hover:bg-gray-50 transition-colors
                      group
                    "
                  >
                    {/* IMAGE */}
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <img
                        src={item.mainImage}
                        alt={item.name}
                        className="
                          w-full h-full object-cover
                          group-hover:scale-110
                          transition-transform duration-300
                        "
                      />
                    </div>

                    {/* INFO */}
                    <div className="flex flex-col min-w-0">
                      {/* PRODUCT NAME */}
                      <span className="text-sm font-medium text-gray-900 line-clamp-1">
                        {item.name}
                      </span>

                      {/* BRAND + CATEGORY */}
                      <span className="text-[11px] text-gray-500 uppercase tracking-wide line-clamp-1">
                       {item.brandName} · {item.categoryName}
                      </span>

                      {/* PRICE */}
                      <span className="text-sm font-semibold text-blue-600">
                        ₹{Number(item.price).toLocaleString("en-IN")}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
