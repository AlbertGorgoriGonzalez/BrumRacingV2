import React, { useState, useEffect } from "react";
import Achiv from "./Achievements/Achiv";
import Notifications from "./Notifications/Notifications";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";

export default function UserRoutes(props) {

  const {profile, settings, achiv, notifications, userInfo } = props;
    

  return (
      <>
      {profile &&
        <Profile userInfo={userInfo}/>
      }
      {settings &&
        <Settings userInfo={userInfo}/>
      }
      {achiv &&
        <Achiv userInfo={userInfo}/>
      }
      {notifications &&
        <Notifications userInfo={userInfo}/>
      }
      
      </>
  );
}
