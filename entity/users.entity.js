import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const User = sequelize.define("users",{
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        DefaultValue: "name",
    },
    age: {
        type: DataTypes.NUMBER,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
User.sync();