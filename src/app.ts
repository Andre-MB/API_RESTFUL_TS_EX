// ENV variables
require("dotenv").config();

import express from "express"
import config from "config"

// Middlewares
import morganMiddleware from "./middleware/morganMiddleware";

import router from "./router";

const app = express();

// JSON middleware
app.use(express.json());

// DB
import db from "../config/db"

// Logger
import Logger from "../config/logger";

app.use(morganMiddleware);

app.use("/api/", router)


// app port
const port = config.get<number>("port")

app.listen(port, async()=>{
    await db()
    Logger.info(`Aplicação está funcionando na porta: ${port}`)
})