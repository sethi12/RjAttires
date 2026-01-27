// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import { useParams } from "next/navigation";

// import Link from "next/link";
// import { getBrands, getCategories, getProducts } from "../../../../../services/client.service";

// function Page() {
//   const { id } = useParams(); // brand id

//   const [brand, setBrand] = useState(null);
//   const [brandId, setBrandId] = useState("");
// const [categories, setCategories] = useState([]);


//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [category,setCategory]=useState();

// const categoryMap = useMemo(() => {
//   const map = {};
//   categories.forEach((cat) => {
//     map[cat.id] = cat.name;
//   });
//   return map;
// }, [categories]);

//   /* FETCH BRAND */
//   useEffect(() => {
//     const fetchBrand = async () => {
//       try {
//         const brands = await getBrands();
//         const currentBrand = brands.find((b) => b.id === id);
//         setBrand(currentBrand || null);
//       } catch (error) {
//         console.error("Failed to fetch brand", error);
//       }
//     };

//     fetchBrand();
//   }, [id]);
  

// useEffect(() => {
//   const fetchCategoriesByBrand = async () => {
//     try {
//       const allCategories = await getCategories();

//       // ✅ filter categories belonging to this brand
//       const brandCategories = allCategories.filter(
//         (cat) => cat.brand === id
//       );

//       setCategories(brandCategories);

//       console.log("Brand ID:", id);
//       console.log("Categories of this brand:", brandCategories);
//     } catch (error) {
//       console.error("Failed to fetch categories", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (id) fetchCategoriesByBrand();
// }, [id]);

//   /* FETCH PRODUCTS */
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

//   /* FILTER PRODUCTS OF BRAND */
//   const brandProducts = useMemo(() => {
//     return products.filter((product) => product.brand === id);
//   }, [products, id]);

//   if (loading) return null;

//   if (!brand) {
//     return (
//       <div className="py-20 text-center">
//         <p className="text-gray-500">Brand not found</p>
//       </div>
//     );
//   }

//   /* ✅ RETURN JSX (THIS WAS MISSING) */
//   return (
//     <section className="py-2 card">
//       <div className="mx-auto max-w-7xl px-4">
 
//         {/* HEADING */}
//         <div className="flex items-center gap-1 mb-6">
//           <div className="flex-grow border-t-2 border-black" />
//           <h2 className="text-[22px] leading-[25px] font-semibold md:text-3xl  tracking-wide uppercase whitespace-nowrap text-center">
//            {brand.name} <br />{categories[0]?.name}
//           </h2>
//           <div className="flex-grow border-t-2 border-black" />
//         </div>

//         {/* PRODUCT GRID */}
//         {brandProducts.length === 0 ? (
//           <p className="text-center text-gray-500">
//             No products available for this brand
//           </p>
//         ) : (
//           <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-1">
//             {brandProducts.map((item) => (
//               <Link
//                 key={item.id}
//                 href={`/products/${item.id}`}
//               >
//                 <div className="group cursor-pointer">

//                   {/* IMAGE */}
//                   <div className="w-full overflow-hidden bg-gray-50">
//                     <img
//                       src={item.mainImage}
//                       alt={item.name}
//                       className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
//                     />
//                   </div>

//                   {/* INFO */}
//                   <div className="mt-1 ml-3">
//                     <h3 className="text-[12px]  leading-snug">
//                   {brand?.name} {categoryMap[item.category]} | {item.name}
//                     </h3>

//            <p className="text-[14px] text-red-600 font-semibold mb-1">
//   ₹{Number(item.price).toLocaleString("en-IN", {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   })}
// </p>

//                     {/* ADD TO CART */}
//                     <button
//                       className="
//                         mt-1
//                         w-30
//                         bg-black
//                         text-white
//                         py-2
//                         text-sm
//                         tracking-wide
//                         hover:bg-gray-800
//                         transition
//                       "
//                     >
//                       ADD TO CART 
//                     </button>
//                   </div>
// </div>
                
//               </Link>
//             ))}
//           </div>
//         )}

//       </div>
//     </section>
//   );
// }

// export default Page;
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import {
  getBrands,
  getCategories,
  getProducts,
} from "../../../../../services/client.service";

function Page() {
  const { id } = useParams(); // ✅ categoryId

  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  /* =========================
     FETCH CATEGORY + BRAND
  ========================== */
  useEffect(() => {
    const fetchCategoryAndBrand = async () => {
      try {
        const categories = await getCategories();
        const brands = await getBrands();

        const currentCategory = categories.find(
          (cat) => cat.id === id
        );

        setCategory(currentCategory || null);

        if (currentCategory?.brand) {
          const currentBrand = brands.find(
            (b) => b.id === currentCategory.brand
          );
          setBrand(currentBrand || null);
        }
      } catch (err) {
        console.error("Failed to fetch category/brand", err);
      }
    };

    if (id) fetchCategoryAndBrand();
  }, [id]);

  /* =========================
     FETCH PRODUCTS
  ========================== */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  /* =========================
     FILTER PRODUCTS BY CATEGORY
  ========================== */
  const categoryProducts = useMemo(() => {
    return products.filter(
      (product) => product.category === id
    );
  }, [products, id]);

  if (loading) return null;

  if (!category) {
    return (
      <div className="py-20 text-center">
        <p className="text-gray-500">Category not found</p>
      </div>
    );
  }

  /* =========================
     JSX
  ========================== */
  return (
    <section className="py-2 card">
      <div className="mx-auto max-w-7xl px-4">

        {/* HEADING */}
        <div className="flex items-center gap-1 mb-6">
          <div className="flex-grow border-t-2 border-black" />
          <h2 className="text-[22px] leading-[25px] font-semibold md:text-3xl tracking-wide uppercase text-center">
            {brand?.name && <span>{brand.name}<br /></span>}
            {category.name}
          </h2>
          <div className="flex-grow border-t-2 border-black" />
        </div>

        {/* PRODUCTS */}
        {categoryProducts.length === 0 ? (
          <p className="text-center text-gray-500">
            No products available in this category
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {categoryProducts.map((item) => (
              <Link key={item.id} href={`/products/${item.id}`}>
                <div className="group cursor-pointer">

                  {/* IMAGE */}
                  <div className="w-full overflow-hidden bg-gray-50">
                    <img
                      src={item.mainImage}
                      alt={item.name}
                      className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* INFO */}
                  <div className="mt-1 ml-3">
                    <h3 className="text-[12px] leading-snug">
                      {brand?.name} | {item.name}
                    </h3>

                    <p className="text-[14px] text-red-600 font-semibold mb-1">
                      ₹{Number(item.price).toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>

                    <button
                      className="
                        mt-1
                        w-30
                        bg-black
                        text-white
                        py-2
                        text-sm
                        tracking-wide
                        hover:bg-gray-800
                        transition
                      "
                    >
                      ADD TO CART
                    </button>
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

export default Page;
