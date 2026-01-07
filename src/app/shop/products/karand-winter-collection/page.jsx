import React from "react";
import Link from "next/link";
function Page() {
  const karandicollection = [
    {
      name: "Hussain Rehar Karandi Unstitched 25 | Gulbano",
      image: "/karandi1.jpg",
      price: "₹19,900.00",
      link:"/products/gulbano"
    },
    {
      name: "Hussain Rehar Karandi Unstitched 25 | Riva",
      image: "/karandi2.png",
      price: "₹19,900.00",
      link:"/products/riva"
    },
    {
      name: "Hussain Rehar Karandi Unstitched 25 | Amani",
      image: "/karandi3.png",
      price: "₹19,900.00",
      link:"/products/amani"
    },
    {
      name: "Hussain Rehar Karandi Unstitched 25 | Pankhuri",
      image: "/karandi4.png",
      price: "₹19,900.00",
      link:"/products/pankhuri"
    },
    {
      name: "Hussain Rehar Karandi Unstitched 25 |  Rumi",
      image: "/karandi5.jpg",
      price: "₹19,900.00",
      link:"/products/rumi" 
    }
  ];

  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="flex items-center gap-6 mb-14">
          <div className="flex-grow border-t border-black" />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide uppercase whitespace-nowrap text-center">
            HUSSAIN REHAR KARANDI UNSTITCHED 25
          </h2>
          <div className="flex-grow border-t border-black" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {karandicollection.map((item, index) => (
                
               <Link
               key={index}
               href={item.link}
               >
            <div
              key={index}
              className="group"
            >
              {/* Image */}
              <div className="w-full overflow-hidden bg-gray-50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold leading-snug">
                  {item.name}
                </h3>

                <p className="text-ml text-red-400 mt-2">
                  {item.price}
                </p>

                {/* Add to Cart Button */}
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

      </div>
    </section>
  );
}

export default Page;
