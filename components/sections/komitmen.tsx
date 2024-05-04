import React from "react";
import SectionBadge from "../section-badge";
import SectionTitle from "../section-title";
import KomitmenItem from "../komitmen-item";

const Komitmen = () => {
  return (
    <section className="max-container padding-container my-10">
      <div>
        <SectionBadge text="Komitmen kami" />
        <SectionTitle>komitmen yang kami berikan</SectionTitle>
        <div className="my-10">
          <KomitmenItem />
        </div>
      </div>
    </section>
  );
};

export default Komitmen;
