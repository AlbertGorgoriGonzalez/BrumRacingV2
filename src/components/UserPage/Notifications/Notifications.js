import React, { useState, useEffect } from "react";
import HeaderSection from "../../Utils/HeaderSection";

export default function Notifications() {

    const TextHeader = {
        headerText: "",
        subheaderText: "Notifications"
    
      }
  
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
            
          </div>
        </div>
      </div>
    </dh-component>
  </div>
  );
}
