"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  getCategories,
  getBrands,
} from "../../../../services/client.service";
import Link from "next/link";

function Page() {
  const { id } = useParams(); // ✅ brandId

  const [categories, setCategories] = useState([]);
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);

  /* FETCH BRAND + ITS CATEGORIES */
  useEffect(() => {
    const fetchBrandAndCategories = async () => {
      try {
        const [allCategories, allBrands] = await Promise.all([
          getCategories(),
          getBrands(),
        ]);

        // ✅ get brand
        const currentBrand = allBrands.find(
          (b) => b.id === id
        );
        setBrand(currentBrand || null);

        // ✅ get categories of this brand
        const brandCategories = allCategories.filter(
          (cat) => cat.brand === id
        );
        setCategories(brandCategories);
      } catch (error) {
        console.error("Failed to fetch brand/categories", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBrandAndCategories();
  }, [id]);

  if (loading) return null;

  return (
    // <section className="py-10">
    //   <div className="mx-auto max-w-7xl px-4">

    //     {/* BRAND NAME */}
    //     <h1 className="text-2xl font-semibold mb-6 text-center">
    //       {brand ? brand.name : "Brand Categories"}
    //     </h1>

    //     {/* CATEGORIES GRID */}
    //     {categories.length === 0 ? (
    //       <p className="text-center text-gray-500">
    //         No categories found for this brand
    //       </p>
    //     ) : (
    //       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
    //         {categories.map((cat) => (
    //           <div
    //             key={cat.id}
    //             className="border p-4 cursor-pointer hover:shadow-sm transition"
    //           >
    //             <img
    //               src={cat.image}
    //               alt={cat.name}
    //               className="w-full h-40 object-contain mb-3"
    //             />
    //             <h3 className="text-sm font-medium text-center">
    //               {cat.name}
    //             </h3>
    //           </div>
    //         ))}
    //       </div>
    //     )}

    //   </div>
    // </section>
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">

        {/* HEADING */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="flex-grow border-t border-black" />
          <h1 className="text-2xl md:text-3xl font-bold tracking-widest uppercase whitespace-nowrap">
            {brand ? brand.name : "Brand Categories"}
          </h1>
          <div className="flex-grow border-t border-black" />
        </div>
{/* CATEGORIES GRID */}
     {categories.length === 0 ? (
          <p className="text-center text-gray-500">
            No categories found for this brand
          </p>
        ) : (
     <div className="px-2 sm:px-4 md:px-0">

  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
    {categories.map((cat) => (
                <Link
            key={cat.id}
            href={`/shop/brands/${cat.id}`}
        >
      <div
        key={cat.id}
        className="cursor-pointer transition hover:shadow-sm"
      >
        {/* IMAGE */}
        
        <div className="w-full overflow-hidden">
          <img
            src={cat.image}
            alt={cat.name}
            className="
              w-full
              object-cover
                        /* mobile - bigger image */
              
                      /* desktop */
            "
          />
        </div>

        {/* TITLE */}
        <h3 className="mt-3 text-sm font-medium text-center">
          {brand.name} {cat.name}
        </h3>
      </div>
        </Link>
    ))}
  </div>

  </div>)}
</div>
</section>

  );
}

export default Page;
