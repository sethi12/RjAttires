"use client"
import React from "react";
import { useState,useEffect } from "react";
import { getBrands } from "../../../../services/client.service";
import Link from "next/link";
function Page() {
   const [brands, setBrands] = useState([]);
   /* FETCH BRANDS */
  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const data = await getBrands();
      setBrands(data);
    } catch (err) {
      console.error(err);
    }
  };
  // const brands = [
  //   {
  //     name: "Qalamkar",
  //     image: "/qalamakar.png",
  //   },
  //   {
  //     name: "Gul Ahmed",
  //     image: "/kulahmed.png",
  //   },
  //   {
  //     name: "Zaha",
  //     image: "/zaha.png",
  //   },
    
  // ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Heading with lines */}
        <div className="flex items-center gap-6 mb-14">
          <div className="flex-grow border-t border-black" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide uppercase whitespace-nowrap">
            Shop By Brands
          </h2>
          <div className="flex-grow border-t border-black" />
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 items-center justify-center">
          {brands.map((brand, index) => (
           <Link
           key={index}
           href={`/shop/brands/${brand.id}`}>
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-20 md:h-24 object-contain mb-4"
              />
              <h3 className="text-sm font-medium tracking-wide uppercase">
                {brand.name}
              </h3>
            </div>
           </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Page;
