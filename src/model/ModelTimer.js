import axios from "axios";
import { urlApiTimer,urlApiLaravel } from "../assets/utils/global";

import { getToken, parseBackendError } from "../assets/utils/helper";

export const getTopLaps = async (oBody) => {
    const headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-TOKEN' : 'X'
      }
      try {
        const response = await axios.get(urlApiTimer + "/record", {
            params: oBody});
  
        return response;
      } catch (error) {
        parseBackendError(error);
          if(error){
              return error.response
          }else{
              return true
          }
      }
}

export const getUserInfo = async (userId) => {
    const token = getToken();
    const config = {
        headers:{
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-TOKEN' : 'X'
      }
    }
      try {
        const response = await axios.get(urlApiLaravel + "/userSimple/"+userId, config);
  
        return response.data;
      } catch (error) {
        parseBackendError(error);
          if(error){
              return error.response
          }else{
              return true
          }
      }
}

export const getLap = async (sUserId) => {
      try {
        const response = await axios.get(urlApiTimer + "/timelap/"+sUserId);
  
        return response;
      } catch (error) {
        parseBackendError(error);
          if(error){
              return error.response
          }else{
              return true
          }
      }
}