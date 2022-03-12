import axios from "axios";
import { urlApiLaravel } from "../assets/utils/global";

const ModelHandler = {
    updateProfile: (oParameters, onSuccess, onError) => {
        axios.put(urlApiLaravel + '/user', oParameters)
    .then((oResponse) => {
        onSuccess(oResponse)
    })
    .catch((oError) => {
        onError(oError);
    });
    }

}

export default ModelHandler;