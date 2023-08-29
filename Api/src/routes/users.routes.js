import { Router } from "express";

//IMPORTACION DE CONTROLADORES
import { VerifyToken, login, logout, profile, register } from "../controllers/users.controller.js";
import { requiredAuth } from "../middlewares/tokenValidator.js";
import { validatorSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/users.schema.js";




const router = new Router();

router.post('/register', validatorSchema(registerSchema), register)
router.post('/login', validatorSchema(loginSchema) ,login)
router.post('/logout', logout)
router.get('/verify', VerifyToken)
router.get('/profile', requiredAuth, profile)


export default router;