import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.configDotenv();

export const sequelize = new Sequelize(
    process.env.NOMBRE,
    process.env.USUARIO,
    process.env.CONTRASENA,
    {
        port: process.env.PUERTO,
        host: process.env.HOST,
        dialect: "mariadb",
    }
);

export const configDb = async () => {
    try {
        await sequelize.authenticate();
        console.log("base de datos conectada");
    } catch (error) {
        console.error("No es posible conectar con la base de datos:", error);
    }
};