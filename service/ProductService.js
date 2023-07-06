import { QueryTypes } from "sequelize";
import db from "../config/Database.js";

export const getAllProductService = async () => {
  return await db.query("SELECT * FROM `products`", {
    type: QueryTypes.SELECT,
  });
};

export const addProductService = async (payload) => {
  console.log(payload);
  const sql = `
      INSERT INTO products (name, price, available)
      VALUES ('${payload.name}', '${payload.price}', '${payload.available}');
    `;
  return await db.query(sql, {
    type: QueryTypes.INSERT,
  });
};
