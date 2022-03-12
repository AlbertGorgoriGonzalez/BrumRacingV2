import React, { useState, useEffect } from "react";
import HeaderSection from "../Utils/HeaderSection";
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';

export default function Tutorial() {

    const TextHeader = {
        headerText: "",
        subheaderText: "Tutorial"
    
      }
      const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
      }
    const sYoutubeId = getYouTubeID("https://www.youtube.com/watch?v=dbENZmcWy34")
  
  return (
    <div className="mb-16">
    <dh-component>
      <div className="container flex justify-center mx-auto pt-16">
        <HeaderSection text={TextHeader}/>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
            <YouTube videoId={sYoutubeId} opts={opts} />

        </div>
      </div>
    </dh-component>
  </div>
  );
}
