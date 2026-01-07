"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getBrands, getProducts } from "../../../../../services/client.service";

function Page() {
  const { id } = useParams(); // brand id

  const [brand, setBrand] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  /* FETCH BRAND */
  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const brands = await getBrands();
        const currentBrand = brands.find((b) => b.id === id);
        setBrand(currentBrand || null);
      } catch (error) {
        console.error("Failed to fetch brand", error);
      }
    };

    fetchBrand();
  }, [id]);

  /* FETCH PRODUCTS */
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

  /* FILTER PRODUCTS OF BRAND */
  const brandProducts = useMemo(() => {
    return products.filter((product) => product.brand === id);
  }, [products, id]);

  if (loading) return null;

  if (!brand) {
    return (
      <div className="py-20 text-center">
        <p className="text-gray-500">Brand not found</p>
      </div>
    );
  }

  /* ✅ RETURN JSX (THIS WAS MISSING) */
  return (
    <section className="py-6 card">
      <div className="mx-auto max-w-7xl px-4">
 
        {/* HEADING */}
        <div className="flex items-center gap-6 mb-14">
          <div className="flex-grow border-t border-black" />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide uppercase whitespace-nowrap text-center">
            {brand.name}
          </h2>
          <div className="flex-grow border-t border-black" />
        </div>

        {/* PRODUCT GRID */}
        {brandProducts.length === 0 ? (
          <p className="text-center text-gray-500">
            No products available for this brand
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {brandProducts.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.id}`}
              >
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
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold leading-snug">
                      {item.name}
                    </h3>

                    <p className="text-ml text-red-400 mt-2">
                      ₹{item.price}
                    </p>

                    {/* ADD TO CART */}
                    <button
                      className="
                        mt-4
                        w-30
                        bg-black
                        text-white
                        py-3
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
