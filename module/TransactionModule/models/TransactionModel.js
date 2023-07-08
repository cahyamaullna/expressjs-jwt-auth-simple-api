import { Sequelize } from "sequelize";
import db from "../../../config/Database.js";
import Product from "../../ProductModule/models/ProductModel.js";
import Discount from "../../DiscountModule/models/MasterDiscountModel.js";
import PaymentMethod from "../../PaymentMethodModule/models/MasterPaymentMethodModel.js";
import User from "../../AuthModule/models/UserModel.js";

const { DataTypes } = Sequelize;

const Transaction = db.define(
  "transaction",
  {
    transactionId: {
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      type: Sequelize.UUID,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discountId: {
      type: DataTypes.STRING,
    },
    finalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    transactionDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paymentDate: {
      type: DataTypes.STRING,
    },
    transactionStatus: {
      type: DataTypes.STRING,
      defaultValue: "UNPAID",
      allowNull: false,
    },
    paymentMethodId: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

Transaction.hasOne(User, { foreignKey: "userId" });
Transaction.belongsTo(User, { foreignKey: "userId" });

Transaction.hasOne(Product, { foreignKey: "productId" });
Transaction.belongsTo(Product, { foreignKey: "productId" });

Transaction.hasOne(Discount, { foreignKey: "discountId" });
Transaction.belongsTo(Discount, { foreignKey: "discountId" });

Transaction.hasOne(PaymentMethod, { foreignKey: "paymentMethodId" });
Transaction.belongsTo(PaymentMethod, { foreignKey: "paymentMethodId" });

export default Transaction;
