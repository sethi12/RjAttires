import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f4f7fb]">
      {/* Top Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="rjlogoorignal.png"
                alt="RJ Attires"
                className="h-10"
              />
             
            </div>

            {/* <p className="text-gray-600 text-sm leading-relaxed">
              Rj Attires is your go-to destination for premium clothing
              that blends comfort, quality, and trendsetting designs.
            </p> */}
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>

            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex gap-3">
                <Phone size={16} />
                <span>+91 9311000666</span>
              </li>

              <li className="flex gap-3">
                <Mail size={16} />
                <span>Rooplabhatia@yahoo.com</span>
              </li>

              <li className="flex gap-3">
                <MapPin size={16} />
                <span>
                  B-191 Next To Bikaner Wala, Industrial Area Phase-1
                  <br />
                  Naraina Vihar, 110028
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-3 text-sm text-gray-600">
              {/* <li>
                <Link href="/shop" className="hover:underline">
                  Shop
                </Link>
              </li> */}
              {/* <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li> */}
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Our Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Social Media Links</h4>

            <div className="flex gap-4">
              <Link           href="https://www.instagram.com/rjattires?igsh=MTlkbTIzaGY3eGY1MA=="
          target="_blank" className="hover:opacity-70">
                <img src="/instafooter.jpg" alt=""  className="h-5 object-contain rounded-4xl" />
              </Link>
              <Link           href="https://google.com"
          target="_blank" className="hover:opacity-70">
               <img src="fbfooter.jpg" alt=""   className="h-5 object-contain rounded-3xl"/>
              </Link>
              <Link           href="https://www.facebook.com/share/1CrUyXqvNs/"
          target="_blank"className="hover:opacity-70">
                <img src="googlefooter.jpg" alt=""   className="h-5 object-contain rounded-3xl" />
              </Link>
            </div>
          </div>
                        <div>
  <h4 className="font-semibold mb-4">Payment Methods</h4>

  <div className="flex items-center gap-4 flex-wrap">
    <img
      src="/visa.jpeg"
      alt="Visa"
      className="h-5 object-contain"
    />
    <img
      src="/paytm.png"
      alt="Paytm"
      className="h-5 object-contain"
    />
    <img
      src="/mastercard.png"
      alt="Mastercard"
      className="h-5 object-contain"
    />
    <img
      src="/americanexpress.png"
      alt="American Express"
      className="h-5 object-contain"
    />
  </div>
</div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6">
        <p className="text-center text-sm text-gray-600">
          Copyright © 2026 RJ Attires | Designed by Wepromote
        </p>
      </div>
    </footer>
  );
}
