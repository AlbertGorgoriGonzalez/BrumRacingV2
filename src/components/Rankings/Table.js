import React, { useState, useEffect } from "react";
import ElementTable from './ElementsTable';
import {useTranslation} from 'react-i18next';


export default function Table(props) {
  const [t, i18n] = useTranslation("global");
    const nRows = 10;
  const {arrayLaps} = props
  return(
    <table className="w-full">
        <thead>
          <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
            <th className="px-4 py-3">{t("ranking.player")}</th>
            <th className="px-4 py-3">{t("ranking.time")}</th>
            <th className="px-4 py-3">{t("ranking.circuit")}</th>
            <th className="px-4 py-3">{t("ranking.date")}</th>
          </tr>
        </thead>
        <tbody className="bg-white">
        {arrayLaps.map((oItem, keyIndex) => {
                return (
                  <ElementTable item={oItem} key={keyIndex}/>
                );
              })}
        </tbody>
      </table>
  );
}