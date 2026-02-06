// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import { Search } from "lucide-react";

// import {
//   getProducts,
//   getCategories,
//   getBrands,
//   getCollections,
// } from "../../../services/client.service";

// export default function SearchPage() {
//   const [query, setQuery] = useState("");

//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [collections, setCollections] = useState([]);

//   const [loading, setLoading] = useState(true);

//   /* ================= FETCH DATA ================= */
//   useEffect(() => {
//     const fetchSearchData = async () => {
//       try {
//         const [p, c, b, col] = await Promise.all([
//           getProducts(),
//           getCategories(),
//           getBrands(),
//           getCollections(),
//         ]);

//         setProducts(p || []);
//         setCategories(c || []);
//         setBrands(b || []);
//         setCollections(col || []);
//       } catch (err) {
//         console.error("Search fetch failed", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSearchData();
//   }, []);

//   const normalizedQuery = query.trim().toLowerCase();

//   /* ================= ID → NAME MAPS ================= */
//   const brandMap = useMemo(() => {
//     const map = {};
//     brands.forEach((b) => {
//       map[b.id] = b.name?.toLowerCase() || "";
//     });
//     return map;
//   }, [brands]);

//   const categoryMap = useMemo(() => {
//     const map = {};
//     categories.forEach((c) => {
//       map[c.id] = c.name?.toLowerCase() || "";
//     });
//     return map;
//   }, [categories]);

//   const collectionMap = useMemo(() => {
//     const map = {};
//     collections.forEach((c) => {
//       map[c.id] = c.name?.toLowerCase() || "";
//     });
//     return map;
//   }, [collections]);

//   /* ================= SEARCH ENGINE ================= */
//   const searchResults = useMemo(() => {
//     if (!normalizedQuery) return [];

//     const scoreMatch = (text, weight = 1) =>
//       text && text.includes(normalizedQuery) ? weight : 0;


//     return products
//       .map((p) => {
//         const score =
//           scoreMatch(p.name?.toLowerCase(), 5) +
//           scoreMatch(p.color?.toLowerCase(), 2) +
//           scoreMatch(p.stitchedType?.toLowerCase(), 2) +
//           scoreMatch(brandMap[p.brand], 4) +
//           scoreMatch(categoryMap[p.category], 3) +
//           scoreMatch(collectionMap[p.collection], 3) +
//           (Array.isArray(p.fabricDetails)
//             ? p.fabricDetails.reduce(
//                 (acc, f) => acc + scoreMatch(f.toLowerCase(), 1),
//                 0
//               )
//             : 0);

//         return score > 0 ? { ...p, score } : null;
//       })
//       .filter(Boolean)
//       .sort((a, b) => b.score - a.score)
//       .slice(0, 12);
//   }, [
//     normalizedQuery,
//     products,
//     brandMap,
//     categoryMap,
//     collectionMap,
//   ]);
// const formatName = (text) =>
//   text
//     ? text
//         .split(" ")
//         .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//         .join(" ")
//     : "";
//   /* ================= UI ================= */
//   return (
//     <section className="py-10">
//       <div className="mx-auto max-w-7xl px-4">

//         {/* SEARCH BAR */}
//         <div className="relative max-w-xl mx-auto mb-10">
//           <input
//             autoFocus
//             type="text"
//             placeholder="Search products, brands, categories, collections..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="w-full border border-gray-300 px-4 py-3 pr-12 text-sm focus:outline-none"
//           />
//           <Search
//             size={18}
//             className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
//           />
//         </div>

//         {/* RESULTS */}
//         {loading ? (
//           <p className="text-center text-gray-400 text-sm">
//             Loading search data…
//           </p>
//         ) : !query ? (
//           <p className="text-center text-gray-400 text-sm">
//             Start typing to search
//           </p>
//         ) : searchResults.length === 0 ? (
//           <p className="text-center text-gray-500">
//             No products found
//           </p>
//         ) : (
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//             {searchResults.map((item) => (
//               <Link key={item.id} href={`/products/${item.id}`}>
//                 <div className="group cursor-pointer">
//                   <div className="w-full bg-gray-50 overflow-hidden">
//                     <img
//                       src={item.mainImage}
//                       alt={item.name}
//                       className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
//                     />
//                   </div>

// <div className="mt-2">
//   {/* BRAND + CATEGORY */}
//   <p className="text-[11px] uppercase tracking-wide text-gray-500">
//     {formatName(brandMap[item.brand])}
//     {categoryMap[item.category] && (
//       <> · {formatName(categoryMap[item.category])}</>
//     )}
//   </p>

//   {/* PRODUCT NAME */}
//   <h3 className="text-sm leading-snug">
//     {item.name}
//   </h3>

//   {/* PRICE */}
//   <p className="text-red-600 font-semibold text-sm">
//     ₹{Number(item.price).toLocaleString("en-IN")}
//   </p>
// </div>

//                 </div>
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useState } from "react";
import { useGlobalSearch, formatName } from "../hooks/useGlobalSearch";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const { results, loading, brandMap, categoryMap } = useGlobalSearch(query);

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4">

        {/* SEARCH BAR */}
        <div className="relative max-w-xl mx-auto mb-10">
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, brands, categories..."
            className="w-full border px-4 py-3 pr-12 text-sm"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
        </div>

        {/* RESULTS */}
        {loading ? null : results.length === 0 ? (
          <p className="text-center text-gray-500">No results found</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {results.map(item => (
              <Link key={item.id} href={`/products/${item.id}`}>
                <div className="group cursor-pointer">
                  <img src={item.mainImage} className="bg-gray-50 w-full object-contain" />
                  <div className="mt-2 text-sm">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">
                     {formatName(item.brandName)} · {formatName(item.categoryName)}

                    </p>
                    <p className="text-red-600 font-semibold">
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
