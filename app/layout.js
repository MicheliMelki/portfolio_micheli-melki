import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Micheli Melki | Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
