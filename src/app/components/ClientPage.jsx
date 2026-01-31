"use client";

import React, { useMemo } from "react";
import Link from "next/link";

function ClientPage({ id, categories, brands, products }) {
  const category = categories.find((cat) => cat.id === id) || null;

  const brand = category
    ? brands.find((b) => b.id === category.brand)
    : null;

  const categoryProducts = useMemo(() => {
    return products.filter(
      (product) => product.category === id
    );
  }, [products, id]);

  if (!category) {
    return (
      <div className="py-20 text-center">
        <p className="text-gray-500">Category not found</p>
      </div>
    );
  }

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
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">
            {categoryProducts.map((item) => (
              <Link key={item.id} href={`/products/${item.id}`}>
                <div className="group cursor-pointer">
                  <div className="w-full overflow-hidden bg-gray-50">
                    <img
                      src={item.mainImage}
                      alt={item.name}
                      className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-1 ml-3">
                    <h3 className="text-[16px] font-semibold">
                      {brand?.name} {category.name} | {item.name}
                    </h3>

                    <p className="text-[14px] text-red-600 font-semibold">
                      ₹{Number(item.price).toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>

                    <button className="mt-1 bg-black text-white py-2 px-4 text-sm">
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

export default ClientPage;
