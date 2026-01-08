"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ChevronDown } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const { isOpen, setIsOpen, cartItems, removeFromCart,updateQuantity } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const totalMrp = cartItems.reduce(
    (sum, item) => sum + (item.mrp || item.price) * (item.quantity || 1),
    0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* DRAWER */}
          <motion.div
            className="
              fixed top-0 right-0 h-full
              w-[calc(100%-30px)]
              sm:w-[420px]
              bg-white z-[9999]
              flex flex-col
              rounded-l-2xl
            "
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <h2 className="text-[22px] font-medium">Cart</h2>
              <button onClick={() => setIsOpen(false)}>
                <X size={22} />
              </button>
            </div>

            {/* CONTENT */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
              {cartItems.length === 0 && (
                <p className="text-gray-500">Your cart is empty</p>
              )}

              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  {/* IMAGE */}
                  <img
                    src={item.mainImage}
                    alt={item.name}
                    className="w-[90px] h-[130px] object-cover"
                  />

                  {/* DETAILS */}
                  <div className="flex-1">
                    <p className="text-[16px] leading-snug mb-2">
                      {item.name}
                    </p>

                    <div className="flex items-center gap-3 mb-2">
                      {item.mrp && (
                        <span className="line-through text-gray-400 text-sm">
                          ₹{item.mrp.toLocaleString("en-IN")}
                        </span>
                      )}
                      <span className="text-[18px] font-medium">
                        ₹{item.price.toLocaleString("en-IN")}
                      </span>
                      {item.discount && (
                        <span className="text-red-500 text-sm">
                          {item.discount}% off
                        </span>
                      )}
                    </div>

                    {/* {item.size && (
                    //   <p className="text-sm mb-4">
                    //     <span className="font-medium">Size:</span> {item.size}
                    //   </p>
                    )} */}

                    <div className="flex items-center justify-between">
                      {/* QUANTITY */}
 <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
  <button
    onClick={() => updateQuantity(item.id, "dec")}
    className="px-3 py-2 text-lg hover:bg-gray-100 transition"
  >
    −
  </button>

  <span className="px-4 py-2 text-sm font-medium min-w-[32px] text-center">
    {item.quantity}
  </span>

  <button
    onClick={() => updateQuantity(item.id, "inc")}
    className="px-3 py-2 text-lg hover:bg-gray-100 transition"
  >
    +
  </button>
</div>


                      {/* REMOVE */}
                      <button onClick={() => removeFromCart(item.id)}>
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* TOTALS */}
            {cartItems.length > 0 && (
              <div className="border-t px-6 py-6 space-y-3">
                <div className="flex justify-between text-sm tracking-widest">
                  <span>TOTAL MRP</span>
                  <span className="line-through">
                    ₹{totalMrp.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between text-lg font-medium">
                  <span>SUBTOTAL</span>
                  <span>
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            )}

            {/* PLACE ORDER */}
            {cartItems.length > 0 && (
              <button className="bg-[#6A1B6D] text-white py-1 text-[14px] tracking-widest flex items-center justify-center ">
                PLACE ORDER
                <img src="/paytm.jpg" className="h-6 rounded-2xl" />
                <img src="/phonepe.jpeg" className="h-6 rounded-2xl" />
                <img src="/gpay.png" className="h-6 rounded-3xl" />
                <span className="text-xl">›</span>
              </button>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
