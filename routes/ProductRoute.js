import express from "express"
import { verifyToken } from "../middleware/VerfyToken.js";
import { getProduct, addProduct } from "../controllers/ProductController.js";

const router = express.Router();

router.get('/products', verifyToken, getProduct);
router.post('/products', verifyToken, addProduct);

export default router;