import { Sequelize } from "sequelize";
import db from "../../../config/Database.js";

const { DataTypes } = Sequelize;

const MasterDiscount = db.define(
  "master_discount",
  {
    discountId: {
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      type: Sequelize.UUID,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discountPercent: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  },
  {
    freezeTableName: true,
  }
);

export default MasterDiscount;
