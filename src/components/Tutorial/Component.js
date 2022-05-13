import React, { useState, useEffect } from "react";
import HeaderSection from "../Utils/HeaderSection";
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';
import {useTranslation} from 'react-i18next';

export default function Tutorial() {

  const [t, i18n] = useTranslation("global");

    const TextHeader = {
        headerText: "",
        subheaderText: t("header.tutorial")//totrial and trailer
    
      }
      const opts = {
        height: '390',
        width: '600',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
      }
    const sYoutubeId = getYouTubeID("https://www.youtube.com/watch?v=0iyWnlS45BU");
    const sYoutubeId2 = getYouTubeID("https://www.youtube.com/watch?v=jW71bf-7vHc");
  
  return (
    <div className="mb-16">
    <dh-component>
      <div className="container flex justify-center mx-auto pt-16">
        <HeaderSection text={TextHeader}/>
      </div>
        <div className="container mx-auto flex justify-center">
            <YouTube videoId={sYoutubeId} opts={opts} />
            <br></br>
            <YouTube videoId={sYoutubeId2} opts={opts} />
        </div>
    </dh-component>
  </div>
  );
}
