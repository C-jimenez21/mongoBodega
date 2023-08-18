import { Router } from "express";

import { limitGet } from "../helpers/limit.js";
import { appMiddlewareCampusVerify, appDTOData } from '../middlewares/routers.middleware.js'
import {getBodegas, getProductosTotal} from '../controllers/getData.js'
import { postNewBodega, postNewProduct, insertinventoryIf } from "../controllers/postData.js";
import { transferProducts} from "../controllers/updateData.js";

const appBodegas = Router();

appBodegas.get('/bodegas', limitGet(), appMiddlewareCampusVerify, getBodegas)
appBodegas.get('/productos/totalProductos', limitGet(), appMiddlewareCampusVerify, getProductosTotal)
appBodegas.post('/bodegas', limitGet(), appMiddlewareCampusVerify, appDTOData, postNewBodega)
appBodegas.post('/productos', limitGet(), appMiddlewareCampusVerify,appDTOData, postNewProduct )
appBodegas.post('/inventarios', limitGet(), appMiddlewareCampusVerify,appDTOData, insertinventoryIf )
appBodegas.post('/productos/trasladar', limitGet(), appMiddlewareCampusVerify, transferProducts )



export default appBodegas

    