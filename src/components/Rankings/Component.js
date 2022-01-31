import React, { useState, useEffect } from "react";
import HeaderSection from "../Utils/HeaderSection";
import RankingTable from "./Table";

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
        <div></div>
        <section class="container mx-auto p-6 font-mono">
          <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div class="w-full overflow-x-auto">
              <RankingTable />
            </div>
          </div>
        </section>
      </dh-component>
    </div>
  );
}
