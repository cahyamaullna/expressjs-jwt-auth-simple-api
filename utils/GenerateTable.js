import Users from "../models/UserModel.js";
import Employees from "../models/EmployeeModel.js";
import Product from "../models/ProductModel.js";
import Transaction from "../models/TransactionModel.js";
import MasterDiscount from "../models/MasterDiscountModel.js";
import MasterPaymentMethod from "../models/MasterPaymentMethodModel.js";
import MasterRole from "../models/MasterRoleModel.js"

export const generateTable = async () => {
  try {
    await Users.sync();
    await Employees.sync();
    await Product.sync();
    await Transaction.sync();
    await MasterDiscount.sync();
    await MasterPaymentMethod.sync();
    await MasterRole.sync();
  } catch (error) {}
};
