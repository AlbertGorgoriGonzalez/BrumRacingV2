import React, { useRef, useState, useEffect } from "react";
import Loader from "react-js-loader";
import "./form.css";
import Swal from "sweetalert2";
import {useTranslation} from 'react-i18next';
import ModelHandler from "../../../model/ModelHandler";

export default function SignUp(props) {
  const { onSubmitForm, showModal, userInfo, deleteUser } = props;

  const [disabled, setDisabled] = useState(true);

  const [prevEmailInput, setPrevEmailInput] = useState(userInfo.email || "");
  const [emailInput, setEmailInput] = useState(userInfo.email || "");
  const [emailIsValid, setEmailIsValid] = useState(true);

  const [prevNameInput, setPrevNameInput] = useState(userInfo.name || "");
  const [nameInput, setNameInput] = useState(userInfo.name || "");
  const [nameIsValid, setNameIsValid] = useState(true);

  const [prevSurnameInput, setPrevSurnameInput] = useState(userInfo.surname || "");
  const [surnameInput, setSurnameInput] = useState(userInfo.surname || "");
  const [surnameIsValid, setSurnameIsValid] = useState(true);

  const [prevUsernameInput, setPrevUsernameInput] = useState(userInfo.username || "");
  const [usernameInput, setUsernameInput] = useState(userInfo.username || "");
  const [usernameIsValid, setUsernameIsValid] = useState(true);

  const [prevPwdInput, setPrevPwdInput] = useState(userInfo.password || "");
  const [pwdInput, setPwdInput] = useState(userInfo.password || "");
  const [pwdIsValid, setPwdIsValid] = useState(true);

  const patternSpaces = /^[a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/;
  const patternPwd = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  const [t] = useTranslation("global");


  let validClassName =
    "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm";

    let invalidClassName =
    "appearance-none rounded-none relative block w-full px-3 py-2 border border-red-600 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm";

  useEffect(() => {
    if (prevEmailInput === emailInput) {
      return;
    }
    const timer = setTimeout(() => {
      setPrevEmailInput(emailInput);
      setEmailIsValid(emailInput.includes("@"));
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [emailInput, prevEmailInput]);

  useEffect(() => {
    if (prevPwdInput === pwdInput) {
      return;
    }
    const timer = setTimeout(() => {
      setPrevPwdInput(pwdInput);
      setPwdIsValid(pwdInput.trim() > 5);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [pwdInput, prevPwdInput]);

  useEffect(() => {
    if (prevSurnameInput === surnameInput) {
      return;
    }
    const timer = setTimeout(() => {
      setPrevSurnameInput(surnameInput);
      setSurnameIsValid(surnameInput.length > 0);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [surnameInput, prevSurnameInput]);

  useEffect(() => {
    if (prevNameInput === nameInput) {
      return;
    }
    const timer = setTimeout(() => {
      setPrevNameInput(nameInput);
      setNameIsValid(nameInput.length > 0);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [nameInput, prevNameInput]);

  useEffect(() => {
    if (prevUsernameInput === usernameInput) {
      return;
    }
    const timer = setTimeout(() => {
      setPrevUsernameInput(usernameInput);
      setUsernameIsValid(usernameInput.length > 0);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [usernameInput, prevUsernameInput]);

  const validForm = (oForm) => {
    let bValid = true
    let bEmail = validateEmail(oForm.email);

    const pwdValidation = new RegExp('^[0-9a-zA-Z]{5,}$');
    const pwdToValidate = oForm.password.replace(/ /g, "");

    if(pwdValidation.test(pwdToValidate)){
      bValid = false;
    }

    if(!bEmail){
      bValid = false
    }

    if(!oForm.username){
      bValid = false;
    }

    if(!oForm.name){
      bValid = false;
    }

    if(!oForm.surname){
      bValid = false;
    }

    return bValid;
  };

  const validateEmailPattern = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validateEmail = (sEmail) => {
    const emailValidation = validateEmailPattern(sEmail);
    
    if (!emailValidation) {
      Swal.fire(
        t("emailErr"),
        t("userEmailErr"),
        'error'
      )
       return false;
    }else {
      return true
    }
  }

  const showSave = () => {
    if (disabled) {
      setDisabled(false);
    }else{
      setDisabled(true)
    }
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
        deleteUser(userInfo.id, 
          (oResponse)=>{
            Swal.fire(
              t("deletedSwal"),
              t("deletedSwallabel"),
              'success'
            )
        }, (oError)=> {
    
        })
      }
    })
  }

  const handleSubmit = () => {
    let oForm = {
      username: usernameInput,
      email: emailInput,
      name: nameInput,
      surname: surnameInput,
      password: pwdInput,
      rol: "Client",
      detail: "default",
      otherInformation: "default",
    };
    //TODO: Form validation
    if (validForm(oForm)) {
      onSubmitForm(oForm);
      setDisabled(true);
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hay valores incorrectos'
      });
    }
  };

  return (
    <>
      <form className="formWidth mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="username" className="">
            {t("register.username")}:
            </label>
            <input
              id="username"
              name="username"
              disabled={disabled}
              onChange={(e) => setUsernameInput(e.target.value)}
              value={usernameInput}
              autoComplete="username"
              required
              className={usernameIsValid ? validClassName : invalidClassName}
              placeholder={t("register.username")}
            />
          </div>
          <br />
          <div>
            <label htmlFor="email-address" className="">
            {t("register.email")}:
            </label>
            <input
              id="email-address"
              name="email"
              disabled={disabled}
              onChange={(e) => setEmailInput(e.target.value)}
              value={emailInput}
              type="email"
              autoComplete="email"
              required
              className={emailIsValid ? validClassName : invalidClassName}
              placeholder={t("register.email")}
            />
          </div>
          <br />
          <div>
            <label htmlFor="email-address" className="">
            {t("register.name")}:
            </label>
            <input
              id="name"
              name="name"
              type="name"
              disabled={disabled}
              onChange={(e) => setNameInput(e.target.value)}
              value={nameInput}
              autoComplete="name"
              required
              className={nameIsValid ? validClassName : invalidClassName}
              placeholder="Name"
            />
          </div>
          <br />
          <div>
            <label htmlFor="email-address" className="">
              {t("register.surname")}:
            </label>
            <input
              id="surname"
              name="surname"
              disabled={disabled}
              onChange={(e) => setSurnameInput(e.target.value)}
              value={surnameInput}
              autoComplete="surname"
              required
              className={surnameIsValid ? validClassName : invalidClassName}
              placeholder={t("register.surname")}
            />
          </div>
          <br />
          <div>
            <label htmlFor="password" className="">
            {t("register.password")}:
            </label>
            <input
              id="password"
              name="password"
              disabled={disabled}
              onChange={(e) => setPwdInput(e.target.value)}
              value={pwdInput}
              type="password"
              autoComplete="curren"
              required
              className={pwdIsValid ? validClassName : invalidClassName}
              placeholder={t("register.password")}
            />
          </div>
        </div>
        <div>     
        </div>
      </form>
      {!disabled && (
            <button
              onClick={handleSubmit}
              className="buttonClass group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {t("save")}
            </button>
          )}
          {disabled && (
            <button
              onClick={showSave}
              className="buttonClass group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {t("edit")}
            </button>
          )}
          <br />
      {disabled && (
            <button
            onClick={showModalDelete}
            className="buttonClass bg-red-500 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {t("delete")}
                </button>
          )}
        <br />
        <br />
        {!disabled && (
            <button
            onClick={showSave}
            className="buttonClass bg-red-500 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {t("cancel")}
                </button>
          )}
      <label />
    </>
  );
}
