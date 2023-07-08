import express from "express"
import { verifyToken } from "../../../middleware/VerfyToken.js";
import { addMasterRole, getMasterRole } from "../controllers/MasterRoleController.js";

const router = express.Router();

router.get('/master-role', verifyToken, getMasterRole);
router.post('/master-role', verifyToken, addMasterRole);

export default router;