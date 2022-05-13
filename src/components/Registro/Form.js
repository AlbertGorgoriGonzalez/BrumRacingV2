import React, { useRef } from "react";
import Loader from "react-js-loader";
import {useTranslation} from 'react-i18next';

export default function SignUp(props) {
  const { onSubmitForm, isValidating } = props;


  const userAliasRef = useRef();
  const userEmailRef = useRef();
  const userNameRef = useRef();
  const userSurnameRef = useRef();
  const userPasswordRef = useRef();

  const validForm = (oForm) => {
    return true
  }
  const [t, i18n] = useTranslation("global");

  const handleSubmit = (oEvent) => {
    oEvent.preventDefault();
    let oForm = {
      username: userAliasRef.current.value,
      email: userEmailRef.current.value,
      name: userNameRef.current.value,
      surname: userSurnameRef.current.value,
      password: userPasswordRef.current.value,
      rol: "Client",
      detail: "default",
      otherInformation: "default",
    };
    //TODO: Form validation
    if(validForm()){
      onSubmitForm(oForm);
    }
  };

  return (
    <>
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">
              {t("register.username")}
            </label>
            <input
              id="username"
              name="username"
              ref={userAliasRef}
              autocomplete="username"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder={t("register.username")}
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
            {t("register.email")}
            </label>
            <input
              id="email-address"
              name="email"
              ref={userEmailRef}
              type="email"
              autocomplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder={t("register.email")}
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
            {t("register.name")}
            </label>
            <input
              id="name"
              name="name"
              type="name"
              ref={userNameRef}
              autocomplete="name"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder={t("register.name")}
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
            {t("register.surname")}
            </label>
            <input
              id="surname"
              name="surname"
              ref={userSurnameRef}
              autocomplete="surname"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder={t("register.surname")}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
            {t("register.password")}
            </label>
            <input
              id="password"
              name="password"
              ref={userPasswordRef}
              type="password"
              autocomplete="curren"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder={t("register.password")}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <a
              href="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {t("register.alreadyAccount")}
            </a>
          </div>
        </div>
        <div>
          {isValidating && (
            <Loader
              type="bubble-top"
              bgColor={"#FFFFFF"}
              title={"loader"}
              color={"#000000"}
              size={100}
            />
          )}
          {!isValidating &&(
            <button
              type="submit"
              onClick={handleSubmit}
              className="buttonClass group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {t("header.signup")}
            </button>)
          }
        </div>
      </form>
    </>
  );
}
