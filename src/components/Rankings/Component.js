import React, { useState, useEffect } from "react";
import HeaderSection from "../Utils/HeaderSection";
import RankingTable from "./Table";
import Filter from "./FilterSelector";
import { useTranslation } from "react-i18next";
import { getTopLaps, getUserInfo } from "../../model/ModelTimer";

export default function Rankings(props) {
  const [t, i18n] = useTranslation("global");
  const [bestLaps, setBestLaps] = useState([]);
  const TextHeader = {
    headerText: "",
    subheaderText: t("header.rankings"),
  };

  useEffect(() => {
    const fetchCircuits = async () => {
      const data = await getTopLaps({
        map: "Escena_Ciudad",
        size: 5,
      });

      setBestLaps(data.data);
      
    };
    fetchCircuits();
  }, []);

  const onChangeCircuit = async (sCircuit) => {
      let { data } = await getTopLaps({
        map: sCircuit,
        size: 5
      });

      if(sCircuit === 'Circuito1_Monaco_DoublePlayer'){
        const { data: dataSingle } = await getTopLaps({
          map: 'Circuito1_Monaco_SinglePlayer',
          size: 5
        });

        data =  data.concat(dataSingle)

        data = data.sort(function(a, b) {
          return a.time - b.time;
        })
      }

        
      setBestLaps(data)
  }


  return (
    <div className="mb-16">
      <dh-component>
        <div className="container flex justify-center mx-auto pt-16">
          <HeaderSection text={TextHeader} />
        </div>
        <div>
          <Filter change={onChangeCircuit}/>
        </div>
        <section className="container mx-auto p-6 font-mono">
          <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
              <RankingTable arrayLaps={bestLaps} />
            </div>
          </div>
        </section>
      </dh-component>
    </div>
  );
}
