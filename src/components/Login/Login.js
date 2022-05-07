import React, { useState, useEffect, useRef } from "react";
import Logo from '../../assets/images/Logo.png';
import { useUser } from "../../context/usuarioContext";
import { Navigate } from "react-router-dom";
import { parseBackendError } from "../../assets/utils/helper";
import Swal from "sweetalert2";


export default function SignIn() {
  const {login, usuario} = useUser();
  const [navigate, setNavigate] = useState(false)
  const userEmailRef = useRef();
  const userPasswordRef = useRef();


  const validForm = (oForm) => {
    return true
  }

  const handleSubmit = (oEvent) => {
    oEvent.preventDefault();
    let oForm = {
      email: userEmailRef.current.value,
      password: userPasswordRef.current.value
    };
    //TODO: Form validation
    if(validForm()){
      onGoToProfile(oForm)
    }
  };

  const onGoToProfile = async (oForm) => {
    let response = await login(oForm);

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
        Bienvenido a Brum Brum RacingGame
      </h2>
    </div>
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" ref={userEmailRef} type="email" autocomplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
          <label for="password" className="sr-only">Password</label>
          <input id="password" name="password" type="password" ref={userPasswordRef} autocomplete="curren" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
        </div>
      </div>

      <div className="flex items-center justify-between">

        <div className="text-sm">
          <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
            Todavia no te has registrado?
          </a>
        </div>
      </div>

      <div>
        <button type="submit" onClick={handleSubmit} className="buttonClass group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Sign in
        </button>
      </div>
    </form>
  </div>
  {navigate &&
    <Navigate to={'/userInfo'} />
  }
</div>
  );
}