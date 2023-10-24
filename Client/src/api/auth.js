import axios from "./axios.js";

// PETICIONES DE USUARIO
export const RegisterRequest = user => axios.post('/register', user)

export const LoginRequest = user => axios.post('/login', user)

export const UpdateRequest = user => axios.put('/update', user)

export const LogoutRequest =  () => axios.post('/logout')

export const GetUserRequest = () => axios.get('/profile')

export const GetUserTypeRequest = () => axios.get('/type')

export const VerifyTokenRequest = () => axios.get('/verify')

export const GetTalleresRequest = () => axios.get('/talleres')

export const GetEmpresasRequest = () => axios.get('/empresas')

export const AcceptRequestRequest = id => axios.post(`/request/${id}`)

// PETICIONES DE MAQUINAS

export const AddMachineRequest = machine => axios.post('/add-machine', machine)

export const GetMachineRequest = () => axios.get('/get-machines')

export const GetAMachineRequest = (id) => axios.get(`/get-machine/${id}`)

export const DeleteMachineRequest = id => axios.delete(`/delete-machine/${id}`)

export const UpdateMachineRequest = (id, machine) => axios.put(`/update-machine/${id}`, machine)

//PETICIONES DE PETICIONES

export const AddRequestRequest = request => axios.post('/add-request', request)

export const GetRequestsRequest = () => axios.get('/get-requests')

export const GetRequestsUserRequest = () => axios.get('/get-requests-user')

export const GetRequestsUserAcceptedRequest = () => axios.get('/get-requests-user-acepted')

export const DeleteRequestRequest = (id) => axios.delete(`/delete-request/${id}`)

export const DeletePostulationRequest = (id) => axios.delete(`/delete-postulation/${id}`)

export const UpdateRequestRequest = (id, request) => axios.put(`/update-request/${id}`, request)



