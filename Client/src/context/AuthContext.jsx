import { createContext, useState, useContext, useEffect } from "react";
import { LoginRequest, LogoutRequest, RegisterRequest, VerifyTokenRequest, AddMachineRequest } from "../api/auth";
import Cookies from 'js-cookie'

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [machine, setMachine] = useState(null)
    const [isAuthenticathed, setIsAuthenticathed] = useState(false);
    const [errors , setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    //PETICION PARA REGISTRO DE USUARIOS
    const signup = async (user)=> {
        try {
            const res = await RegisterRequest (user)
            setIsAuthenticathed(true);
            setUser(res.data);
        } catch (error) {
            setErrors(error.response.data)
            console.log((error))
        }
    }

    const signin = async (user) => {
        try {
            const res = await LoginRequest(user);
            setIsAuthenticathed(true);
            setUser(res.data)
        } catch (error) {
            console.log(error)
            if(Array.isArray(error.response.data)){
                setErrors(error.data.message)
            }
            setErrors([error.response.data.message]);
        }
    }

    const logout = async () => {
        try {
            await LogoutRequest();
            setIsAuthenticathed(false)
        } catch (error) {
            console.log(error)
        }
        
    }

    const AddMachine = async (machine) =>{
        try {
            const res = await AddMachineRequest (machine)
            setMachine(res.data)
        } catch (error) {
            setErrors(error.response.data)
            console.log((error))
        }
    }

    useEffect(() => {
        if(errors.length > 0){
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer)
        }
    }, [errors])

    useEffect (() => {
        async function checkLogin() {
            const cookies = Cookies.get();
            if(!cookies.token){
                setIsAuthenticathed(false)
                setLoading(false)
                return(setUser(null))
            }
            try {
                const res = await VerifyTokenRequest(cookies.token)
                console.log(res)
                if(!res.data){
                    setIsAuthenticathed(false);
                    setLoading(false)
                }
                setIsAuthenticathed(true);
                setUser(res.data);
                setLoading(false)
            } catch (error) {
                setIsAuthenticathed(false)
                setUser(null)
                setLoading(false)
        }
        }
        checkLogin();
    },[])
    return(
        <AuthContext.Provider value={{
            signup,
            signin,
            logout,
            AddMachine,
            machine,
            user, 
            isAuthenticathed,
            errors,
            loading
         }}>
           {children}
         </AuthContext.Provider>

        )
          
}