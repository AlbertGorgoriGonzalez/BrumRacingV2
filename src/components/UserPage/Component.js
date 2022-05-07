import React, { useState, useEffect } from "react";

import imgUser from "../../assets/images/AlbertGorgori.jpg";

import ListElementProfile from "./ListElementProfile";


import { useUser } from "../../context/usuarioContext";

import Items from "./Items.json";
import UserInfoTag from "./UserInfo";
import UserRoutes from "./UserRoutes";
import {Navigate} from 'react-router-dom'
import { getToken } from "../../assets/utils/helper";

import LogoutButton from "./LogoutButton";

export default function UserPage() {
  
  const [showProfile, setShowProfile] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAchiv, setShowAchiv] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [login, setLogin] = useState(false);
  const {userInfo, logout} = useUser()

  useEffect(() => {
    if(!userInfo || !getToken()){
      setLogin(true);
    }
    }, []);

  const navigateLogin = () => {
setLogin(true)
  }

  const setVisibility = (sScreen) => {
    switch (sScreen) {
      case "My Profile":
        setShowProfile(true);
        setShowAchiv(false);
        setShowSettings(false);
        setShowNotifications(false);
        break;
      case "Notifications":
        setShowProfile(false);
        setShowAchiv(false);
        setShowSettings(false);
        setShowNotifications(true);
        break;
      case "My Achivements":
        setShowProfile(false);
        setShowAchiv(true);
        setShowSettings(false);
        setShowNotifications(false);
        break;
      case "Settings":
        setShowProfile(false);
        setShowAchiv(false);
        setShowSettings(true);
        setShowNotifications(false);
        break;
      default:
        setShowProfile(true);
        setShowAchiv(false);
        setShowSettings(false);
        setShowNotifications(false);
        setLogin(true);
        break;
    }
  };

  return (
    <>
    {userInfo && <div className="mb-16">
      <dh-component>
        <div className="flex flex-wrap bg-gray-100 w-full h-screen">
          <div className="w-3/12 bg-white rounded p-3 shadow-lg">
            <UserInfoTag imgUser={imgUser} />
            <ul className="space-y-2 text-sm">
              {Items.map((oItem) => {
                return (
                  <ListElementProfile item={oItem} visible={setVisibility} />
                );
              })}
              <LogoutButton logout={logout} loginNavigation={navigateLogin} />
            </ul>
          </div>
          <div className="w-9/12">
            <div className="p-4 text-gray-500">
              <UserRoutes
                profile={showProfile}
                notifications={showNotifications}
                achiv={showAchiv}
                settings={showSettings}
                userInfo={userInfo}
                
              />
            </div>
          </div>
        </div>
      </dh-component>
    </div>}
    <>
    {(!userInfo || login) &&
        <Navigate to={'/login'} />
      }
    </>
    </>

  );
}
