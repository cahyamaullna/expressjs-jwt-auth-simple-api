import Transaction from "../models/TransactionModel.js";
import Product from "../../ProductModule/models/ProductModel.js";
import Discount from "../../DiscountModule/models/MasterDiscountModel.js";
import { response } from "../../../utils/ResponseUtils.js";
import PaymentMethod from "../../PaymentMethodModule/models/MasterPaymentMethodModel.js";
import User from "../../AuthModule/models/UserModel.js";
import Role from "../../RoleModule/models/MasterRoleModel.js";

export const getTransaction = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      attributes: [
        "transactionId",
        "productId",
        "amount",
        "discountId",
        "finalPrice",
        "transactionDate",
        "transactionStatus",
        "paymentDate",
        "paymentMethodId",
      ],
      include: [
        { model: Product, attributes: ["name", "price"] },
        { model: Discount, attributes: ["name", "discountPercent"] },
        { model: PaymentMethod, attributes: ["name"] },
        {
          model: User,
          attributes: ["name"],
          include: [{ model: Role, attributes: ["name"] }],
        },
      ],
    });
    response(200, transactions, "Get All Transaction Successfully", res);
  } catch (error) {
    console.log(error.message);
  }
};

export const addTransaction = async (req, res) => {
  const { userId, productId, amount, discountId, finalPrice, transactionDate } =
    req.body;
  try {
    await Transaction.create({
      userId: userId,
      productId: productId,
      amount: amount,
      discountId: discountId,
      finalPrice: finalPrice,
      transactionDate: transactionDate,
    });
    response(
      201,
      "",
      "Transaction with Product Id " + req.body.productId + " success",
      res
    );
  } catch (error) {
    console.log(error);
  }
};

export const Payment = async (req, res) => {
  const { transactionId, paymentMethodId, paymentDate } = req.body;
  try {
    await Transaction.update(
      {
        transactionId: transactionId,
        paymentMethodId: paymentMethodId,
        paymentDate: paymentDate,
        transactionStatus: "PAID",
      },
      {
        where: {
          transactionId: transactionId,
        },
      }
    );
    response(
      200,
      "",
      "Payment with Transaction Id " + req.body.transactionId + " success",
      res
    );
  } catch (error) {
    console.log(error);
  }
};
