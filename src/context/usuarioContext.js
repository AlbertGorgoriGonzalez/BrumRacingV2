import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
//TODO: Libreria Helper Tokens https://www.youtube.com/results?search_query=token+helper+react
import { urlApiLaravel } from "../assets/utils/global";
import { getToken, setToken, deleteToken, parseBackendError } from "../assets/utils/helper";

const UserContext = React.createContext();

export function UserProvider(props) {
  const [userInfo, setUserInfo] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    async function cargarUsuario() {
      if (!getToken()) {
        setLoadingUser(false);
        return;
      }
      try {
        const { data: usuario } = await axios.get(urlApiLaravel + "/user");
        setUserInfo(usuario);
        setLoadingUser(false);
      } catch (error) {
        
      }
    }
    cargarUsuario();
  }, []);

  async function login(oForm) {
    const headers = {
      'X-Requested-With': 'XMLHttpRequest',
      'X-CSRF-TOKEN' : 'X'
    }
    try {
      let {data} = await axios.post(urlApiLaravel + "/login", oForm, headers);
      if(data && data.body){
      data.body.password = oForm.password 
      }

      setUserInfo(data.body);
      setToken(data.token);

      return true;
    } catch (error) {
      parseBackendError(error);
        if(error){
            return error.response
        }else{
            return true
        }
    }
  }

  async function signUpRegister(oUserInfo) {
    try {
        let {data} = await axios.post(urlApiLaravel + "/user", oUserInfo);
        if(data && data.User){
          data.User.password = oUserInfo.password 
          }
          
        setUserInfo(data.User);
        setToken(data.token);

        return true;
      } catch (error) {
          if(error){
            return error.response
          }else{
              return true
          }
      }
  }

  function logout() {
    setUserInfo(null);
    deleteToken();
  }

  async function updateUser(oData){
    try {
      let headers = {
        "Authorization" : `Bearer ${getToken()}`
      }

      let {data} = await axios.put(urlApiLaravel + "/user", oData, headers);
      
      if(data && data.User){
        data.User.password = oData.password 
        }
        
      setUserInfo(data.User);
      setToken(data.token);

      return true;
    } catch (error) {
        if(error){
          return error.response
        }else{
            return true
        }
    }
  }

  const value = useMemo(() => {
    return {
      userInfo,
      loadingUser,
      signUpRegister,
      updateUser,
      login,
      logout,
    };
  }, [userInfo, loadingUser]);

  return <UserContext.Provider value={value} {...props} />;
}

export function useUser() {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("Use User debe estar dentro del proveedor userContext");
  }

  return context;
}
