import React, { useState, useEffect } from "react";
import ElementTable from './ElementsTable';


export default function Table(props) {
    const nRows = 10;
  return(
    <table className="w-full">
        <thead>
          <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
            <th className="px-4 py-3">Jugador</th>
            <th className="px-4 py-3">Tiempo</th>
            <th className="px-4 py-3">Ciruito</th>
            <th className="px-4 py-3">Fecha</th>
          </tr>
        </thead>
        <tbody className="bg-white">
        <ElementTable />
        <ElementTable />
        <ElementTable />
        <ElementTable />
        </tbody>
      </table>
  );
}