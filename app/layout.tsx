import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/sections/footer";

const JakartaPlus = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LakuDisini",
  metadataBase: new URL("https://lakudisini.com"),
  description:
    "Agency yang menyediakan jasa membantu penjualan dengan tujuan menaikan dari omset patner",
  keywords: "agency, marketing, marketplace, omset",
  openGraph: {
    title: "LakuDisini",
    description:
      "Agency yang menyediakan jasa membantu penjualan dengan tujuan menaikan dari omset patner",
    url: "https://lakudisini.com",
    siteName: "LakuDisini",
    images: [
      {
        url: "https://raw.githubusercontent.com/lakudisini/lakudisini-landingpage/main/app/opengraph-image.png",
        width: 1200,
        height: 600,
      },
    ],
    locale: "ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body className={JakartaPlus.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
