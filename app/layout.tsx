import type { Metadata } from "next";
import { Inter, Montserrat, Open_Sans, Petrona } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });
export const montserrat = Montserrat({ subsets: ["latin"] });
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// Import the new fonts
export const petrona = Petrona({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sabbir Nasir",
  description: "Success Doesn't Happen Without Strategy",
  metadataBase: new URL("https://sabbir-nasir.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Providers>
          <Navbar />
          <main className="overflow-x-hidden">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
