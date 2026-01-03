"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, User, ShoppingCart, ChevronDown, Menu, X , Mail,
  Phone,
  Instagram,
  Facebook,
  Globe,} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
      dropdown: [{ name: "Our Blog", link: "/support/our-blog" }],
    },
    {
      name: "Contact Us",
      link: "/contact",
      dropdown: [
        { name: "WhatsApp", link: "/contact/whats-app" },
        { name: "Track Order", link: "/contact/track-order" },
      ],
    },
  ];

  return (
    <header className="w-full border-b bg-white z-40">
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
      <div className="flex items-center gap-4">
        <Link
          href="https://instagram.com"
          target="_blank"
          className="hover:text-gray-300"
        >
          <Instagram size={16} />
        </Link>

        <Link
          href="https://google.com"
          target="_blank"
          className="hover:text-gray-300"
        >
          <Globe size={16} />
        </Link>

        <Link
          href="https://facebook.com"
          target="_blank"
          className="hover:text-gray-300"
        >
          <Facebook size={16} />
        </Link>
      </div>

    </div>
  </div>
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between z-40">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
        <img src="logo.png" alt="" height={120} width={210}/>
        </Link>

        {/* Desktop Menu */}
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
      absolute left-0 top-full
      mt-3
      w-64
      z-50
      border border-gray-200
      bg-white
      shadow-sm
      opacity-0
      invisible
      group-hover:visible
      group-hover:opacity-100
      transition-opacity
      duration-150
      before:absolute
      before:-top-4
      before:left-0
      before:h-4
      before:w-full
      before:content-['']
    "
  >
    {item.dropdown.map((subItem, subIndex) => (
      <li key={subIndex}>
        <Link
          href={subItem.link}
          className="
            block
            px-8
            py-5
            text-sm
            uppercase
            tracking-wide
            text-black
            hover:text-black
          "
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

        {/* Icons */}
        <div className="hidden md:flex items-center gap-5">
          <Link href="/search">
            <Search size={20} />
          </Link>
          <Link href="/account">
            <User size={20} />
          </Link>
          <Link href="/cart" className="relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white px-6 py-4 space-y-4">
          {menuList.map((item, index) => (
            <div key={index}>
              <div
                className="flex justify-between items-center text-sm font-medium"
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === index ? null : index
                  )
                }
              >
                <Link href={item.link}>{item.name}</Link>
                {item.dropdown && <ChevronDown size={16} />}
              </div>

              {/* Mobile Dropdown */}
              {item.dropdown && activeDropdown === index && (
                <div className="mt-2 ml-4 space-y-2">
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.link}
                      className="block text-sm text-gray-600"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Icons */}
          <div className="flex gap-6 pt-4 border-t">
            <Link href="/search">
              <Search size={20} />
            </Link>
            <Link href="/account">
              <User size={20} />
            </Link>
            <Link href="/cart">
              <ShoppingCart size={20} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
