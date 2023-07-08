import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import AuthRoute from "./module/AuthModule/routes/AuthRoute.js";
import EmployeesRoute from "./module/EmployeeModule/routes/EmployeesRoute.js";
import ProductRoute from "./module/ProductModule/routes/ProductRoute.js";
import TransactionRoute from "./module/TransactionModule/routes/TransactionRoute.js";
import MasterDiscountRoute from "./module/DiscountModule/routes/MasterDiscount.js"
import MasterPaymentMethod from "./module/PaymentMethodModule/routes/MasterPaymentMethod.js"
import MasterRoleRoute from "./module/RoleModule/routes/MasterRoleRoute.js";

import { generateTable } from "./utils/GenerateTable.js";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  // generateTable()
} catch (error) {
  console.error(error);
}

app.use(cors({ credentials: true, origin: "http:localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
//ROUTER
app.use("/api", AuthRoute);
app.use("/api", EmployeesRoute);
app.use("/api", ProductRoute);
app.use("/api", TransactionRoute);
app.use("/api", MasterDiscountRoute);
app.use("/api", MasterPaymentMethod);
app.use("/api", MasterRoleRoute);
//ENDROUTER

app.listen(3000, () => console.log("server running at port 3000"));
