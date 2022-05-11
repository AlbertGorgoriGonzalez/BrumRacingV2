import React, { useState, useEffect } from "react";
import HeaderSection from "../Utils/HeaderSection";
import RankingTable from "./Table";
import Filter from "./FilterSelector";
import {useTranslation} from 'react-i18next';

export default function Rankings(props) {
  const [t, i18n] = useTranslation("global");
  const TextHeader = {
    headerText: "",
    subheaderText: t("header.rankings"),
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
