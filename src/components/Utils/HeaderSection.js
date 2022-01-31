import React, { useState, useEffect } from "react";
import imgAlbert from '../../assets/images/AlbertGorgori.jpg';


export default function HeaderSection(props) {

  const {text}=props
    
  return(
    <div>
    <p className="text-gray-500 text-lg text-center font-normal pb-3">{text.headerText}</p>
    <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">{text.subheaderText}</h1>
</div>
  );
}