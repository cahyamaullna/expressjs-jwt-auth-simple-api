import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Transaction = db.define('transaction', {
    productId:{
        type: DataTypes.INTEGER
    },
    discountId:{
        type: DataTypes.INTEGER
    },
    finalPrice:{
        type: DataTypes.INTEGER
    },
    transactionDate:{
        type: DataTypes.STRING
    },
    paymentDate: {
        type: DataTypes.STRING
    },
    transactionStatus: {
        type: DataTypes.STRING
    },
    paymentMethodId: {
        type: DataTypes.INTEGER
    }
},{
    freezeTableName:true
});

export default Transaction;