import axios from "./axios.js";

export const RegisterRequest = user => axios.post('/register', user)

export const LoginRequest = user => axios.post('/login', user)

export const UpdateRequest = user => axios.put('/update', user)

export const LogoutRequest =  () => axios.post('/logout')

export const GetUserRequest = () => axios.get('/profile')

export const GetUserTypeRequest = () => axios.get('/type')

export const VerifyTokenRequest = () => axios.get('/verify')

export const AddMachineRequest = machine => axios.post('/add-machine', machine)

export const GetMachineRequest = () => axios.get('/get-machines')

export const DeleteMachineRequest = id => axios.delete(`/delete-machine/${id}`)

export const UpdateMachineRequest = (id, machine) => axios.put(`update-machine/${id}`, machine)