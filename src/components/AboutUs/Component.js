import React, { useState, useEffect } from "react";
import CardEmployee from "./CardEmployee";
import HeaderSection from "../Utils/HeaderSection";
import imgAlbert from '../../assets/images/AlbertGorgori.jpg';
import imgBeimar from '../../assets/images/BeimarTorrez.jpg';
import imgMarc from '../../assets/images/MarcMartinez.jpg';

export default function AboutUs() {
  const DevelopmentTeam = [{
    name: "Albert",
    username: "Gorgori",
    position: "Senior Front-End Developer",
    description: "Generar el mejor entretenimiento para los amantes y apasionados de los videojuegos de carreras",
    profileImg: imgAlbert,
    instagramURL: "https://www.instagram.com/albert.gorgori/",
    linkedinUrl: "https://www.linkedin.com/in/albert-gorgori-436a24115/"
  },{
    name: "Miquel",
    username: "Lopez",
    position: "Senior Back-End Developer",
    description: "Vivo el mundo de las carreras con mucha pasión, juntarlo con mi trabajo ha sido la mejor experiéncia de mi vida",
    profileImg: imgAlbert,
    instagramUrl: "https://www.instagram.com/miqueel97/",
    linkedinUrl: "https://www.linkedin.com/in/miquel-l%C3%B3pez-139246182/"
  },
  {
    name: "Marc",
    username: "Martínez",
    position: "Junior Unity Developer",
    description: "Es mágnifico el mundo de las carreras, este juego va a ser un éxito mundial",
    profileImg: imgMarc,
    instagramUrl: "https://www.instagram.com/marc_martinez012/",
    linkedinUrl: "https://www.linkedin.com/in/marc-mart%C3%ADnez-morales-635427226/"
  },
  {
    name: "Beimar",
    username: "Torrez",
    position: "Junior C# Developer",
    description: "El juego está diseñado para disfrutar cada curva, no va a defraudar",
    profileImg: imgBeimar,
    instagramUrl: "https://www.instagram.com/beimartorrz/",
    linkedinUrl: "https://www.linkedin.com/in/beimar-torrez-10229620a/"
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
