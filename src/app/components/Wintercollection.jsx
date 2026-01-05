import React from "react";
import Link from "next/link";
function Wintercollection() {
  const wintercollections = [
    {
      name: "Hussain Rehar Karandi",
      totalproducts: "12 Products",
      unstitched: "Unstitched 25",
      itemimage: "/winter1.png",
      link:"products/karand-winter-collection"
    },
    {
      name: "Maria.B Winter Luxe-25",
      totalproducts: "12 Products",
      unstitched: "",
      itemimage: "/winter2.png",
      link:"products/maria-b-winter-luxe"
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="flex items-center gap-6 mb-14">
          <div className="flex-grow border-t border-black" />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide uppercase whitespace-nowrap">
            Winter Collection
          </h2>
          <div className="flex-grow border-t border-black" />
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {wintercollections.map((item, index) => (
            <Link
            key={index}
            href={item.link}>
             <div key={index} className="group">

              {/* Image Wrapper */}
               <div className="relative overflow-hidden bg-gray-50">
                
                 {/* Product Count Badge */}
                 <span className="absolute top-4 right-4 bg-white/90 text-xs font-medium px-3 py-1">
                   {item.totalproducts}
                 </span>

                 <img
                   src={item.itemimage}
                   alt={item.name}
                   className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
                 />
               </div>

               {/* Info */}
               <div className="mt-4">
                 <h3 className="text-lg font-semibold">
                   {item.name}
                 </h3>

                 {/* Unstitched below name */}
                 {item.unstitched && (
                   <p className="text-sm text-gray-500 mt-1">
                     {item.unstitched}
                   </p>
                 )}
               </div>

             </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Wintercollection;
