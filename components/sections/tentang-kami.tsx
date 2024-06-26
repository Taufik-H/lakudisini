import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import SectionTitle from "../section-title";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import SectionBadge from "../section-badge";
import Link from "next/link";

const TentangKami = ({ id }: { id: string }) => {
  return (
    <section id={id} className="max-container padding-container">
      <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:justify-between  ">
        <div className="w-full">
          <Image
            src={"/images/about.png"}
            width={351}
            height={484}
            alt="about lakudisini"
            className="mx-auto lg:mx-0"
          />
        </div>

        <div className="my-10 flex w-full flex-col items-center justify-center gap-3 lg:my-0 lg:items-start lg:justify-start ">
          <SectionBadge text="Tentang Kami" />
          <SectionTitle>
            Kenalan Dengan
            <span className="ml-2 bg-gradient-to-tr from-blue-700 to-cyan-300 bg-clip-text text-transparent">
              Lakudisini
            </span>
          </SectionTitle>
          <p className=" text-center text-slate-700 dark:text-white lg:w-11/12 lg:text-justify">
            Kami adalah satu-satunya agensi yang berani memberikan jaminan pasti
            laku untuk produk Anda. Di LakuDisini, kami memahami betapa
            pentingnya kesuksesan bagi bisnis Anda. Itulah mengapa kami
            menawarkan garansi omset tanpa biaya awal yang rumit. setelah tembus
            omset 100juta baru team LAKUDISINI meminta komitmen
          </p>
          <Link href={"#komitmen"}>
            <Button
              size={"lg"}
              className="mt-5 bg-blue-700 text-white hover:bg-blue-900 lg:mt-10"
            >
              Komitmen Kami <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TentangKami;
