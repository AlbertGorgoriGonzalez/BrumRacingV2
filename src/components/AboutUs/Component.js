import React, { useState, useEffect } from "react";
import CardEmployee from "./CardEmployee";
import HeaderSection from "../Utils/HeaderSection";
import imgAlbert from '../../assets/images/AlbertGorgori.jpg';

export default function AboutUs() {
  const DevelopmentTeam = [{
    name: "Albert",
    username: "Gorgori",
    position: "Manager Development",
    description: "Generar el mejor entretenimiento para los amantes y apasionados de los videojuegos de carreras",
    profileImg: imgAlbert,
    instagramURL: "https://www.instagram.com/albert.gorgori/",
    linkedinUrl: "https://www.linkedin.com/in/albert-gorgori-436a24115/"
  },{
    name: "Albert",
    username: "Gorgori",
    position: "Manager Development",
    description: "Generar el mejor entretenimiento para los amantes y apasionados de los videojuegos de carreras",
    profileImg: imgAlbert,
    instagramUrl: "https://www.instagram.com/albert.gorgori/",
    linkedinUrl: "https://www.linkedin.com/in/albert-gorgori-436a24115/"
  },
  {
    name: "Albert",
    username: "Gorgori",
    position: "Manager Development",
    description: "Generar el mejor entretenimiento para los amantes y apasionados de los videojuegos de carreras",
    profileImg: imgAlbert,
    instagramUrl: "https://www.instagram.com/albert.gorgori/",
    linkedinUrl: "https://www.linkedin.com/in/albert-gorgori-436a24115/"
  },
  {
    name: "Albert",
    username: "Gorgori",
    position: "Manager Development",
    description: "Generar el mejor entretenimiento para los amantes y apasionados de los videojuegos de carreras",
    profileImg: imgAlbert,
    instagramUrl: "https://www.instagram.com/albert.gorgori/",
    linkedinUrl: "https://www.linkedin.com/in/albert-gorgori-436a24115/"
  }];
  const TextHeader = {
    headerText: "Development Team",
    subheaderText: "Conoce a los integrantes del equipo y de la empresa"

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
                {
                    DevelopmentTeam.map( oMember => {
                        return <CardEmployee member={oMember} />
                    })

                }
              
            </div>
          </div>
        </div>
      </dh-component>
    </div>
  );
}
