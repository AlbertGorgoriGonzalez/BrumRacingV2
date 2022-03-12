import React, { useState, useEffect } from "react";
import HeaderSection from "../../Utils/HeaderSection";
import FormData from "./Form.js";
import ModelHandler from "../../../model/ModelHandler";
import "./form.css";
import Swal from 'sweetalert2'
export default function Profile(props) {
  const TextHeader = {
    headerText: "",
    subheaderText: "My Profile",
  };

  const {userInfo} = props

  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (oForm) => {
    ModelHandler.updateProfile(oForm, 
      (oResponse)=>{

    }, (oError)=> {

    })
  }

  const showModalDelete = () => {
    Swal.fire({
      title: 'Borrar Usuario',
      text: "¿Quieres borrar tu usuario?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#000000',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        ModelHandler.updateProfile(userInfo.id, 
          (oResponse)=>{
            Swal.fire(
              'Borrado!',
              'Tu usuario ha sido borrado',
              'success'
            )
        }, (oError)=> {
    
        })
      }
    })
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
              <FormData onSubmitForm={handleSubmit} userInfo={userInfo} showModal={showModalDelete}/>
            </div>
            <br></br>
            <button
        onClick={showModalDelete}
        className="buttonClass bg-red-500 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Borrar
      </button>
          </div>
        </div>
      </dh-component>
    </div>
    </>
  );
}
