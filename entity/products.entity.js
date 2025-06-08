import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Products = sequelize.define("productos", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "name",
    },
    talla: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "name",
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "name",
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

Products.sync();
