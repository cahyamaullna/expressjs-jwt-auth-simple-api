import express from "express"
import { verifyToken } from "../middleware/VerfyToken.js";
import {  addMasterDiscount, getMasterDiscount } from "../controllers/MasterDiscountController.js";

const router = express.Router();

router.get('/master-discount', verifyToken, getMasterDiscount);
router.post('/master-discount', verifyToken, addMasterDiscount);

export default router;