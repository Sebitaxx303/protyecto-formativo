import { Router } from "express";

//IMPORTACION DE CONTROLADORES
import { addMachine, deleteMachine, getMachine, getMachines, updateMachine } from "../controllers/machines.controller.js"
import { requiredAuth } from "../middlewares/tokenValidator.js";
// import { validatorSchema } from "../middlewares/validator.middleware.js";
// import { loginSchema, registerSchema } from "../schemas/users.schema.js";

const router = new Router();

router.post('/add-machine', requiredAuth ,addMachine)
router.get('/get-machines', requiredAuth, getMachines)
router.get('/get-machine', requiredAuth, getMachine)
router.put('/update-machine', requiredAuth, updateMachine)
router.delete('/delete-machine',requiredAuth, deleteMachine)


export default router