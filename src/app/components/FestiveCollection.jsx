// "use client";

// import React, { useEffect, useState, useMemo } from "react";
// import Link from "next/link";
// import {
//   getCollections,
//   getProducts,
//   getBrands,
// } from "../../../services/client.service";

// function FestiveCollection() {
//   const [products, setProducts] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [festiveCollection, setFestiveCollection] = useState(null);
//   const [loading, setLoading] = useState(true);

//   /* ---------------- FETCH COLLECTIONS ---------------- */
//   useEffect(() => {
//     const fetchCollections = async () => {
//       try {
//         const data = await getCollections();

//         const festive = data.find(
//           (col) => col.name.toLowerCase() === "festive collection"
//         );

//         if (festive) setFestiveCollection(festive);
//       } catch (error) {
//         console.error("Failed to fetch collections", error);
//       }
//     };

//     fetchCollections();
//   }, []);

//   /* ---------------- FETCH PRODUCTS ---------------- */
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await getProducts();
//         setProducts(data);
//       } catch (error) {
//         console.error("Failed to fetch products", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   /* ---------------- FETCH BRANDS ---------------- */
//   useEffect(() => {
//     const fetchBrands = async () => {
//       try {
//         const data = await getBrands();
//         setBrands(data);
//       } catch (error) {
//         console.error("Failed to fetch brands", error);
//       }
//     };

//     fetchBrands();
//   }, []);

//   /* ---------------- BRAND LOOKUP MAP ---------------- */
//   const brandMap = useMemo(() => {
//     return brands.reduce((acc, brand) => {
//       acc[brand.id] = brand;
//       return acc;
//     }, {});
//   }, [brands]);

//   /* ---------------- FILTER FESTIVE PRODUCTS ---------------- */
//   const festiveProducts = useMemo(() => {
//     if (!festiveCollection) return [];
//     return products.filter(
//       (product) => product.collection === festiveCollection.id
//     );
//   }, [products, festiveCollection]);

//   if (loading) return null;

//   return (
//     <section className="py-16">
//       <div className="mx-auto max-w-7xl px-4">

//         {/* HEADING */}
//         <div className="flex items-center gap-6 mb-14">
//           <div className="flex-grow border-t border-black" />
//           <h2 className="text-2xl md:text-3xl font-semibold tracking-wide uppercase whitespace-nowrap">
//             Festive Collection
//           </h2>
//           <div className="flex-grow border-t border-black" />
//         </div>

//         {/* GRID */}
//         {festiveProducts.length === 0 ? (
//           <p className="text-center text-gray-500">
//             No festive products available
//           </p>
//         ) : (
//           <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {festiveProducts.map((product) => (
//               <Link
//                 key={product.id}
//                 href={`/shop/brands/${product.brand}`}
//               >
//                 <div className="group cursor-pointer">

//                   {/* IMAGE */}
//                   <div className="relative overflow-hidden bg-gray-50">
//                     <span className="absolute top-4 right-4 bg-white/90 text-xs font-medium px-3 py-1">
//                       12 Products
//                     </span>

//                     <img
//                       src={product.mainImage}
//                       alt={product.name}
//                       className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
//                     />
//                   </div>

//                   {/* INFO */}
//                   <div className="mt-4">
//                     <h3 className="text-lg font-semibold flex items-center gap-2">
//                       {brandMap[product.brand]?.name || "Unknown Brand"}

//                       {product.stitchedType === "Unstiched" && (
//                         <span className="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
//                           Unstitched
//                         </span>
//                       )}
//                     </h3>

//                     <p className="text-sm text-gray-600 mt-1">
//                       {brandMap[product.brand]?.name || "Unknown Brand"}
//                     </p>

//                     <p className="text-sm text-gray-500 mt-1">
//                       ₹{product.price}
//                     </p>
//                   </div>

//                 </div>
//               </Link>
//             ))}
//           </div>
//         )}

//       </div>
//     </section>
//   );
// }

// export default FestiveCollection;
"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import {
  getCollections,
  getBrands,
  getCategories,
} from "../../../services/client.service";

function Wintercollection() {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [winterCollection, setWinterCollection] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ---------------- FETCH COLLECTIONS ---------------- */
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const data = await getCollections();

        const winter = data.find(
          (col) => col.name.toLowerCase() === "festive collection"
        );

        setWinterCollection(winter || null);
      } catch (error) {
        console.error("Failed to fetch collections", error);
      }
    };

    fetchCollections();
  }, []);

  /* ---------------- FETCH CATEGORIES ---------------- */
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  /* ---------------- FETCH BRANDS ---------------- */
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const data = await getBrands();
        setBrands(data);
      } catch (error) {
        console.error("Failed to fetch brands", error);
      }
    };

    fetchBrands();
  }, []);

  /* ---------------- BRAND MAP ---------------- */
  const brandMap = useMemo(() => {
    const map = {};
    brands.forEach((b) => {
      map[b.id] = b;
    });
    return map;
  }, [brands]);

  /* ---------------- FILTER WINTER CATEGORIES ---------------- */
  const winterCategories = useMemo(() => {
    if (!winterCollection || !categories.length) return [];

    return categories.filter(
      (cat) => cat.collection === winterCollection.id
    );
  }, [categories, winterCollection]);

  if (loading) return null;

  return (
    <section className="py-2">
      <div className="mx-auto max-w-7xl px-4">

        {/* HEADING */}
        <div className="flex items-center gap-1 mb-10">
          <div className="flex-grow border-t-2 border-black" />
          <h2 className="text-2xl font-semibold md:text-2xl tracking-wide uppercase whitespace-nowrap">
            Festive Collection
          </h2>
          <div className="flex-grow border-t-2 border-black" />
        </div>

        {/* GRID */}
        {winterCategories.length === 0 ? (
          <p className="text-center text-gray-500">
            No winter categories available
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {winterCategories.map((category) => (
              <Link
                key={category.id}
                href={`/shop/brands/${category.id}`} // ✅ brand-based navigation
              >
                <div className="group cursor-pointer">

                  {/* IMAGE */}
                  <div className="relative overflow-hidden bg-gray-50">
                    <img
                      src={category.image} // ✅ category image
                      alt={category.name}
                      className="w-full  object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* INFO */}
                  <div className="mt-2 text-center">
                    <p className="text-sm font-semibold text-gray-600 mt-1">
                      {brandMap[category.brand]?.name || "Unknown Brand"}{" "}
                      {category.name}
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

export default Wintercollection;
