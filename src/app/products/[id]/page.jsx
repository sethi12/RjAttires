"use client";

import React, { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getProducts } from "../../../../services/client.service";

export default function Page() {
  const { id } = useParams(); // product id from URL

  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  /* ---------------- FETCH PRODUCT ---------------- */
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await getProducts();
        const found = products.find((p) => p.id === id);
        setProduct(found || null);
      } catch (err) {
        console.error("Failed to fetch product", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return null;

  if (!product) {
    return (
      <div className="py-20 text-center text-gray-500">
        Product not found
      </div>
    );
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">

          {/* LEFT – IMAGE GALLERY */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">

              {/* Main Image */}
              <div className="relative overflow-hidden bg-gray-100 flex justify-center">
                <img
                  src={product.images?.[current] || product.mainImage}
                  alt={product.name}
                  className="w-full max-h-[520px] object-contain"
                />

                {/* Arrows */}
                {product.images?.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrent(
                          (current - 1 + product.images.length) %
                            product.images.length
                        )
                      }
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5"
                    >
                      <ChevronLeft size={18} />
                    </button>

                    <button
                      onClick={() =>
                        setCurrent((current + 1) % product.images.length)
                      }
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {product.images?.length > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`border p-1 ${
                        index === current
                          ? "border-black"
                          : "border-gray-300"
                      }`}
                    >
                      <img
                        src={img}
                        className="h-14 w-14 object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT – PRODUCT INFO */}
          <div>
            <h1 className="text-3xl font-semibold mb-3">
              {product.name}
            </h1>

            {/* Stars */}
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-red-600" />
              ))}
            </div>

            {/* Price */}
            <p className="text-2xl text-red-600 font-semibold mb-1">
              ₹{product.price}
            </p>
            <p className="text-sm text-gray-600 mb-6">
              MRP incl. of all taxes
            </p>

            {/* Cart */}
            <div className="flex items-center gap-4 mb-6">
              <button className="bg-black text-white px-8 py-3 uppercase tracking-wide">
                Add to Cart
              </button>

              <div className="flex items-center border">
                <button
                  className="px-3 text-lg"
                  onClick={() =>
                    setCount((prev) => Math.max(1, prev - 1))
                  }
                >
                  −
                </button>

                <span className="px-4 select-none">
                  {count}
                </span>

                <button
                  className="px-3 text-lg"
                  onClick={() => setCount((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* WhatsApp & Measurement */}
           <div className="flex flex-row flex-wrap items-center gap-4 mb-8">
  {/* WhatsApp Button */}
  <button
    className="
      flex items-center justify-center gap-3
      bg-green-500 hover:bg-green-600
      text-white
      px-6 py-3
      text-sm font-medium
      rounded
      transition
      whitespace-nowrap
    "
  >
    <img
      src="/whatsapp.png"
      alt="Whatsapp"
      className="w-5 h-5"
    />
    WhatsApp
  </button>

  {/* Submit Measurement */}
  <Link href="/products/measurementform">
    <button
      className="
        flex items-center justify-center
        border border-black
        text-black
        px-6 py-3
        text-sm font-medium
        rounded
        hover:bg-black hover:text-white
        transition
        whitespace-nowrap
      "
    >
      Submit Measurement
    </button>
  </Link>
</div>

            {/* Meta */}
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>SKU:</strong> {product.id}</p>
              <p><strong>Category:</strong> {product.stitchedType}</p>
            </div>

            {/* Offers */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">
                AVAILABLE OFFERS:
              </h4>
              <p>▶ 10% OFF For New Users</p>
            </div>

            {/* Stock */}
            <p className="mt-4 font-medium text-green-600">
              ✔ In Stock
            </p>

            {/* Trust Badges */}
            <div className="mt-6 space-y-2 text-sm">
              <p>👍 Premium Quality</p>
              <p>↩ 10 Days Return & Exchange</p>
              <p>🔒 Easy & Secure Shopping</p>
            </div>
          </div>
        </div>
      </div>
      {/* DESCRIPTION & REVIEWS */}
<section className="mt-20 border-t">
  <div className="mx-auto max-w-5xl px-4">

    {/* TABS */}
    <div className="flex  text-center">
      <button
        className="
          w-1/2
          py-1.5
          text-sm
          font-medium
          bg-black text-white
          tracking-wide
        "
      >
        Description
      </button>

      <button
        className="
          w-1/2
          py-1.5
          text-sm
          font-medium
          text-gray-500
          tracking-wide
          hover:text-black
        "
      >
        Reviews (0)
      </button>
    </div>

    {/* CONTENT */}
    <div className="py-12 mx-auto max-w-3xl">

      {/* COD */}
      <p className="text-xs uppercase tracking-wider text-gray-400 mb-6">
     {product.cod ===true?"COD Available":""}
      </p>

      {/* COLOR */}
      <p className="text-sm text-gray-600 mb-5">
        <span className="font-medium text-gray-800">
          Colour:
        </span>{" "}
        {product.color || "Navy Blue"}
      </p>

      {/* PRODUCT DESCRIPTION */}
      <div className="mb-8">
        <h4 className="text-sm font-medium text-gray-800 mb-3">
          Product Description
        </h4>

        <p className="text-sm text-gray-500 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* FABRIC DETAILS */}
      {product.fabricDetails?.length > 0 && (
        <div className="mb-8">
          <h4 className="text-sm font-medium text-gray-800 mb-3">
            Fabric Details
          </h4>

          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-500">
            {product.fabricDetails.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* FABRIC DESCRIPTION METERS */}
      {product.fabricMeters?.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-800 mb-3">
            Fabric Description Meters
          </h4>

          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-500">
            {product.fabricMeters.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  </div>
</section>


    </section>
  );
}


