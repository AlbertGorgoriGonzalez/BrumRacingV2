import React, { useState, useEffect } from "react";
import imgBeimar from '../../assets/images/user-icon-placeholder.png';

export default function ElementTable(props) {
  const TextHeader = {
    headerText: "",
    subheaderText: "Rankings"

  }

  const {item} = props
    
  return(
    
          <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img className="object-cover w-full h-full rounded-full" src={imgBeimar} alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold text-black">{item.user}</p>
                  <p className="text-xs text-gray-600"></p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-ms font-semibold border">{parseFloat(item.time, 2)}s</td>
            <td className="px-4 py-3 text-xs border">
              {item.map}
            </td>
            <td className="px-4 py-3 text-sm border">{item.created_at}</td>
          </tr>
          
  );
}