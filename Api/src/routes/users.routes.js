import { Router } from "express";

//IMPORTACION DE CONTROLADORES
import { Update, VerifyToken, acceptRequest, empresas, login, logout, profile, register, talleres, userType } from "../controllers/users.controller.js";
import { requiredAuth } from "../middlewares/tokenValidator.js";
import { validatorSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/users.schema.js";




const router = new Router();

router.post('/register', validatorSchema(registerSchema), register)
router.post('/login', validatorSchema(loginSchema) ,login)
router.post('/logout', logout)
router.put('/update', requiredAuth, Update)
router.get('/verify', requiredAuth, VerifyToken)
router.get('/type', requiredAuth, userType)
router.get('/profile', requiredAuth, profile)
router.get('/talleres', requiredAuth, talleres)
router.get('/empresas', requiredAuth, empresas)
router.post('/request/:id_request', requiredAuth, acceptRequest)



export default router;