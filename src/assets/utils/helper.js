import Axios  from "axios";
import Swal from "sweetalert2";

const TOKEN_KEY = 'BRUMBRUM_TOKEN';

export function setToken(token){
    localStorage.setItem(TOKEN_KEY,token);
}

export function getToken(){
    return localStorage.getItem(TOKEN_KEY);
}

export function deleteToken(){
    localStorage.removeItem(TOKEN_KEY);
}

export function initAxiosInterceptors() {
    Axios.interceptors.request.use(function(config) {
        const token = getToken();

        if (token) {
            config.headers.Authoritzation = `bearer ${token}`
        }

        return config
    });

    Axios.interceptors.response.use(function(response){
        return response
    }, function(error) {

        if(error.response.status === 401){
            console.log('Error: '+ error.response.status)
        }
        return Promise.reject(error)

    })
}

export function parseBackendError(response){

      switch (response.status) {
          case 404:
              return (Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No existe este usuario',
              }));
              case 401:
                  return(Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No está autorizado',
                  }));
            case 422:
                if(response.data.errors.email[0] === "The email has already been taken."){
                    return(Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'El Email ya existe',
                      }));
                }else{
                    return(Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Los datos introducidos són incorrectos',
                      }));
                }
                
            case 500:
                return(Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error en el servidor',
                  }));
          default:
              return(Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error no esperado',
              }))
      }
}