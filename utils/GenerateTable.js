import Users from "../module/AuthModule/models/UserModel.js";
import Employees from "../module/EmployeeModule/models/EmployeeModel.js";
import Product from "../module/ProductModule/models/ProductModel.js";
import Transaction from "../module/TransactionModule/models/TransactionModel.js";
import MasterDiscount from "../module/DiscountModule/models/MasterDiscountModel.js";
import MasterPaymentMethod from "../module/PaymentMethodModule/models/MasterPaymentMethodModel.js";
import MasterRole from "../module/RoleModule/models/MasterRoleModel.js"

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
