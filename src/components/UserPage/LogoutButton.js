import React, { useState, useEffect } from "react";
import HeaderSection from "../Utils/HeaderSection";
import {useTranslation} from 'react-i18next';

export default function LogoutButton(props) {

  const [t] = useTranslation("global");

    const {logout, loginNavigation} = props

  const infoLogout = {
    "name": "logout",
    "href": "#",
    "imgSvg": "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
  }
  const onPressLogout = () => {
    loginNavigation()
    logout()
  }
  return (
    <li onClick={onPressLogout}>
      <a
        href={infoLogout.href}
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
              d={infoLogout.imgSvg}
            />
          </svg>
        </span>
        <span>{t(infoLogout.name)}</span>
      </a>
    </li>
  );
}
