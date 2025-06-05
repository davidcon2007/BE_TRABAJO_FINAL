import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import { customMiddleware } from "./middlewares/customMiddleware.js";
import { configDb } from "./config/db.js";

const app = express();

app.use(bodyParser.json());
app.use(morgan());

app.get("/",[customMiddleware],(req,res) => {
    console.log(req.headers.myTime);
    console.log(req.body);
    return res.json({
        message:"Hola mundo",
    });
});

configDb();

app.listen(8000,()=>{
    console.log("listening on port 8000")
});
