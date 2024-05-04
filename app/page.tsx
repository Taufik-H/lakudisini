import Divider from "@/components/sections/divider";
import Hero from "@/components/sections/hero";
import Marque from "@/components/sections/marque";
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
