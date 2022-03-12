import axios from "axios";
import React, {useState, useEffect, useMemo} from "react";
//TODO: Libreria Helper Tokens https://www.youtube.com/results?search_query=token+helper+react
import { urlApiLaravel } from "../assets/utils/global";
import { getToken, setToken, deleteToken } from "../assets/utils/helper";

const UserContext = React.createContext();

export function UserProvider(props) {
    const [userInfo, setUserInfo] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);

    useEffect(() => {
        async function cargarUsuario () {
            if(!getToken()){
                setLoadingUser(false);
                return
            }
            try {
                const { data: usuario } = await axios.get(urlApiLaravel+'/user/');
                setUserInfo(usuario);
                setLoadingUser(false)
            } catch (error) {
                console.log('Error');
            }
        }
        cargarUsuario();
    }, []);

    async function login(oForm) {
        const {data} = await axios.post(urlApiLaravel+'/auth/login', oForm);

        setUserInfo(data.userInfo);
        //TODO: TOKENS
        setToken(data.access_token);

        if(data.access_token){
            return true
        }
    }

    async function signUpRegister(oUserInfo) {
        const {data} = await axios.post(urlApiLaravel+'/user', oUserInfo);

        setUserInfo(data[0]);
        //TODO: TOKENS
        setToken(data[1].token);

        if(data[1].token){
            return true
        }
    }

    function logout() {
        setUserInfo(null);
        deleteToken();
    }

    const value = useMemo(() => {
        return ({
            userInfo,
            loadingUser,
            signUpRegister,
            login,
            logout
        })
    }, [userInfo, loadingUser]);

    return <UserContext.Provider value={value} {...props} />
}

export function useUser() {
    const context = React.useContext(UserContext);
    if(!context){
        throw new Error('Use User debe estar dentro del proveedor userContext');
    }

    return context;
}