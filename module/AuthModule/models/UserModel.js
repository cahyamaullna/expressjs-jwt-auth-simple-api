import { Sequelize } from "sequelize";
import db from "../../../config/Database.js";
import Role from "../../RoleModule/models/MasterRoleModel.js";

const { DataTypes } = Sequelize;

const Users = db.define('users', {
    userId: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID,
      },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    refresh_token:{
        type: DataTypes.TEXT
    },
    roleId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 101
    }
},{
    freezeTableName:true
});

Users.hasOne(Role, { foreignKey: "roleId" });
Users.belongsTo(Role, { foreignKey: "roleId" });

export default Users;