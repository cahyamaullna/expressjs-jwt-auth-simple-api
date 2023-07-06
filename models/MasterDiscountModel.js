import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const MasterDiscount = db.define(
  "master_discount",
  {
    name: {
      type: DataTypes.STRING,
    },
    discountPercent: {
        type: DataTypes.INTEGER,
    }
  },
  {
    freezeTableName: true,
  }
);

export default MasterDiscount;
