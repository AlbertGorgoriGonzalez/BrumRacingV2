import React, { useState, useEffect } from "react";
import imgBeimar from '../../assets/images/BeimarTorrez.jpg';

export default function ElementTable(props) {
  const TextHeader = {
    headerText: "",
    subheaderText: "Rankings"

  }
    
  return(
    
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img className="object-cover w-full h-full rounded-full" src={imgBeimar} alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold text-black">Beimar Torrez</p>
                  <p className="text-xs text-gray-600">NeymarBeimar</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-ms font-semibold border">1.10.000</td>
            <td className="px-4 py-3 text-xs border">
              Spain
            </td>
            <td className="px-4 py-3 text-sm border">03/02/2022</td>
          </tr>
          
  );
}