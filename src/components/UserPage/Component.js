import React, { useState, useEffect } from "react";

import imgAlbert from '../../assets/images/AlbertGorgori.jpg';

import ListElementProfile from "./ListElementProfile";

import Items from './Items.json'

export default function UserPage() {

    const TextHeader = {
        headerText: "",
        subheaderText: "User Info"
    
      }
  
  return (
    <div className="mb-16">
    <dh-component>
      
      <div className="flex flex-wrap bg-gray-100 w-full h-screen">
    <div className="w-3/12 bg-white rounded p-3 shadow-lg">
        <div className="flex items-center space-x-4 p-2 mb-5">
            <img className="h-24 rounded-full" src={imgAlbert} alt="USERIMG" />
            <div>
                <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">Albert Gorgori</h4>
                <span className="text-sm tracking-wide flex items-center space-x-1">
                    <svg className="h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg><span className="text-gray-600">Administrator</span>
                </span>
            </div>
        </div>
        <ul className="space-y-2 text-sm">
            {
                Items.map( oItem => {
                    return <ListElementProfile item={oItem} />
                })
            }
        </ul>
    </div>

    <div className="w-9/12">
        <div className="p-4 text-gray-500">
            Content here...
        </div>
    </div>
</div>
      
    </dh-component>
  </div>
  );
}
