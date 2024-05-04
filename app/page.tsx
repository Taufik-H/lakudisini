import Contact from "@/components/sections/contact";
import Divider from "@/components/sections/divider";
import Hero from "@/components/sections/hero";
import Komitmen from "@/components/sections/komitmen";
import Marque from "@/components/sections/marque";
import Parallax from "@/components/sections/parallax";
import Services from "@/components/sections/services";
import TentangKami from "@/components/sections/tentang-kami";

export default function Home() {
  return (
    <>
      <Hero />
      <Marque />
      <TentangKami />
      <Divider />
      <Services />
      <Komitmen />
      <Parallax />
      <Contact />
    </>
  );
}
