"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Page({ params }) {
  const { slug } = params;
    const [count,setCount]=useState(0)
  // Later you can fetch from DB using slug
  const product = {
    name: "Hussain Rehar Karandi Unstitched 25 | Gulbano",
    price: "₹19,900.00",
    sku: "4829",
    category: "Karandi Unstitched-2025, Winter Collection",
    images: [
      "/karandi1.jpg",
      "/gulbano1.jpg",
      "/gulbano2.jpg",
      "/gulbano3.jpg",
      "/gulbano4.jpg"
    ],
  };

  const [current, setCurrent] = useState(0);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">

          {/* LEFT – IMAGE GALLERY */}
{/* LEFT – IMAGE GALLERY */}
<div className="flex justify-center">
  <div className="w-full max-w-md">

    {/* Main Image */}
    <div className="relative overflow-hidden bg-gray-100 flex justify-center">
      <img
        src={product.images[current]}
        alt={product.name}
        className="w-full max-h-[520px] object-contain"
      />

      {/* Arrows */}
      <button
        onClick={() =>
          setCurrent((current - 1 + product.images.length) % product.images.length)
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
    </div>

    {/* Thumbnails */}
    <div className="mt-4 flex justify-center gap-2">
      {product.images.map((img, index) => (
        <button
          key={index}
          onClick={() => setCurrent(index)}
          className={`border p-1 ${
            index === current ? "border-black" : "border-gray-300"
          }`}
        >
          <img
            src={img}
            className="h-14 w-14 object-contain"
          />
        </button>
      ))}
    </div>

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
              {product.price}
            </p>
            <p className="text-sm text-gray-600 mb-6">
              MRP incl. of all taxes
            </p>

            {/* Cart */}
            <div className="flex items-center gap-4 mb-6">
              <button className="bg-black text-white px-8 py-3 uppercase tracking-wide cursor-pointer">
                Add to Cart
              </button>

              <div className="flex items-center border">
                <button
    className="px-3 text-lg"
    onClick={() => setCount(prev => Math.max(0, prev - 1))}
  >
    −
  </button>

  {/* Count */}
  <span className="px-4 select-none">
    {count}
  </span>

  {/* Increase */}
  <button
    className="px-3 text-lg"
    onClick={() => setCount(prev => prev + 1)}
  >
    +
  </button>
              </div>
            </div>

{/* WhatsApp & Submit Measurement */}
<div className="flex flex-col sm:flex-row gap-4 mb-8">

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
      w-full sm:w-auto
    "
  >
    <img
      src="/whatsapp.png"
      alt="Whatsapp"
      className="w-5 h-5"
    />
    WhatsApp
  </button>

  {/* Submit Measurement Button */}
  
<Link
href={"/products/measurementform"}>
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
      w-full sm:w-auto
    "
  >
    Submit Measurement
  </button>
</Link>
</div>

          

            {/* Meta */}
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>SKU:</strong> {product.sku}</p>
              <p><strong>Categories:</strong> {product.category}</p>
            </div>

            {/* Offers */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">AVAILABLE OFFERS:</h4>
              <p>▶ 10% OFF For New Users</p>
            </div>

            {/* Stock */}
            <p className="mt-4 font-medium text-green-600">✔ In Stock</p>

            {/* Trust Badges */}
            <div className="mt-6 space-y-2 text-sm">
              <p>👍 Premium Quality</p>
              <p>↩ 10 Days Return & Exchange</p>
              <p>🔒 Easy & Secure Shopping</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
