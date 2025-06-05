import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Products = sequelize.define("Productos", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    talla: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
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

export default Products;
