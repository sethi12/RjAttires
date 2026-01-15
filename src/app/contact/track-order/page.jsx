"use client";

import React, { useState } from "react";

export default function Page() {
  const [orderId, setOrderId] = useState("");

  return (
   <div className="flex items-center justify-center bg-gray-50 px-6 py-12">
  {/* CARD: Changed max-w-3xl to max-w-md for a sleeker look */}
  <div
    className="
      w-full max-w-md
      bg-white
      rounded-3xl
      shadow-[0_20px_50px_rgba(0,0,0,0.1)]
      p-8 md:p-12
      text-center
    "
  >
    {/* TITLE: Scaled text size for mobile */}
    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
      Track Your Order
    </h1>

    {/* LABEL */}
    <p className="text-sm md:text-base font-medium text-gray-500 mb-3">
      Order ID / Tracking Number
    </p>

    {/* INPUT: Adjusted padding and text size */}
    <input
      type="text"
      value={orderId}
      onChange={(e) => setOrderId(e.target.value)}
      placeholder="e.g. #123456"
      className="
        w-full
        bg-gray-50
        border border-gray-200
        rounded-xl
        px-4 py-3
        text-base
        focus:outline-none
        focus:ring-2
        focus:ring-[#3d4f6e]
        mb-8
      "
    />

    {/* BUTTON: More compact height */}
    <button
      className="
        w-full
        py-3.5
        rounded-xl
        text-white
        font-semibold
        bg-gradient-to-r
        from-[#2f3f5e]
        to-[#5e6f8f]
        hover:shadow-lg
        active:scale-[0.98]
        transition-all
      "
    >
      Track Order
    </button>
  </div>
</div>
  );
}
