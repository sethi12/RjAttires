"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import {
  getCollections,
  getProducts,
  getBrands,
} from "../../../services/client.service";

function NewArrivals() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [newArrivalsCollection, setNewArrivalsCollection] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ---------------- FETCH COLLECTIONS ---------------- */
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const data = await getCollections();

        const newArrivals = data.find(
          (col) => col.name.toLowerCase() === "new arrivals"
          // If your Firestore value is "New Arrival", use:
          // col.name.toLowerCase() === "new arrival"
        );

        if (newArrivals) setNewArrivalsCollection(newArrivals);
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

  /* ---------------- FILTER NEW ARRIVAL PRODUCTS ---------------- */
  const newArrivalProducts = useMemo(() => {
    if (!newArrivalsCollection) return [];
    return products.filter(
      (product) => product.collection === newArrivalsCollection.id
    );
  }, [products, newArrivalsCollection]);

  if (loading) return null;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">

        {/* HEADING */}
        <div className="flex items-center gap-6 mb-14">
          <div className="flex-grow border-t border-black" />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide uppercase whitespace-nowrap">
            New Arrivals
          </h2>
          <div className="flex-grow border-t border-black" />
        </div>

        {/* GRID */}
        {newArrivalProducts.length === 0 ? (
          <p className="text-center text-gray-500">
            No new arrival products available
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {newArrivalProducts.map((product) => (
              <Link
                key={product.id}
                href={`/shop/brands/${product.brand}`}
              >
                <div className="group cursor-pointer">

                  {/* IMAGE */}
                  <div className="relative overflow-hidden bg-gray-50">
                    <span className="absolute top-4 right-4 bg-white/90 text-xs font-medium px-3 py-1">
                      New
                    </span>

                    <img
                      src={product.mainImage}
                      alt={product.name}
                      className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* INFO */}
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      {brandMap[product.brand]?.name || "Unknown Brand"}

                      {product.stitchedType === "Unstiched" && (
                        <span className="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
                          Unstitched
                        </span>
                      )}
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">
                      {brandMap[product.brand]?.name || "Unknown Brand"}
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      ₹{product.price}
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

export default NewArrivals;
