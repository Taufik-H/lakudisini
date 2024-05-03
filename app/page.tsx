import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto my-20">
        <h1 className="text-center text-4xl font-bold">DEVELOPING</h1>
        <p className="mt-5 text-center">
          Website ini sedang dalam tahap pengembangan. Terima kasih atas
          pengertian Anda.🙏
        </p>
      </div>
    </>
  );
}
