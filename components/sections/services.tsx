import React from "react";
import { Badge } from "../ui/badge";
import CardServices from "../card-service";
import { MonitorPlay, ShoppingBag, Zap } from "lucide-react";

const Services = () => {
  return (
    <div className="max-container padding-container">
      <div className="mt-5 flex  w-full flex-col  items-center justify-center">
        <Badge variant={"lakudisini"} className="mb-5 w-fit ">
          Layanan Kami
        </Badge>

        <h2 className="text-center text-3xl font-black capitalize  lg:text-[48px]">
          <span>Yang</span>
          <span className="mx-2 bg-gradient-to-tr from-blue-700 to-cyan-300 bg-clip-text text-transparent">
            Lakudisini
          </span>
        </h2>
        <h2 className="text-center text-3xl font-black capitalize  lg:text-[48px]">
          Tawarkan
        </h2>
        {/* card */}
        <div className="my-10 grid gap-5 md:grid-cols-3">
          <CardServices
            title="Optimasi Marketplace"
            description="Kami menawarkan layanan optimasi MP yang komprehensif untuk meningkatkan  visibilitas dan penjualan produk Anda di berbagai platform online."
            icon={<ShoppingBag size={60} />}
          />
          <CardServices
            isCenter={true}
            title="Full Live 24 Jam"
            description="Kami menyediakan layanan full live 24 jam untuk memberikan dukungan dan bantuan sepanjang waktu kepada pelanggan kami."
            icon={<MonitorPlay size={60} />}
          />
          <CardServices
            title="Jasa CPAS"
            description="Kami menawarkan jasa CPAS yang dapat membantu Anda mengelola dan  mengoptimalkan program afiliasi Anda untuk mendapatkan pengembalian  investasi yang maksimal."
            icon={<Zap size={60} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
