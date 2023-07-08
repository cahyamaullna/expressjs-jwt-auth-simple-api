import Discount from "../models/MasterDiscountModel.js";
import { response } from "../../../utils/ResponseUtils.js";

export const getMasterDiscount = async (req, res) => {
    try {
      const discounts = await Discount.findAll({
        attributes: ["discountId","name", "discountPercent","updatedAt"],
      });
      response(200, discounts, "Get All Discount Successfully", res);
    } catch (error) {
      console.log(error.message);
    }
  };

export const addMasterDiscount = async (req, res) => {
    const { name, discountPercent } = req.body;
    try {
      await Discount.create({
        name: name,
        discountPercent: discountPercent
      });
      response(200, "", "Discount Successfully Added", res);
    } catch (error) {
      console.log(error.message);
    }
  };