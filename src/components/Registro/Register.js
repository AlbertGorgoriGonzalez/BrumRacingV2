import React, { useState, useEffect, useRef } from "react";
import Logo from '../../assets/images/Logo.png';
import RegisterForm from './Form';
import { Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../../context/usuarioContext";
import { parseBackendError } from "../../assets/utils/helper";
import {useTranslation} from 'react-i18next';
import Swal from "sweetalert2";

export default function SignUp() {

  const [validationForm, setValidationForm] = useState(false);
  const [bValid, setBValid ] = useState(false)
  const {signUpRegister, userInfo} = useUser();
  const navigate = useNavigate();

  const [t, i18n] = useTranslation("global");

  const navToInfo = () => {
    navigate('/userInfo');
  }

  const validateForm = (oData) => {
    const emailValidation = validateEmail(oData.email);
    const pwdValidation = new RegExp('^[0-9a-zA-Z]{5,}$');
    const pwdToValidate = oData.password.replace(/ /g, "");

    let bValidPwd = true;
    let bValid = true;

    if(!oData.username){
      bValid = false;
    }

    if(!oData.name){
      bValid = false;
    }

    if(!oData.surname){
      bValid = false;
    }

    if(pwdValidation.test(pwdToValidate)){
      bValidPwd = false;
    }

    return {emailValidation, bValidPwd, bValid}
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (oForm) => {
      setValidationForm(false);

      let oFormvalidation = validateForm(oForm)

      if(oFormvalidation.bValid && oFormvalidation.bValidPwd && oFormvalidation.emailValidation){
        let response = await signUpRegister(oForm);

        if(response === true){
          Swal.fire(
            t("registered"),
            t("userRegister"),
            'success'
          )
          navToInfo()
        }else{
          parseBackendError(response)
          
        }
      }else if(!oFormvalidation.emailValidation){
        Swal.fire(
          t("emailErr"),
          t("userEmailErr"),
          'error'
        )
      }else if(!oFormvalidation.bValidPwd){
        Swal.fire(
          t("pwdErr"),
          t("userPwdErr"),
          'error'
        )
      }else{
        Swal.fire(
          t("fieldsErr"),
          t("userFieldsErr"),
          'error'
        )
      }
  }



  return(
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src={Logo} alt="Workflow" />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
      {t("register.registerbrumbrum")}
      </h2>
    </div>
    <RegisterForm isValidating={validationForm} onSubmitForm={handleSubmit}/>
  </div>
</div>
  );
}