"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      text: "I bought a beautiful designer suit for my mother on her birthday last month. Thank you team RJ Attire, you are the best.",
      name: "P Gupta",
      rating: 5,
    },
    {
      text: "Amazing quality and excellent service. The fabric and fitting were perfect. Highly recommended.",
      name: "Neha Sharma",
      rating: 5,
    },
    {
      text: "Loved the detailing and craftsmanship. RJ Attires never disappoints.",
      name: "Amit Verma",
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("right");

  const prev = () => {
    setDirection("left");
    setCurrent((current - 1 + reviews.length) % reviews.length);
  };

  const next = () => {
    setDirection("right");
    setCurrent((current + 1) % reviews.length);
  };

  return (
    <section className="py-10 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 relative text-center">

        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-14">
          Reviews
        </h2>

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center hover:opacity-60"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center hover:opacity-60"
        >
          <ChevronRight size={32} />
        </button>

        {/* Review Slider */}
        <div className="relative h-[220px] max-w-3xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`
                absolute inset-0 flex flex-col items-center justify-center
                transition-all duration-700 ease-in-out
                ${
                  index === current
                    ? "opacity-100 translate-x-0"
                    : direction === "right"
                    ? "opacity-0 translate-x-10"
                    : "opacity-0 -translate-x-10"
                }
              `}
            >
              {/* Quote */}
              <div className="relative mb-8">
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl text-gray-200">
                  “
                </span>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {review.text}
                </p>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Name */}
              <p className="font-medium text-lg">
                {review.name}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Arrows */}
        <div className="flex md:hidden justify-center gap-10 mt-10">
          <button onClick={prev}>
            <ChevronLeft size={28} />
          </button>
          <button onClick={next}>
            <ChevronRight size={28} />
          </button>
        </div>

      </div>
    </section>
  );
}
