import React, { useState, useEffect } from "react";
import ElementTable from './ElementsTable';


export default function Table(props) {
  
    const nRows = 10;
  return(
    <table class="w-full">
        <thead>
          <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
            <th class="px-4 py-3">Name</th>
            <th class="px-4 py-3">Age</th>
            <th class="px-4 py-3">Status</th>
            <th class="px-4 py-3">Date</th>
          </tr>
        </thead>
        <tbody class="bg-white">

        <ElementTable />
        <ElementTable />
        <ElementTable />
        <ElementTable />
        </tbody>
      </table>
  );
}