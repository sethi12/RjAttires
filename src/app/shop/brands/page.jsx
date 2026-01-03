import React from "react";

function Page() {
  const brands = [
    {
      name: "Qalamkar",
      image: "/qalamakar.png",
    },
    {
      name: "Gul Ahmed",
      image: "/kulahmed.png",
    },
    {
      name: "Zaha",
      image: "/zaha.png",
    },
    
  ];

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
          ))}
        </div>

      </div>
    </section>
  );
}

export default Page;
