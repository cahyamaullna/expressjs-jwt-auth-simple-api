import express from "express"
import { verifyToken } from "../middleware/VerfyToken.js";
import { addMasterPaymentMethod, getMasterPaymentMethod } from "../controllers/MasterPaymentMethodController.js";

const router = express.Router();

router.get('/master-payment', verifyToken, getMasterPaymentMethod);
router.post('/master-payment', verifyToken, addMasterPaymentMethod);

export default router;