// "use client"
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { getCollections, getProducts } from "../../../services/client.service";
// function Wintercollection() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [Wintercollection,setwintercollection]=useState([]);
//    useEffect(() => {
//       fetchcollections();
//     }, []);
//      const  fetchcollections= async () => {
//           try {
//             const data = await getCollections();
//             setwintercollection(data);
//           } catch (err) {
//             console.error(err);
//           }
//         };
//         useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const data = await getProducts();
//       setProducts(data);
//     } catch (error) {
//       console.error("Failed to fetch products", error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   const wintercollections = [
//     {
//       name: "Hussain Rehar Karandi",
//       totalproducts: "12 Products",
//       unstitched: "Unstitched 25",
//       itemimage: "/winter1.png",
//       link:"products/karand-winter-collection"
//     },
//     {
//       name: "Maria.B Winter Luxe-25",
//       totalproducts: "12 Products",
//       unstitched: "",
//       itemimage: "/winter2.png",
//       link:"products/maria-b-winter-luxe"
//     },
//   ];

//   return (
//     <section className="py-16">
//       <div className="mx-auto max-w-7xl px-4">

//         {/* Heading */}
//         <div className="flex items-center gap-6 mb-14">
//           <div className="flex-grow border-t border-black" />
//           <h2 className="text-2xl md:text-3xl font-semibold tracking-wide uppercase whitespace-nowrap">
//             Winter Collection
//           </h2>
//           <div className="flex-grow border-t border-black" />
//         </div>

//         {/* Collection Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {wintercollections.map((item, index) => (
//             <Link
//             key={index}
//             href={item.link}>
//              <div key={index} className="group">

//               {/* Image Wrapper */}
//                <div className="relative overflow-hidden bg-gray-50">
                
//                  {/* Product Count Badge */}
//                  <span className="absolute top-4 right-4 bg-white/90 text-xs font-medium px-3 py-1">
//                    {item.totalproducts}
//                  </span>

//                  <img
//                    src={item.itemimage}
//                    alt={item.name}
//                    className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
//                  />
//                </div>

//                {/* Info */}
//                <div className="mt-4">
//                  <h3 className="text-lg font-semibold">
//                    {item.name}
//                  </h3>

//                  {/* Unstitched below name */}
//                  {item.unstitched && (
//                    <p className="text-sm text-gray-500 mt-1">
//                      {item.unstitched}
//                    </p>
//                  )}
//                </div>

//              </div>
//             </Link>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Wintercollection;



"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import {
  getCollections,
  getProducts,
  getBrands,
} from "../../../services/client.service";

function Wintercollection() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [winterCollection, setWinterCollection] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ---------------- FETCH COLLECTIONS ---------------- */
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const data = await getCollections();

        const winter = data.find(
          (col) => col.name.toLowerCase() === "winter collection"
        );

        if (winter) setWinterCollection(winter);
      } catch (error) {
        console.error("Failed to fetch collections", error);
      }
    };

    fetchCollections();
  }, []);

  /* ---------------- FETCH PRODUCTS ---------------- */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
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

  /* ---------------- BRAND LOOKUP MAP ---------------- */
  const brandMap = useMemo(() => {
    return brands.reduce((acc, brand) => {
      acc[brand.id] = brand;
      return acc;
    }, {});
  }, [brands]);

  /* ---------------- FILTER WINTER PRODUCTS ---------------- */
  const winterProducts = useMemo(() => {
    if (!winterCollection) return [];
    return products.filter(
      (product) => product.collection === winterCollection.id
    );
  }, [products, winterCollection]);

  if (loading) return null;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">

        {/* HEADING */}
        <div className="flex items-center gap-1 mb-10">
          <div className="flex-grow border-t-2 border-black" />
          <h2 className="text-2xl font-semibold  md:text-2xl  tracking-wide uppercase whitespace-nowrap">
            Winter Collection
          </h2>
          <div className="flex-grow border-t-2 border-black" />
        </div>

        {/* GRID */}
        {winterProducts.length === 0 ? (
          <p className="text-center text-gray-500">
            No winter products available
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {winterProducts.map((product) => (
              <Link
                key={product.id}
                href={`/shop/brands/${product.brand}`} // ✅ correct routing
              >
                <div className="group cursor-pointer">

                  {/* IMAGE */}
                  <div className="relative overflow-hidden bg-gray-50">
                    {/* <span className="absolute top-4 right-4 bg-white/90 text-xs font-medium px-3 py-1">
                      12 Products
                    </span> */}

                    <img
                      src={product.mainImage}
                      alt={product.name}
                      className="w-full  object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* INFO */}
                  <div className="mt-4">
                    {/* <h3 className="text-lg font-semibold flex items-center gap-2">
  {brandMap[product.brand]?.name || "Unknown Brand"}

  {product.stitchedType === "Unstiched" && (
    // <span className="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
    //   Unstitched
    // </span>
        <span className="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
      Unstitched
    </span>
  )}
</h3> */}


                    {/* BRAND NAME */}
                    <p className="text-sm text-gray-600 mt-1">
                      {brandMap[product.brand]?.name || "Unknown Brand"}{product.name}
                    </p>

                    {/* <p className="text-sm text-gray-500 mt-1">
                      ₹{product.price}
                    </p> */}
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
