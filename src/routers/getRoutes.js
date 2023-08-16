import { Router } from "express";
import {getBodegas} from '../controllers/getData.js'

const appBodegas = Router();

appBodegas.get('/bodegas', getBodegas)


export default appBodegas