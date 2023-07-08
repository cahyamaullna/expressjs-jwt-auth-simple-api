import Product from "../models/ProductModel.js";
import { response } from "../../../utils/ResponseUtils.js";

export const getProduct = async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: ["productId", "name", "price", "quantity", "updatedAt"],
    });
    response(200, products, "Get All Product Successfully", res);
  } catch (error) {
    console.log(error.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        productId: req.params.id,
      },
    });
    response(200, product, "Get Product by ID Successfully", res);
  } catch (error) {
    console.log(error.message);
  }
};

export const addProduct = async (req, res) => {
  const { name, price, quantity } = req.body;
  try {
    await Product.bulkCreate(req.body);
    response(201, "", "Product Successfully Added", res);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: {
        productId: req.params.id,
      },
    });
    response(200, "", "Product Successfully Updated", res);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        productId: req.params.id,
      },
    });
    response(200, "", "Product " + req.params.id + " has been Deteled", res);
  } catch (error) {
    console.log(error.message);
  }
};

// custom query
// import {
//   addProductService,
//   getAllProductService,
// } from "../service/ProductService.js";
// import { response } from "../utils/ResponseUtils.js";

// export const getProduct = async (req, res) => {
//   try {
//     const result = await getAllProductService();
//     response(200, result, "Get All Product Successfully", res);
//   } catch (err) {
//     throw err;
//   }
// };

// export const addProduct = async (req, res) => {
//   try {
//     const result = await addProductService(req.body);
//     if (result) {
//       response(
//         200,
//         "",
//         "Product " + req.body.name + " added successfully",
//         res
//       );
//     } else {
//       response(400, result, "Request Failure", res);
//     }
//   } catch (error) {
//     throw err;
//   }
// };
