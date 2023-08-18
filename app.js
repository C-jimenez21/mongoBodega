import express from "express";
import dotenv from 'dotenv'

import { appToken } from "./src/middlewares/Token.js";
import { appVerify } from "./src/middlewares/Token.js";

import appBodegas from "./src/routers/getRoutes.js";

dotenv.config()

const appExpress = express()

appExpress.use(express.json())
appExpress.use('/token', appToken)
appExpress.use('/apiV1', appVerify, appBodegas)



let config = JSON.parse(process.env.MY_SERVER)

appExpress.listen( config,() => {
    console.log(`listening on http://${config.hostname}:${config.port}`)
});


console.log("Begin a proyect")