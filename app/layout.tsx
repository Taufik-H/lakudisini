import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/sections/footer";

const JakartaPlus = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    title: "LakuDisini",
    description:
      "Agency yang menyediakan jasa membantu penjualan dengan tujuan menaikan dari omset patner",
    url: "https://lakudisini.com",
    siteName: "LakuDisini",
    locale: "Id",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
