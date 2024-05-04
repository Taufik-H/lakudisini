"use client";
import Divider from "@/components/sections/divider";
import Hero from "@/components/sections/hero";
import Komitmen from "@/components/sections/komitmen";
import Marque from "@/components/sections/marque";
import Parallax from "@/components/sections/parallax";
import Services from "@/components/sections/services";
import TentangKami from "@/components/sections/tentang-kami";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Hero />
      <Marque />
      <TentangKami />
      <Divider />
      <Services />
      <Komitmen />
      <Parallax />
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-bold">DEVELOPING</h1>
        <p className="mt-5 text-center">
          Website ini sedang dalam tahap pengembangan. Terima kasih atas
          pengertian Anda.🙏
        </p>
      </div>
    </>
  );
}
