import React, { useState, useEffect } from "react";
import HeaderSection from "../../Utils/HeaderSection";
import {useTranslation} from 'react-i18next';
import { getLap } from "../../../model/ModelTimer";
import { useUser } from "../../../context/usuarioContext";
import CardLap from "./CardLap";

export default function Achiv() {


  const [t] = useTranslation("global");
    const TextHeader = {
        headerText: "",
        subheaderText: t("profile.myLaps")
    
      }
    const [bestLap, setBestLap] = useState(null)
    const {userInfo} = useUser()

      useEffect(() => {
        const fetchlap = async () => {
          const { data } = await getLap(userInfo.id.toString());
          if(data[0]){
            setBestLap(data[0])
          }
        };
        fetchlap();
      }, []);
  
  return (
    <div className="mb-16">
    <dh-component>
      <div className="container flex justify-center mx-auto pt-16">
        <HeaderSection text={TextHeader}/>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div
            role="list"
            aria-label="Behind the scenes People "
            className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
          >
          {bestLap &&
            <CardLap bestLap={bestLap} userInfo={userInfo}/>
          }
          {!bestLap &&
            <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">{t("noLaps")}</h1>
          }
          </div>
        </div>
      </div>
    </dh-component>
  </div>
  );
}
