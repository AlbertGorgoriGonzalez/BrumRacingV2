import React, { useState, useEffect, useRef } from "react";
import Logo from '../../assets/images/Logo.png';
import RegisterForm from './Form';
import { Navigate } from "react-router-dom";
import { useUser } from "../../context/usuarioContext";
import { parseBackendError } from "../../assets/utils/helper";

export default function SignUp() {

  const [validationForm, setValidationForm] = useState(false);
  const [bValid, setBValid ] = useState(false)
  const {signUpRegister, userInfo} = useUser();
  const [navigate, setNavigate] = useState(false)

  const handleSubmit = async (oForm) => {
      setValidationForm(false);

      let response = await signUpRegister(oForm);

    if(response === true){
      setNavigate(response);
    }else{
      parseBackendError(response)
      
    }
  }



  return(
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src={Logo} alt="Workflow" />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Registro a Brum Brum RacingGame
      </h2>
    </div>
    <RegisterForm isValidating={validationForm} onSubmitForm={handleSubmit}/>
  </div>
  {navigate &&
    <Navigate to={'/userInfo'} />
  }
</div>
  );
}