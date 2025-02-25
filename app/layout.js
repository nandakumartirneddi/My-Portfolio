import "./globals.css";
import Navbar from "./components/Navbar"; // ✅ Ensure Navbar is imported

export const metadata = {
  title: "My Portfolio",
  description: "A modern portfolio built with Next.js 13+",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0f172a] text-white min-h-screen">
        {/* ✅ Navbar is now part of the layout and does not interfere with scrolling */}
        <Navbar />

        {/* ✅ This div ensures the navbar does not overlap sections */}
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}