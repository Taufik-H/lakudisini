import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Hero />
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
