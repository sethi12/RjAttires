"use client";

import { useState } from "react";
import { useEffect, useMemo } from "react";
import { getProducts } from "../../../services/client.service";
import Link from "next/link";
import { Search, User,  ChevronDown, Menu, X , Mail,
  Phone,
  Instagram,
  Facebook,
  Globe,} from "lucide-react";
import CartIcon from "./CartIcon";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";


export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
   const {opencart}= useCart();
   const [searchQuery, setSearchQuery] = useState("");
const [products, setProducts] = useState([]);
const [searchLoading, setSearchLoading] = useState(true);
useEffect(() => {
  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (e) {
      console.error("Search fetch failed", e);
    } finally {
      setSearchLoading(false);
    }
  };

  fetchProducts();
}, []);

const searchResults = useMemo(() => {
  if (!searchQuery) return [];
  return products
    .filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 6); // mobile-friendly limit
}, [searchQuery, products]);

  const menuList = [
    {
      name: "About Us",
      link: "/",
    },
    {
      name: "Shop",
      link: "/shop",
      dropdown: [
        { name: "Shop by Brand", link: "/shop/brands" },
        { name: "New Arrivals", link: "/shop/new-arrivals" },
        { name: "Winter Collections", link: "/shop/winter-collections" },
        { name: "Summer Collections", link: "/shop/summer-collections" },
        { name: "Festive Collections", link: "/shop/festive-collections" },
        { name: "Upcoming", link: "/shop/upcoming" },
      ],
    },
    {
      name: "Sale",
      link: "/sale",
    },
    {
      name: "Support",
      link: "",
      // dropdown: [{ name: "Our Blog", link: "/support/our-blog" }],
    },
    {
      name: "Contact Us",
      link: "/contact",
      dropdown: [
        { name: "WhatsApp", link: "/contact/whats-app" },
        { name: "Track Order", link: "/contact/track-order"},
        { name: "WholeSale Enquiry", link: "/contact/whole-sale"
         },
      ],
    },
  ];

  return (
    <header className="w-full  bg-white z-40">
      {/* Top Info Bar */}
  <div className="bg-black text-white text-sm">
    <div className="mx-auto max-w-7xl px-6 py-2 flex justify-between items-center">
      
      {/* Left Side */}
      <div className="flex items-center gap-6">
        <Link
          href="mailto:support@rjattires.com"
          className="flex items-center gap-2 hover:text-gray-300"
        >
          <Mail size={14} />
          <span>Email</span>
        </Link>

        <Link
          href="https://wa.me/919311000666"
          target="_blank"
          className="flex items-center gap-2 hover:text-gray-300"
        >
          <Phone size={14} />
          <span>+91 9311000666</span>
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center ">
        <Link
          href="https://www.instagram.com/rjattires?igsh=MTlkbTIzaGY3eGY1MA=="
          target="_blank"
          className="hover:text-gray-300"
        >
          {/* <Instagram size={16} /> */}
             <img src="/instafooter.jpg" alt=""  className="h-4.5 object-contain rounded-4xl" />
        </Link>

        <Link
          href="https://https://www.facebook.com/share/1CrUyXqvNs/.com"
          target="_blank"
          className="hover:text-gray-300 gap-3"
        >
          {/* <Globe size={16} /> */}
           <img src="fbfooter.jpg" alt=""   className="h-6 object-contain rounded-3xl"/>
        </Link>

        <Link
          href="https://www.google.com/search?q=rj+attire&rlz=1C5OZZY_enIN1131IN1131&oq=rj+attire&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDINCAEQLhivARjHARiABDINCAIQLhivARjHARiABDIGCAMQRRg7MgcIBBAAGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIOTI5MWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8&lqi=CglyaiBhdHRpcmVIsOu2g9augIAIWhMQABABGAAYASIJcmogYXR0aXJlkgETY2xvdGhpbmdfd2hvbGVzYWxlcg#rlimm=15751366982928445618"
          target="_blank"
          className="hover:text-gray-300"
        >
          {/* <Facebook size={16} /> */}
            <img src="googlefooter.jpg" alt=""   className="h-4 object-contain rounded-3xl" />
        </Link>
      </div>

    </div>
  </div>
<nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between z-40">

  {/* LEFT – LOGO */}
  <Link href="/" className="flex items-center">
    <img
      src="/rjlogoorignal.png"
      alt="RJ Attires"
      className="h-auto w-[120px]"
    />
  </Link>

  {/* RIGHT – MENU + ICONS */}
  <div className="flex items-center gap-6">

    {/* DESKTOP MENU */}
    <ul className="hidden md:flex items-center gap-8">
      {menuList.map((item, index) => (
        <li key={index} className="relative group">
          <Link
            href={item.link}
            className={`flex items-center gap-1 text-sm font-medium ${
              item.name === "Sale"
                ? "text-red-500"
                : "text-gray-700 hover:text-black"
            }`}
          >
            {item.name}
            {item.dropdown && <ChevronDown size={14} />}
          </Link>

          {item.dropdown && (
            <ul
              className="
                absolute right-0 top-full mt-3 w-64 z-50
                border border-gray-200 bg-white shadow-sm
                opacity-0 invisible
                group-hover:visible group-hover:opacity-100
                transition-opacity 
              "
            >
              {item.dropdown.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link
                    href={subItem.link}
                    className="block px-8 py-5 text-sm uppercase tracking-wide text-black"
                  >
                    {subItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
    <button
      onClick={() => setOpen(!open)}
      className="md:hidden"
    >
      {open ? <X size={24} /> : <Menu size={24} />}
    </button>
    {/* ICONS */}
    <Link href="/account">
      <User size={20} />
    </Link>

    <CartIcon/>

    {/* MOBILE MENU BUTTON */}

  </div>
</nav>

{/* MOBILE SEARCH BAR */}
{/* <div className="md:hidden px-4 pb-4">
  <div className="relative">
    <input
      type="text"
      placeholder="Search"
      className="
        w-full
        border
        border-gray-300
        rounded-sm
        py-2.5
        pl-4
        pr-12
        text-sm
        focus:outline-none
      "
    />

<Link href="/search">
  <button
    className="
      absolute right-0 top-0 h-full
      px-4
      bg-gray-100
      border-l
      border-gray-300
      flex items-center justify-center
    "
  >
    <Search size={18} className="text-gray-600" />
  </button>
</Link>
  </div>
</div> */}

{/* MOBILE SEARCH BAR */}
<div className="md:hidden px-4 pb-6">
  <div className="relative group">
    {/* INPUT FIELD */}
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="
          w-full
          bg-gray-50
          border-transparent
          focus:bg-white
          focus:ring-2
          focus:ring-black/5
          focus:border-gray-300
          rounded-2xl
          py-3
          pl-12
          pr-4
          text-sm
          transition-all
          duration-300
          placeholder:text-gray-400
          outline-none
          shadow-sm
        "
      />
      {/* SEARCH ICON (LEFT) */}
      <div className="absolute left-4 pointer-events-none">
        <Search size={18} className="text-gray-400 group-focus-within:text-black transition-colors" />
      </div>
      
      {/* OPTIONAL: CLEAR BUTTON */}
      {searchQuery && (
        <button 
          onClick={() => setSearchQuery("")}
          className="absolute right-4 text-gray-400 hover:text-black"
        >
          <span className="text-xs underline uppercase tracking-widest font-bold">Clear</span>
        </button>
      )}
    </div>

    {/* SEARCH RESULTS */}
    {searchQuery && !searchLoading && (
      <div
        className="
          absolute
          z-50
          left-0
          right-0
          bg-white/90
          backdrop-blur-md
          rounded-2xl
          mt-3
          max-h-[60vh]
          overflow-y-auto
          shadow-2xl
          border border-gray-100
          animate-in fade-in slide-in-from-top-2
          duration-200
        "
      >
        {searchResults.length === 0 ? (
          <div className="px-6 py-10 text-center">
            <p className="text-sm text-gray-500">No products match your search.</p>
          </div>
        ) : (
          <div className="p-2">
            <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Top Results
            </p>
            {searchResults.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.id}`}
                onClick={() => setSearchQuery("")}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={item.mainImage}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900 line-clamp-1">{item.name}</span>
                  <span className="text-sm font-semibold text-blue-600">
                    ₹{Number(item.price).toLocaleString("en-IN")}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    )}
  </div>
</div>


      {/* Mobile Menu */}
<AnimatePresence>
  {open && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="md:hidden overflow-hidden border-t bg-white px-6"
    >
      <div className="py-4 space-y-4">
        {menuList.map((item, index) => (
          <div key={index}>
            {/* MAIN ITEM */}
            <div
              className="flex justify-between items-center text-sm font-medium"
              onClick={() => {
                if (item.dropdown) {
                  setActiveDropdown(
                    activeDropdown === index ? null : index
                  );
                } else {
                  setOpen(false); // ✅ CLOSE MENU
                  setActiveDropdown(null);
                }
              }}
            >
              <Link
                href={item.link}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>

              {item.dropdown && <ChevronDown size={16} />}
            </div>

            {/* DROPDOWN */}
            <AnimatePresence>
              {item.dropdown && activeDropdown === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 ml-4 space-y-2 overflow-hidden"
                >
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.link}
                      className="block text-sm text-gray-600"
                      onClick={() => {
                        setOpen(false);
                        setActiveDropdown(null);
                      }}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
        <Link href={"/store-locator"} onClick={()=>{
            setOpen(false);
                        setActiveDropdown(null);
        }}>
        Store Locator
        </Link>
      </div>
    </motion.div>
  )}
</AnimatePresence>


    </header>
  );
}
