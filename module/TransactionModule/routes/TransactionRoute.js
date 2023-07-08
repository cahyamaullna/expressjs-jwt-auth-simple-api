import express from "express"
import { verifyToken } from "../../../middleware/VerfyToken.js";
import { addTransaction, getTransaction, Payment } from "../controllers/TransactionController.js";

const router = express.Router();

router.get('/transaction', verifyToken, getTransaction);
router.post('/transaction', verifyToken, addTransaction);
router.post('/transaction/payment', verifyToken, Payment);

export default router;