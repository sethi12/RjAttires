// "use client";

// import React, { useEffect, useState,useMemo } from "react";
// import { Star, ChevronLeft, ChevronRight } from "lucide-react";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import { getBrands, getCategories, getProducts } from "../../../../services/client.service";
// import { useCart } from "@/app/context/CartContext";
// export default function Page() {

//   const { id } = useParams();
//   const {addToCart}= useCart();
//   const [product, setProduct] = useState(null);
//   const [brand, setBrand] = useState(null);
//   const [count, setCount] = useState(1);
//   const [current, setCurrent] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [category, setCategory] = useState(null);


//   useEffect(() => {
//   const fetchProductBrandAndCategory = async () => {
//     try {
//       const products = await getProducts();
//       const foundProduct = products.find((p) => p.id === id);

//       if (!foundProduct) {
//         setProduct(null);
//         return;
//       }

//       setProduct(foundProduct);

//       /* -------- FETCH BRAND -------- */
//       const brands = await getBrands();
//       const foundBrand = brands.find(
//         (b) => b.id === foundProduct.brand
//       );
//       setBrand(foundBrand || null);

//       /* -------- FETCH CATEGORY -------- */
//       if (foundProduct.category) {
//         const categories = await getCategories();
//         const foundCategory = categories.find(
//           (c) => c.id === foundProduct.category
//         );
//         setCategory(foundCategory || null);
//       }
//     } catch (err) {
//       console.error("Fetch error", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (id) fetchProductBrandAndCategory();
  
// }, [id]);
// const whatsappNumber = "919311000666";

// const productUrl =
//   typeof window !== "undefined" ? window.location.href : "";

// const whatsappMessage = useMemo(() => {
//   if (!product) return "";

//   return encodeURIComponent(
//     `Hello RJ Attires 👋\n\n` +
//     `I am interested in this product:\n\n` +
//     `🛍 Product: ${product.name}\n` +
//     `🏷 Brand: ${brand?.name || "RJ Attires"}\n\n` +
//     `🔗 Product Link:\n${productUrl}`
//   );
// }, [product, brand, productUrl]);

// const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;


//   if (loading) return null;

//   if (!product) {
//     return (
//       <div className="py-10 text-center text-gray-500">
//         Product not found
//       </div>
//     );
//   }


//   return (
//     <section className="py-1 ml-2 mr-2">
//       <div className="mx-auto max-w-7xl px-1">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">

//           {/* LEFT – IMAGE GALLERY */}
//           <div className="flex justify-center">
//             <div className="w-full max-w-md">

//               {/* Main Image */}
//               <div className="relative overflow-hidden bg-gray-100 flex justify-center">
//                 <img
//                   src={product.images?.[current] || product.mainImage}
//                   alt={product.name}
//                   className="w-full max-h-[520px] object-contain"
//                 />

//                 {/* Arrows */}
//                 {product.images?.length > 1 && (
//                   <>
//                     <button
//                       onClick={() =>
//                         setCurrent(
//                           (current - 1 + product.images.length) %
//                             product.images.length
//                         )
//                       }
//                       className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5"
//                     >
//                       <ChevronLeft size={18} />
//                     </button>

//                     <button
//                       onClick={() =>
//                         setCurrent((current + 1) % product.images.length)
//                       }
//                       className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5"
//                     >
//                       <ChevronRight size={18} />
//                     </button>
//                   </>
//                 )}
//               </div>

//               {/* Thumbnails */}
//               {product.images?.length > 1 && (
//                 <div className="mt-1 flex justify-center gap-2">
//                   {product.images.map((img, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrent(index)}
//                       // className={`border p-1 ${
//                       //   index === current
//                       //     ? "border-black"
//                       //     : "border-gray-300"
//                       // }`}
//                     >
//                       <img
//                         src={img}
//                         className="h-14 w-14 object-contain"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* RIGHT – PRODUCT INFO */}
//           <div>
// <h1 className="text-[20px] font-[400] mb-3 font-poppins">
//   {brand?.name} {category?.name} |{product.name}
// </h1>


//             {/* Stars */}
//             <div className="flex gap-1 mb-3">
//               {[...Array(5)].map((_, i) => (
//                 <Star key={i} size={16} className="text-[#7A0C2E]" />
//               ))}
//             </div>

//             {/* Price */}
//            <p className="text-[18px] text-red-600 font-semibold mb-1">
//   ₹{Number(product.price).toLocaleString("en-IN", {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   })}
// </p>

//             <p className="text-sm font-semibold text-black mb-2">
//               MRP incl. of all taxes
//             </p>

//             {/* Cart */}
//          <div className="flex items-center gap-4 mb-6">

//   {/* ADD TO CART */}
// <button
//   onClick={() => addToCart(product)}
//   className="bg-black text-white px-8 py-3 uppercase"
// >
//   Add to Cart
// </button>


//   {/* QUANTITY BOX */}
//   <div className="flex items-center border border-gray-300">

//     {/* COUNT */}
//     <div className="px-6 py-3 text-sm font-medium border-r border-gray-300 select-none">
//       {count}
//     </div>

//     {/* ARROWS */}
//     <div className="flex flex-col">
//       <button
//         className="px-3 py-1 text-xs hover:bg-gray-100 border-b border-gray-300"
//         onClick={() => setCount((prev) => prev + 1)}
//       >
//         ▲
//       </button>

