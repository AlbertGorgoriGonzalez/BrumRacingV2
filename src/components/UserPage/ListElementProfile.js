import React, { useState, useEffect } from "react";
import HeaderSection from "../Utils/HeaderSection";

export default function ListElementProfile(props) {
  return (
    <li>
      <a
        href={props.item.href}
        className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
      >
        <span className="text-gray-600">
          <svg
            className="h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={props.item.imgSvg}
            />
          </svg>
        </span>
        <span>{props.item.name}</span>
      </a>
    </li>
  );
}
