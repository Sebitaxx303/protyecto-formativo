import { createContext, useState, useContext, useEffect } from "react";
import { LoginRequest, LogoutRequest, RegisterRequest, VerifyTokenRequest, AddMachineRequest, GetMachineRequest, DeleteMachineRequest, GetUserRequest } from "../api/auth";
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
    const [getUser, setgetUser] = useState(null)
    const [getMachine, setGetMachine] = useState(null)
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

    const DeleteMachine = async (id) => {
        try {
            await DeleteMachineRequest(id)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        async function getUsers(){
        try {
            const getUser = await GetUserRequest()
            setgetUser(getUser.data)
            console.log(getUser)
        } catch (error) {
          console.log(error)
        }
    }
    getUsers();
      },[])
    useEffect(()=>{
    async function machines(){
    try {
        const getMachine = await GetMachineRequest()
        if(getMachine != null) {setGetMachine(getMachine.data)}
    } catch (error) {
      console.log(error)
    }
}
 machines();
  },[])
  
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
            getUser,
            machine,
            getMachine,
            DeleteMachine,
            user, 
            isAuthenticathed,
            errors,
            loading
         }}>
           {children}
         </AuthContext.Provider>

        )
          
}