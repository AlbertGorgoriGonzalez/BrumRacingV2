import React, { useRef, useState, useEffect } from "react";
import Loader from "react-js-loader";
import "./form.css";
import Swal from "sweetalert2";

export default function SignUp(props) {
  const { onSubmitForm, showModal, userInfo } = props;

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

    if(!bEmail){
      bValid = false
    }
    return bValid;
  };

  const validateEmail = (sEmail) => {
    let atpos = sEmail.indexOf("@");
    let dotpos = sEmail.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
       alert("Please enter correct email ID")
       document.myForm.EMail.focus() ;
       return false;
    }else {
      return true
    }
  }

  const showSave = () => {
    if (disabled) {
      setDisabled(false);
    }
  }


  const handleSubmit = (oEvent) => {
    oEvent.preventDefault();
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
            <label for="username" className="">
              Username:
            </label>
            <input
              id="username"
              name="username"
              disabled={disabled}
              onChange={(e) => setUsernameInput(e.target.value)}
              value={usernameInput}
              autocomplete="username"
              required
              className={usernameIsValid ? validClassName : invalidClassName}
              placeholder="Username"
            />
          </div>
          <br />
          <div>
            <label for="email-address" className="">
              Email address:
            </label>
            <input
              id="email-address"
              name="email"
              disabled={disabled}
              onChange={(e) => setEmailInput(e.target.value)}
              value={emailInput}
              type="email"
              autocomplete="email"
              required
              className={emailIsValid ? validClassName : invalidClassName}
              placeholder="Email address"
            />
          </div>
          <br />
          <div>
            <label for="email-address" className="">
              Name:
            </label>
            <input
              id="name"
              name="name"
              type="name"
              disabled={disabled}
              onChange={(e) => setNameInput(e.target.value)}
              value={nameInput}
              autocomplete="name"
              required
              className={nameIsValid ? validClassName : invalidClassName}
              placeholder="Name"
            />
          </div>
          <br />
          <div>
            <label for="email-address" className="">
              Surname:
            </label>
            <input
              id="surname"
              name="surname"
              disabled={disabled}
              onChange={(e) => setSurnameInput(e.target.value)}
              value={surnameInput}
              autocomplete="surname"
              required
              className={surnameIsValid ? validClassName : invalidClassName}
              placeholder="Surname"
            />
          </div>
          <br />
          <div>
            <label for="password" className="">
              Password:
            </label>
            <input
              id="password"
              name="password"
              disabled={disabled}
              onChange={(e) => setPwdInput(e.target.value)}
              value={pwdInput}
              type="password"
              autocomplete="curren"
              required
              className={pwdIsValid ? validClassName : invalidClassName}
              placeholder="Password"
            />
          </div>
        </div>
        <div>
          {!disabled && (
            <button
              type="submit"
              onClick={handleSubmit}
              className="buttonClass group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Guardar
            </button>
          )}
          {disabled && (
            <button
              type="submit"
              onClick={showSave}
              className="buttonClass group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Editar
            </button>
          )}
          
        </div>
      </form>
      <label />
    </>
  );
}
