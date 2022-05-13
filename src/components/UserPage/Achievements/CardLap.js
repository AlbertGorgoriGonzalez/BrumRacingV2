import React, { useState, useEffect } from "react";
import {useTranslation} from 'react-i18next';
import imgMonaco from '../../../assets/images/Flag_of_Monaco.svg.png';
import imgCiudad from '../../../assets/images/ciudad.jpg';

export default function CardLap(props) {

    const [t] = useTranslation("global");
    const [imagenCircuito, setImagen ] = useState()
    

    const {bestLap, userInfo} = props;


    useEffect(() => {
        if(bestLap.Ciruit === 'Escena_Ciudad'){
            setImagen(imgCiudad)
        }else{
            setImagen(imgMonaco)
        }
      }, []);

  return(
    <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src={imagenCircuito} alt="Display Picture of Johnson Stone" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h3 className="font-bold text-1xl text-center mb-1">{t("circuit")}: {bestLap.map}</h3>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">{t("time")}: {bestLap.time}</p>
                                    </div>
                                </div>
                            </div>
  );
}