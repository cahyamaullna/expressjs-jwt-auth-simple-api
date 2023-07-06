import { addProductModel, getAllProductModel } from "../models/ProductModel.js";

export const getProduct = async (req, res) => {
  try {
    const result = await getAllProductModel();
    res.json({
      message: "GET all products success",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (req, res) => {
  try {
    const result = await addProductModel(req.body);
    if (result) {
      return res.json({
        message: "Post all products success",
        data: "produnya " + req.body.name,
      });
    } else {
      return res.json({
        message: "gagal cok",
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
