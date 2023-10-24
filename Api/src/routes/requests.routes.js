import { Router } from "express";
import { requiredAuth } from "../middlewares/tokenValidator.js";
import { DeletePostulation, addRequest, deleteRequest, getRequest, getRequests, getRequestsUser, getRequestsUserAcepted } from "../controllers/requests.controller.js";

const router = new Router();

router.post("/add-request", requiredAuth, addRequest )
router.get("/get-requests", requiredAuth, getRequests)
router.get("/get-requests-user", requiredAuth, getRequestsUser)
router.get("/get-requests-user-acepted", requiredAuth, getRequestsUserAcepted)
router.get("/get-request/:id", requiredAuth, getRequest)
router.put("/update-request/:id",requiredAuth, deleteRequest)
router.delete("/delete-postulation/:id_d_r_t",requiredAuth, DeletePostulation)
router.delete("/delete-request/:id",requiredAuth, deleteRequest)
 

export default router