//       <button
//         className="px-3 py-1 text-xs hover:bg-gray-100"
//         onClick={() => setCount((prev) => Math.max(1, prev - 1))}
//       >
//         ▼
//       </button>
//     </div>

//   </div>
// </div>


//             {/* WhatsApp & Measurement */}
//            <div className="flex flex-row flex-wrap items-center gap-1 mb-8">
//   {/* WhatsApp Button */}
// {/* WhatsApp Button */}
// <Link
//   href={whatsappLink}
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   <button
//     className="
//       flex items-center justify-center gap-3
//       bg-green-500 hover:bg-green-600
//       text-white
//       px-6 py-3
//       text-sm font-medium
//       rounded
//       transition
//       whitespace-nowrap
//     "
//   >
//     <img
//       src="/whatsapp.png"
//       alt="Whatsapp"
//       className="w-5 h-5"
//     />
//     WhatsApp
//   </button>
// </Link>

//   {/* Submit Measurement */}
//   <Link href="/products/measurementform">
//     <button
//       className="
//         flex items-center justify-center
//         border border-black
//         text-black
//         px-6 py-3
//         text-sm font-medium
//         rounded
//         hover:bg-black hover:text-white
//         transition
//         whitespace-nowrap
//       "
//     >
//       Submit Measurement
//     </button>
//   </Link>
// </div>

//             {/* Meta */}
//             <div className="text-sm font-[200] text-black space-y-2">
//               <p>SKU: <span className="text-gray-700 font-[200]">{product.id}</span></p>
//               <p>Category: {product.stitchedType}</p>
//             </div>

//             {/* Offers */}
//             <div className="mt-6">
//               <h4 className="font-semibold mb-2">
//                 AVAILABLE OFFERS:
//               </h4>
//               <p className="text-xs">▶ 10% OFF For New Users</p>
//             </div>

//             {/* Stock */}
//             <p className="mt-4 font-medium text-gray-600">
//            <span className="inline-flex items-center justify-center w-4 h-4 text-[10px] bg-black text-white rounded-full">
//   ✓
// </span>
// <span className="ml-1">   in stock</span>
//             </p>

//             {/* Trust Badges */}
//             <div className="mt-6 space-y-2 text-sm">
//               <p>👍 Premium Quality</p>
//               <p>↩ 10 Days Return & Exchange</p>
//               <p>🔒 Easy & Secure Shopping</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* DESCRIPTION & REVIEWS */}
// <section className="mt-10 ">
//   <div className="mx-auto max-w-5xl px-4">

//     {/* TABS */}
//     <div className="flex  text-center">
//       <button
//         className="
//           w-1/2
//           py-1.5
//           text-sm
//           font-medium
//           bg-black text-white
//           tracking-wide
//         "
//       >
//         Description
//       </button>

//       <button
//         className="
//           w-1/2
//           py-1.5
//           text-sm
//           font-medium
//           text-gray-500
//           tracking-wide
//           hover:text-black
//         "
//       >
//         Reviews (0)
//       </button>
//     </div>

//     {/* CONTENT */}
//     <div className="py-1 mx-auto max-w-3xl ml-5">

//       {/* COD */}
//       <p className="text-xs uppercase tracking-wider text-gray-400 mb-6">
//      {product.cod ===true?"COD Available":""}
//       </p>

//       {/* COLOR */}
//       <p className="text-sm text-gray-600 mb-5">
//         <span className="font-medium text-gray-800">
//           Colour:
//         </span>{" "}
//         {product.color || "Navy Blue"}
//       </p>

//       {/* PRODUCT DESCRIPTION */}
//       <div className="mb-8">
//         <h4 className="text-sm font-medium text-gray-800 mb-3">
//           Product Description
//         </h4>

//         <p className="text-sm text-gray-500 leading-relaxed">
//           {product.description}
//         </p>
//       </div>

//       {/* FABRIC DETAILS */}
//       {product.fabricDetails?.length > 0 && (
//         <div className="mb-8">
//           <h4 className="text-sm font-medium text-gray-800 mb-3">
//             Fabric Details
//           </h4>

//           <ul className="list-disc pl-5 space-y-1 text-sm text-gray-500">
//             {product.fabricDetails.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* FABRIC DESCRIPTION METERS */}
//       {product.fabricMeters?.length > 0 && (
//         <div>
//           <h4 className="text-sm font-medium text-gray-800 mb-3">
//             Fabric Description Meters
//           </h4>

//           <ul className="list-disc pl-5 space-y-1 text-sm text-gray-500">
//             {product.fabricMeters.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//     </div>
//   </div>
// </section>


//     </section>
//   );
// }





import ClientPage from "./ClientPage";
import { getProducts, getBrands, getCategories } from "../../../../services/client.service";

/* ✅ REQUIRED FOR output: 'export' */
export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

/* ✅ SERVER COMPONENT */
export default async function Page({ params }) {
  const { id } = await params;

  const [products, brands, categories] = await Promise.all([
    getProducts(),
    getBrands(),
    getCategories(),
  ]);

  return (
    <ClientPage
      id={id}
      products={products}
      brands={brands}
      categories={categories}
    />
  );
}
