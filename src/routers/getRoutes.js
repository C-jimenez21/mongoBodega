import { Router } from "express";

import { limitGet } from "../helpers/limit.js";
import { appMiddlewareCampusVerify, appDTOData } from '../middlewares/routers.middleware.js'
import {getBodegas} from '../controllers/getData.js'
import { postNewBodega } from "../controllers/postData.js";

const appBodegas = Router();

appBodegas.get('/bodegas', limitGet(), appMiddlewareCampusVerify, getBodegas)
appBodegas.post('/bodegas', limitGet(), appMiddlewareCampusVerify, appDTOData, postNewBodega)


export default appBodegas