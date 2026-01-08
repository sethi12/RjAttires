"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import CartDrawyer from "./CartDrawyer";

function CartIcon() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CART ICON */}
      <button
        onClick={() => setOpen(true)}
        className="relative"
        aria-label="Open cart"
      >
        <ShoppingCart size={20} />
      </button>

      {/* CART DRAWER */}
      <CartDrawyer
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default CartIcon;
