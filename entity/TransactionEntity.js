import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Transaction = db.define('transaction', {
    productId:{
        type: DataTypes.INTEGER
    },
    date:{
        type: DataTypes.DATE
    },
    price:{
        type: DataTypes.INTEGER
    },
},{
    freezeTableName:true
});

export default Transaction;