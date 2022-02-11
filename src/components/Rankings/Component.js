import React, { useState, useEffect } from "react";
import HeaderSection from "../Utils/HeaderSection";
import RankingTable from "./Table";
import Filter from "./FilterSelector";

export default function Rankings(props) {
  const TextHeader = {
    headerText: "",
    subheaderText: "Rankings",
  };

  return (
    <div className="mb-16">
      <dh-component>
        <div className="container flex justify-center mx-auto pt-16">
          <HeaderSection text={TextHeader} />
        </div>
        <div>
          <Filter/>
        </div>
        <section className="container mx-auto p-6 font-mono">
          <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
              <RankingTable />
            </div>
          </div>
        </section>
      </dh-component>
    </div>
  );
}
