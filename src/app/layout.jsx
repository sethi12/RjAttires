// import "./globals.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="antialiased flex flex-col min-h-screen">
//         <Header />
        
//         {/* Page Content */}
//         <main className="flex-grow">
//           {children}
//         </main>

//         <Footer />
//       </body>
//     </html>
//   );
// }
// import "./globals.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-poppins",
// });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${poppins.className} antialiased`}>
//         <Header />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }


"use client"
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Poppins } from "next/font/google";
import { CartProvider } from "./context/CartContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

