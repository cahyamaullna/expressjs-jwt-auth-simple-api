import express from "express"
import { verifyToken } from "../../../middleware/VerfyToken.js";
import { getProduct, addProduct, getProductById, updateProduct, deleteProduct } from "../controllers/ProductController.js";

const router = express.Router();

router.get('/product', verifyToken, getProduct);
router.get('/product/:id', verifyToken, getProductById);
router.post('/product', verifyToken, addProduct);
router.patch('/product/:id', verifyToken, updateProduct);
router.delete('/product/:id', verifyToken, deleteProduct);

export default router;