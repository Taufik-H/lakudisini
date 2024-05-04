import React from "react";
import SectionBadge from "../section-badge";
import Image from "next/image";
import SectionTitle from "../section-title";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <section className="max-container padding-container my-20">
      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-tr from-blue-700 to-sky-500 p-10">
        <Image
          src={"/images/contactimage.png"}
          fill
          alt="image contact belidisini"
          className="  -z-0 object-cover object-center"
        />
        <div className="z-10 flex flex-col items-center justify-center text-center">
          <SectionBadge text="Hubungi Kami" />
          <SectionTitle>
            <div className=" text-center leading-normal">
              Hubungi kami untuk pertanyaan lain atau kolaborasi
            </div>
          </SectionTitle>
          <p>
            Silahkan hubungi kami melalui{" "}
            <span className="font-bold">WhatsApp</span>{" "}
          </p>
          <Button
            size={"lg"}
            className="mt-5 flex items-center  gap-3 rounded-xl bg-teal-500 font-bold text-white hover:bg-teal-700"
          >
            Whatsapp
            <Image
              src={"/images/wa.svg"}
              width={20}
              height={20}
              alt="contact lakudisini"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;