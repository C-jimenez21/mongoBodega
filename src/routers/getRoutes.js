import { Router } from "express";
import {getBodegas, postBodegas} from '../controllers/getData.js'

const appBodegas = Router();

appBodegas.get('/bodegas', getBodegas)
appBodegas.post('/bodegas', postBodegas)


export default appBodegas