"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import { getProducts } from "../../../services/client.service";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  /* FETCH PRODUCTS */
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

  /* FILTER PRODUCTS */
  const filteredProducts = useMemo(() => {
    if (!query) return [];

    return products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, products]);

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4">

        {/* SEARCH INPUT */}
        <div className="relative max-w-xl mx-auto mb-10">
          <input
            autoFocus
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="
              w-full
              border
              border-gray-300
              px-4
              py-3
              pr-12
              text-sm
              focus:outline-none
            "
          />
          <Search
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>

        {/* RESULTS */}
        {loading ? null : query && filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">
            No products found
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((item) => (
              <Link key={item.id} href={`/products/${item.id}`}>
                <div className="group cursor-pointer">

                  <div className="w-full bg-gray-50 overflow-hidden">
                    <img
                      src={item.mainImage}
                      alt={item.name}
                      className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-2">
                    <h3 className="text-sm">{item.name}</h3>

                    <p className="text-red-600 font-semibold text-sm">
                      ₹{Number(item.price).toLocaleString("en-IN")}
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
