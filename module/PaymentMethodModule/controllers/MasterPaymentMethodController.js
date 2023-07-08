import PaymentMethod from "../models/MasterPaymentMethodModel.js";
import { response } from "../../../utils/ResponseUtils.js";

export const getMasterPaymentMethod = async (req, res) => {
    try {
      const result = await PaymentMethod.findAll({
        attributes: ["paymentMethodId","name","updatedAt"],
      });
      response(200, result, "Get All Payment method Successfully", res);
    } catch (error) {
      console.log(error.message);
    }
  };

export const addMasterPaymentMethod = async (req, res) => {
    const { name} = req.body;
    try {
      await PaymentMethod.create({
        name: name,
      });
      response(200, "", "Payment Method Successfully Added", res);
    } catch (error) {
      console.log(error.message);
    }
}