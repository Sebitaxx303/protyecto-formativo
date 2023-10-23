import { createContext, useState, useContext, useEffect } from "react";
import { LoginRequest, LogoutRequest, RegisterRequest, VerifyTokenRequest, AddMachineRequest, GetMachineRequest, DeleteMachineRequest, GetUserRequest, UpdateRequest, GetUserTypeRequest, UpdateMachineRequest, GetAMachineRequest, AddRequestRequest, GetTalleresRequest, GetRequestsRequest, GetRequestsUserRequest, DeleteRequestRequest} from "../api/auth";
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
    const [getRequests, setGetRequests] = useState(null)
    const [getRequestsUser, setGetRequestsUser] = useState(null)
    const [getTaller, setGetTaller] = useState(null)
    const [getMachine, setGetMachine] = useState(null)
    const [userType, setUserType] = useState(null)
    const [isAuthenticathed, setIsAuthenticathed] = useState(false);
    const [errors , setErrors] = useState([]);
    const [loading, setLoading] = useState(true);


    //PETICION PARA REGISTRO DE USUARIOS
    const signup = async (user)=> {
        try {
            const res = await RegisterRequest (user)
            setIsAuthenticathed(true);
            window.location.reload()
            setUser(res.data);
        } catch (error) {
            setErrors(error.response.data)
            console.log((error))
        }
    }
    //PETICION PARA INICIO DE SESION
    const signin = async (user) => {
        try {
            const res = await LoginRequest(user);
            setIsAuthenticathed(true);
            window.location.reload()
            setUser(res.data)
        } catch (error) {
            console.log(error)
            if(Array.isArray(error.response.data)){
                setErrors(error.data.message)
            }
            setErrors([error.response.data.message]);
        }
    }
    //PETICION PARA ACTUALIZACION DE DATOS DE USUARIO
    const update = async (user)=> {
        try {
            const res = await UpdateRequest (user)
            setUser(res.data);
            window.location.reload()
        } catch (error) {
            setErrors(error.response.data)
            console.log((error))
        }
    }

    //PETICION PARA CERRAR SESION
    const logout = async () => {
        try {
            await LogoutRequest();
            setIsAuthenticathed(false)
        } catch (error) {
            console.log(error)
        }
        
    }

   // PETICION PARA OBTENER TALLERES
    // const getTalleres = async () => {
    //     try {
    //         const res = await GetTalleresRequest()
    //         setGetTaller(res.data)
    //     } catch (error) {
    //         console.log(error)
    //     }

    // }

    //PETICION PARA AGREGAR MAQUINAS
    const AddMachine = async (machine) =>{
        try {
            const res = await AddMachineRequest (machine)
            setMachine(res.data)
            window.location.reload()
            window.alert('maquina registrada exitosamente')
        } catch (error) {
            setErrors(error.response.data)
            console.log((error))
        }
    }

    //PETICION PARA ACTUALIZAR MAQUINAS
    const UpdateMachine = async (id, machine) => {
        try {
            await UpdateMachineRequest(id, machine)
            window.location.reload()
        } catch (error) {
            setErrors(error.response.data)
            console.log((error))
        }
    }

    //PETICION PARA ELIMINAR MAQUINAS
    const DeleteMachine = async (id) => {
        try {
            await DeleteMachineRequest(id)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    //PETICION PARA OBTENER UNA MAQUINA
    const getAMachine = async (id) => {
        const res = await GetAMachineRequest(id)
        return res.data
    }

    //PETICION PARA CREAR UNA PETICION
    const AddRequest = async (request) =>{
        try {
            const res = await AddRequestRequest(request)
            console.log(res)
            window.location.reload()
        } catch (error) {
            setErrors(error.response.data)
            console.log((error))
        }
    }

    //PETICION PARA ELIMINAR MAQUINAS
    const DeletRequest = async (id) => {
        try {
            await DeleteRequestRequest(id)
            console.log(id)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

 
    //EFFECT PARA OBTENER EL TIPO DE USUARIO
    useEffect(()=> {
        async function getType(){
            try {
                const userType = await GetUserTypeRequest()
                setUserType(userType.data)
                
            } catch (error) {
                console.log(error)
            }
        }
        getType()
    },[])

    //EFFECT PARA OBTENER LOS USUARIOS
    useEffect(()=>{
        async function getUsers(){
        try {
            const getUser = await GetUserRequest()
            setgetUser(getUser.data)
        } catch (error) {
          console.log(error)
        }
    }
    getUsers();
    },[])

    //EFFECT PARA OBTENER TODAS LAS MAQUINAS
    useEffect(()=>{
    async function machines(){
    try {
        const getMachine = await GetMachineRequest()
        if(getMachine != null) {
            setGetMachine(getMachine.data)
        }
    } catch (error) {
      console.log(error)
    }
}
 machines();
    },[])

    
    //EFFECT PARA OBTENER TODAS LAS PETICIONES
    useEffect(()=>{
        async function requests(){
        try {
            const getRequests = await GetRequestsRequest()
            if(getRequests != null) {
                setGetRequests(getRequests.data)
            }
        } catch (error) {
          console.log(error)
        }
    }
    requests();
        },[])

    //EFFECT PARA OBTENER TODAS LAS PETICIONES POR USUARIO
    useEffect(()=>{
        async function requestsUser(){
        try {
            const getRequests = await GetRequestsUserRequest()
            if(getRequests != null) {
                setGetRequestsUser(getRequests.data)
            }
        } catch (error) {
          console.log(error)
        }
    }
    requestsUser();
        },[])

    useEffect( () => {
        async function talleres(){
            try {
                const getTalleres = await GetTalleresRequest()
                if(getTalleres != null){
                setGetTaller(getTalleres.data)
            }
            } catch (error) {
                console.log(error)
            }
        }
        talleres()
    },[])
  
    //EFFECT PARA LOS ERRORES
    useEffect(() => {
        if(errors.length > 0){
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer)
        }
    }, [errors])

    //EFFECT PARA LA VALIDACION DEL USUARIO
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
            update,
            logout,
            getUser,
            userType,
            user,
            getTaller,

            UpdateMachine,
            AddMachine,
            getAMachine,
            machine,
            getMachine,
            DeleteMachine,
            
            AddRequest,
            getRequests,
            DeletRequest,
            getRequestsUser,

            isAuthenticathed,
            errors,
            loading
         }}>
           {children}
         </AuthContext.Provider>

        )
          
}