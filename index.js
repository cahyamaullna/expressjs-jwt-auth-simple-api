import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import AuthRoute from "./routes/AuthRoute.js";
import EmployeesRoute from "./routes/EmployeesRoute.js";
import ProductRoute from "./routes/ProductRoute.js"

dotenv.config();

//IMPORTDB
// import Users from "./models/UserModel.js";
// import Employees from "./models/EmployeeModel.js";
// import Product from "./models/ProductModel.js";
import Transaction from "./entity/TransactionEntity.js";
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected');
    // await Users.sync();
    // await Employees.sync();
    // await Product.sync();
    await Transaction.sync()
} catch (error) {
    console.error(error);
}
 
app.use(cors({ credentials:true, origin:'http:localhost:3000' }));
app.use(cookieParser());
app.use(express.json());

//ROUTER
app.use('/api', AuthRoute);
app.use('/api', EmployeesRoute);
app.use('/api', ProductRoute);
//ENDROUTER

app.listen(3000,()=> console.log('server running at port 3000'));