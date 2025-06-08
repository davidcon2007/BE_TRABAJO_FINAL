import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";
import User from "../routes/users.routes.js";

configDotenv();
export const authMiddleware = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        const token = authorization.split(" ")[1];

        const { userId } = jwt.verify(token, process.env.SECRET);

        const user = await User.findOne({ where: { id: userId } });

        if (!user) {
            return res.status(404).json({ data: "Usuario no disponible" });
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ data: "El token no es válido" });
    }
};
