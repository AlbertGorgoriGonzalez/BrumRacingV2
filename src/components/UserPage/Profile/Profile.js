import React, { useState, useEffect } from "react";
import HeaderSection from "../../Utils/HeaderSection";
import FormData from "./Form.js";
import ModelHandler from "../../../model/ModelHandler";
import "./form.css";
import Swal from 'sweetalert2'
import {useTranslation} from 'react-i18next';
import { useUser } from "../../../context/usuarioContext";
export default function Profile(props) {
  
  const [t] = useTranslation("global");

  const TextHeader = {
    headerText: "",
    subheaderText: t("profile.myProfile"),
  };

  const {userInfo} = props;

  const {updateUser, deleteUser} = useUser();

  const handleSubmit = async (event, oForm) => {
    const response = await updateUser(oForm, userInfo.id);

    if(response === true){
      Swal.fire(
        t("updateok"),
        t("userUpdated"),
        'success'
      )
    }else{
      Swal.fire(
        t("updatedErr"),
        t("updatedUserErr"),
        'error'
      )
    }
    
  }

  

  return (
    <>
    <div className="mb-16">
      <dh-component>
        <div className="container flex justify-center mx-auto pt-16 titleWidth">
          <HeaderSection text={TextHeader} />
        </div>
        <div className="w-full bg-gray-100 px-10 pt-10">
          <div className="container mx-auto">
            <div
              role="list"
              aria-label="Behind the scenes People "
              className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
            >
              <FormData onSubmitForm={handleSubmit} deleteUser={deleteUser} userInfo={userInfo} />
            </div>
            <br></br>
            
          </div>
        </div>
      </dh-component>
    </div>
    </>
  );
}
