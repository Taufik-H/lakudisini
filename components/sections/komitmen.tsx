import React from "react";
import SectionBadge from "../section-badge";
import SectionTitle from "../section-title";
import KomitmenItem from "../komitmen-item";
import { KOMITMEN } from "@/constant";

const Komitmen = ({ id }: { id: string }) => {
  return (
    <section id={id} className="max-container padding-container my-10">
      <div className="flex flex-col items-center lg:items-start">
        <SectionBadge text="Komitmen kami" />
        <SectionTitle>komitmen yang kami berikan</SectionTitle>
        <div className="my-10">
          {KOMITMEN.map((k, index) => (
            <KomitmenItem
              key={index}
              komitmen={k.komitmen}
              description={k.description}
              number={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Komitmen;
