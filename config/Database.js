import {Sequelize} from "sequelize";

const db = new Sequelize('db_payment','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;